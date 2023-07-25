const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const https = require('https');
const { JSDOM } = require('jsdom');
const countries = require('./countries'); // We separated countries in another file for cleanliness and easy management
const app = express();

// The "chosen" country to be used in our endpoint.
// This could be dynamic based on your application's needs.
const chosen = "algerie";

// Enable Cross-Origin Resource Sharing (CORS) to let client-side applications 
// interact with our server-side application.
app.use(cors({ origin: true }));

// This is a catch-all endpoint which simply responds with "OK".
// This might be used for health checks or simple validations.
app.get("*", (req, res) => {
    res.send("OK");
});

// POST endpoint for our proxy service
app.post('/proxy/', (req, res) => {
    // Load the config 
    const url = countries[chosen]["url"];
    const regex_replacers = countries[chosen]["words"];
    const current_answer = countries[chosen]["answer"];

    // Load the ud data
    https.get(url, (resp) => {
        
        let body = '';

        resp.on('data', (chunk) => {
            body += chunk;
        });

        // Once all data has been received, manipulate the response 
        // to remove spoilers
        resp.on('end', () => {
            const dom = new JSDOM(body, { url });

            // Create a tree walker to traverse all text nodes in the DOM tree
            const walker = dom.window.document.createTreeWalker(dom.window.document.body, 4); // 4 => NodeFilter.SHOW_TEXT
            let node;
            while (node = walker.nextNode()) {
                // For each text node, we replace the spoiler words to remove with the specified replacements
                for (const regex_replace of regex_replacers){
                    const search = regex_replace[0];
                    const replacement = regex_replace[1];
                    const regex = new RegExp(search, 'gi');
                    node.textContent = node.textContent.replace(regex, replacement);
                }
            }

            // For all links, scripts, and images, we replace relative URLs with absolute URLs
            // so that it loads it from the proper source (and not attempting from reisle.web.app)
            ['link[href]', 'script[src]', 'img[src]'].forEach(selector => {
                const elements = dom.window.document.querySelectorAll(selector);
                for (const element of elements) {
                    if (element.hasAttribute("href")){
                        element.href = new URL(element.href, url).href;
                    }
                    else if(element.hasAttribute("src")){
                        element.src = new URL(element.src, url).href;
                    }
                    
                }
            });

            // Remove certain elements from the page
            // (UD header, footer, "Do you like this page" etc.)
            const removables = dom.window.document.querySelectorAll(".pageHeader ,.page-footer,.page-survey-container,.content-owner-dep,.content-intro-topics");
            for (const rem_me of removables){
                rem_me.remove();
            }

            // Disable links
            const alinks = dom.window.document.querySelectorAll("a[href]");
            for (const lnk of alinks) {
                lnk.href = "#";
            }

            // Remove "Kontaktinformasjon og kart"
            const fact_boxes = dom.window.document.querySelectorAll('.factbox-title-text');
            for(const box of fact_boxes){
                if (box.innerHTML=="Kontaktinformasjon og kart"){
                    box.parentElement.parentElement.parentElement.remove();
                    break;
                }
            }

            res.send({
                html: dom.serialize(),
                removedWord: current_answer,
            });
        });
    }).on("error", (err) => {
        res.status(500).send(err.message);
    });
});

exports.proxy = functions.https.onRequest(app);
