module.exports = {
    jordan: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_jordan/id2428573/',
        words: [
            [/(jordan)(ske|sk)?/ig, "Utlandia"],
            [/(ammane?)/, "(hovedstad)"],
            [/\.jo/, ".tld"]
        ],
        answer: "jordan"
    },
    usa: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_usa/id2417194/',
        words: [[/(usa|amerika(nsk)?e?|U\.S\.?A?)/, "Utlandia"]],
        answer: "usa"
    },
    brasil: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_brasil/id2415169/',
        words: [[/(brasil(iansk)?e?|brasílias?)/, "Utlandia"]],
        answer: "brasil"
    },
    italia: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_italia/id2416484/',
        words: [
            [/(italia|italienske?|roma|romenske?)/, "Utlandia"],
            [/(roma|romenske?)/, "(hovedstad)"]
        ],
        answer: "italia"
    },
    burkina_faso: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_burkinafaso/id2414675/',
        words: [[/(burkina( faso)?)|ambaburkina|ouagadougou/, "Utlandia"]],
        answer: "burkina faso"
    },
    myanmar: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_myanmar/id2417496/',
        words: [
            [/(myanmar|myanmarsk)/, "Utlandia"],
            [/(yangon|rangoon)/, "(tidligere hovedstad)"],
            [/\.mm/, ".tld"]
            // [/naypyidaw/, "(hovedstad)"]
        ],
        answer: "myanmar"
    },
    south_korea: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_sorkorea/id2416503/',
        words: [
            [/(sør[-\ ]korea)/, "Utlandia"],
            [/(nord[-\ ]korea)/, "Nabolandet"],
            [/(Korea\ (Dis|Ele|Met))/, "(Spoiler) $2"]
        ],
        answer: "sør-korea"
    },
    egypt: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_egypt/id2415880/',
        words: [
            [/Egypt(iske?)?/, "Utlandia"],
            [/kairo/, "(Veldig kjent by 1)"],
            [/gaza/, "(Veldig kjent by 2)"],
            [/(Nord-Sinai|sinaihalvøya)/, "(Kjent sted)"],
            [/libya/, "Nabolandet"]
        ],
        answer: "egypt"
    },
    algerie: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_algerie/id2414745/',
        words: [
            [/(algeri?sk)/, "Utlandiansk"],
            [/(algerie)/, "Utlandia"],
            [/alger/, "Hovedstadia"],
            [/sahariske/, "spoileriske"]
        ],
        answer: "algerie"
    },
    india: {
        url: 'https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/velg-land/reiseinfo_india/id2414743/',
        words: [
            [/india/, "Utlandia"],
            [/indisk/, "Utlandiansk"],
            [/New Delhi/, "Hovedstadia"],
            [/Delhi Indira Gandhi/, "Utlandias Utlandianske Spoileraiske"],
            [/Delhi/, "Spoiler"],
            [/(jammu|kashmir)/, "(giveaway)"],
            [/Pakistan/, "Naboland"]
        ],
        answer: "india"
    }
}