//function for getting grossSalary
function grossSalary(basicSalary, benefits){
    return basicSalary + benefits
}
//Function for getting netSalary
   function netSalary (grossSalary, deductions){
    return grossSalary - deductions}
    
    
//Finding deductions
   const deductions=(paye,nhifDeduction, nssfDeduction)=> paye + nhifDeduction + nssfDeduction;
 
    return {
        grossSalary,
        netSalary,
        deductions
    };

