const readline = require('readline');

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
user.question('What is your basic Salary? ', (basicSalary) => {
    console.log(basicSalary);

    user.question('How much are your benefits'),(benefits)=>{
        console.log(benefits)
    }
    rl.close();
  });


//function for getting grossSalary
function grossSalary(basicSalary, benefits){
    return basicSalary + benefits
}
//Function for getting netSalary
   function netSalary (grossSalary, deductions){
    return grossSalary - deductions}
    
    //Finding deductions
    const paye = (0.1 * grossSalary)
    const nssfDeduction = (0.06 * grossSalary)
    const deductions=(paye,nhifDeduction, nssfDeduction)=> paye + nhifDeduction + nssfDeduction;
  
 
    return {
        grossSalary,
        netSalary,
        deductions
    };

    