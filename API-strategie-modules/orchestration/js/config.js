let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Orchestration",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "api",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "API-Strategie-mod-orchestration",
  edDraftURI: "https://geonovum.github.io/KP-APIs/API-strategie-modules/orchestration/",  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-12-21",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "0.0.1",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2023-12-21",
  //previousMaturity: "vv",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
        [
            {
                name: "Kennisplatform API's",
                company: "Kennisplatform API's",
                companyURL: "https://github.com/Geonovum/KP-APIs",
            }
        ],
    authors:
        [
            {
                name: "Kennisplatform API's",
                company: "Kennisplatform API's",
                companyURL: "https://github.com/Geonovum/KP-APIs",
            }
        ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/KP-APIs",
  // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

   localBiblio: {
                "HAL": {
          href: "http://stateless.co/hal_specification.html",
          title: "HAL - Hypertext Application Language",
          authors: ["Mike Kelly"],
          date: " 2013-09-18",
        },
    }
  
  // Create PDF and link to file in header (optional):
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //       uri: "template.pdf",
  //    },
  // ],
};
