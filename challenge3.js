//Create a readline user interface
const readline = require('readline');

// create taxRates range  using specified tax rates
const taxRates =  [
  { upperLimit: 24000, rate: 0.1 },
  { upperLimit: 32333, rate: 0.25 },
  { upperLimit: 500000, rate: 0.3 },
  {upperLimit: 800000, rate: 0.325},
  { upperLimit: Infinity, rate: 0.35 },
];

// create nhifRates range using specified nhif rates
const nhifRates = [
  { upperLimit: 5999, amount: 150 },
  { upperLimit: 7999, amount: 300 },
  { upperLimit: 11999, amount: 400 },
  { upperLimit: 14999, amount: 500 },
  { upperLimit: 19999, amount: 600 },
  { upperLimit: 24999, amount: 750 },
  { upperLimit: 29999, amount: 850 },
  { upperLimit: 34999, amount: 900 },
  { upperLimit: 39999, amount: 950 },
  { upperLimit: 44999, amount: 1000 },
  { upperLimit: 49999, amount: 1100 },
  { upperLimit: 59999, amount: 1200 },
  { upperLimit: 69999, amount: 1300 },
  { upperLimit: 79999, amount: 1400 },
  { upperLimit: 89999, amount: 1500 },
  { upperLimit: 99999, amount: 1600 },
  { upperLimit: Infinity, amount: 1700 }, 
]

// create nssfRates for the nssf
const nssfRate = 0.06 

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// user prompt to enter the basic salary or benefit by the user
user.question("What is your basic salary?", (basicSalaryInput) => {
  user.question("What are your benefits?",(benefitsInput) => {
    user.close();
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);
    const grossSalary = basicSalary + benefits;

    // Loop function to calculate payee for the basicSalary entered according to range
    let payee = 0;
    for (const item of taxRates) {
      if (grossSalary <= item.upperLimit) {
        payee = grossSalary * item.rate;
        break;
      }
    }

    // Loop function to calculate nhif for the basicSalary entered according to range
    let nhif = 0;
    for (const item of nhifRates) {
      if (grossSalary <= item.upperLimit) {
        nhif = item.amount;
        break;
      }
    }

    // nssf calculation for the gross salary
    const nssf = grossSalary * nssfRate;

    // Calculating tax deductions using individual components
    const deductions = payee + nhif + nssf;
    // net salary calculation using grossSalary and the deductions
    const netSalary = grossSalary - deductions;
    console.log (`The net salary is equivalent to : ${netSalary.toFixed(2)}`)
  });
});

//The netSalary should now display when we  run the code
    