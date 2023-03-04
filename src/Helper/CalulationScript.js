import { useState } from "react";


function createData(clientName,
  age,
  annualHouseholdIncome,
  currentSavings,
  estimatedRE,
  expectedROR,
  retirementSR,
  annualContribution,
  monthlyContribution,
  monthlyExpenses,
  monthlySavings,
  totalSavingsNeeded,
  additionalSavingsNeeded)
{
return{clientName,
  age,
  annualHouseholdIncome,
  currentSavings,
  estimatedRE,
  expectedROR,
  retirementSR,
  annualContribution,
  monthlyContribution,
  monthlyExpenses,
  monthlySavings,
  totalSavingsNeeded,
  additionalSavingsNeeded};
}

function CalulationScript(data){
  console.log(data);
  
  const clientName= data.clientName;
  const currentAge = parseInt(data.currentAge);
  const retirementAge = parseInt(data.retirementAge);
  const expectedII = parseInt(data.expectedII);
  const annualHouseholdIncome=parseInt(data.annualHouseholdIncome);
  const currentSavings = parseInt(data.currentSavings); //
  const estimatedRE = parseFloat(data.estimatedRE); // required expences (monhtly exp during retirement)
  const expectedROR = parseFloat(data.expectedROR); // rate of return assuming its invested
  // const expectedII = parseFloat(data.expectedII); //increase in income
  const retirementSR = parseFloat(data.retirementSR); // percent of income that will go to retirement fund
  
  
  const yearsToRetirement = retirementAge - currentAge; 
  

  let rows = [];
  for(var i = currentAge; i<retirementAge; i++)
  {
  const age = currentAge + i;
  const annualContribution =i === 0 ? 0 :(retirementSR / 100) * annualHouseholdIncome; 
  const monthlyContribution = annualContribution / 12; 
  const monthlyExpenses = estimatedRE;
  const monthlySavings = annualContribution / 12; 
  const yearsInRetirement = retirementAge;
  const totalSavingsNeeded = i === 0 ? 0  :monthlyExpenses * 12 * yearsInRetirement; 
  const additionalSavingsNeeded = i === 0 ? 0 :totalSavingsNeeded - (monthlySavings * 12 * yearsToRetirement);

    rows.push(new createData( clientName,
      age,
      yearsToRetirement,
      annualHouseholdIncome,
      currentSavings,
      estimatedRE,
      expectedROR,
      retirementSR,
      annualContribution,
      monthlyContribution,
      monthlyExpenses,
      monthlySavings,
      totalSavingsNeeded,
      additionalSavingsNeeded));
  }


console.log(rows);


//   const life_expectency = 102;
//   let newBalances = {};
//   let n = 12;

//   let total_savings = (yearsToRetirement*(annualHouseholdIncome*(retirementSR/100)))+currentSavings;
//   const amount_to_make = currentSavings - (life_expectency*estimatedRE);



//   //before retirement
//   for(var i =currentAge;i<retirementAge;i++)
//   {
//       var interest = (total_savings*1*expectedROR)/100;
//       total_savings = total_savings + interest;
//       total_savings = total_savings + (annualHouseholdIncome*(retirementSR/100));
//      var x =         annualHouseholdIncome*(retirementSR/100);
//       newBalances.push({
//        interest,
//        total_savings,
//        annualHouseholdIncome,
//        x
//       });    
//   }

//   //during retirement 
//   for(var i = retirementAge; i<=life_expectency;i++)
//   {
//     //investment return
//      var interest = (total_savings*1*expectedROR)/100;
//      total_savings = total_savings + interest;
//      total_savings = total_savings - estimatedRE;
//      //remaining savings
//      let zero = 0;
//      newBalances.push({
//        interest,
//        total_savings,
//        zero,
//        zero
//     });    
//   }
//   console.log(newBalances);
//   return newBalances;
}

export default CalulationScript;