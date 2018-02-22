 //basic map config with custom fills, mercator projection
 var map = new Datamap({
     scope: 'world',
     element: document.getElementById('container1'),
     projection: 'mercator',
     height: 600,
     fills: {
         defaultFill: 'lightblue',
         lt50: 'pink'
     },
     geographyConfig: {
         //        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
         //        hideAntarctica: true,
         //        borderWidth: 1,
         //        borderOpacity: 1,
         //        borderColor: '#FDFDFD',
         //        popupTemplate: function(geography, data) { //this function should just return a string
         //          return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
         //        },
         //        popupOnHover: true, //disable the popup while hovering
         highlightOnHover: true,
         highlightFillColor: 'black',
         highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
         //        highlightBorderWidth: 2,
         //        highlightBorderOpacity: 1
     },
     data: {
         SDN: {
             fillKey: 'lt50'
         }
         //          RUS: {fillKey: 'lt50' },
         //          CAN: {fillKey: 'lt50' },
         //          BRA: {fillKey: 'gt50' },
         //          ARG: {fillKey: 'gt50'},
         //          COL: {fillKey: 'gt50' },
         //          AUS: {fillKey: 'gt50' },
         //          ZAF: {fillKey: 'gt50' },
         //          MAD: {fillKey: 'gt50' }
     }
 })






 var template = Handlebars.compile(document.querySelector('#country_popup').innerHTML);

 var countries = {
     SDN: {
         name: "Sudan",
         political: ["Freedomhouse score: 8/100 (2018)", "Type of Government: Presidential Republic"],
         geography: ["Capital: Khartoum", "Primary natural resources: Petroleum, small reserves of iron ore, copper, chromium ore, zinc,tungsten, mica, silver, gold", "Topography: generally flat, featureless plain; desert dominates the north", "Climate: hot and dry; arid desert; rainy season varies by region (April to November)"],
         health: ["Life expectancy: 64.4 years (2017)", "Infant mortality rate: 48.8 deaths/ 1000 live births (2017)", "Primary Causes of Death: 1-Influenza and Pneumonia, 2- Stroke, 3-Diarrhoeal diseases, 4-Coronary Heart Disease, 5- Malnutrition. (2017)"],
         economic: ["GDP per capita: $4,600 (2017 est.)", "Currency-Exchange rate: 18.06 Sudanese Pounds to 1 U.S Dollar (Feb 2018)", "Big Mac Index:  N/A", "GDP growth by country Income inequality: 3.6% (2018)", "Income Inequality:"],
         business: ["Corruption Perceptions Index: 14 and 170th /176 (2016)", "Heritage Index of Economic Freedom: 49.4 overall (2018)"],
         general: ["Education/Literacy: 75.9% (2015)", "Religions: Sunni Muslim, small Christian minority", "Languages: Arabic (official), English (official), Nubian, Ta Bedawie, Fur", "Population: 37,345,935 (July 2017)"]
     }

 };

 document.querySelector(".SDN").addEventListener('click', function () {
     createpopup("SDN")
 });
 document.querySelector("#popup").addEventListener('click', function () {
     this.classList.add("hidden");
 })
 document.querySelector("#popup_insides").addEventListener('click', cancel_cancel)

 function cancel_cancel(event) {
     event.stopPropagation();
 }

 function createpopup(code) {
     var popup = document.querySelector("#popup_insides");
     var country = countries[code];
     if (popup.parentElement.classList.contains("hidden")) {
         popup.parentElement.classList.remove("hidden");
     }
     popup.innerHTML = template(country);
 }
