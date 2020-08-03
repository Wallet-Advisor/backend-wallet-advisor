const xlsx = require("xlsx");

const rateGuides = xlsx.readFile("../data/rateGuide.xlsx");

const sheetNames = rateGuides.SheetNames;

// let treasury = rateGuides.Sheets["Treasury Bills"];

// treasury = xlsx.utils.sheet_to_json(treasury);

// console.log(sheetNames);
// console.log(treasury);

function readSheets(workBook, workSheetNames) {
  let rateGuide = {};

  workSheetNames.forEach((sheetName) => {
    let investment = workBook.Sheets[sheetName];

    investment = xlsx.utils.sheet_to_json(investment);
    // jsonSheet = xlsx.utils.sheet_to_json(rateGuides[sheetName]);
    // console.log(investmentRate);
    // console.log("----------");

    rateGuide[sheetName] = investment;
  });

  //   return rates
  console.log(rateGuide);
}

readSheets(rateGuides, sheetNames);
