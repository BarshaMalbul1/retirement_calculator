import { useState } from "react";

function CalulationScript(data){
console.log(data);
  
  const clientName= data.clientName;
  const currentAge = parseInt(data.currentAge);
  const retirementAge = parseInt(data.retirementAge);

  const annualHouseholdIncome=parseInt(data.annualHouseholdIncome);
  const currentSavings = parseInt(data.currentSavings); //
  const estimatedRE = parseFloat(data.estimatedRE); // required expences (monhtly exp during retirement)
  const expectedROR = parseFloat(data.expectedROR); // rate of return assuming its invested
  // const expectedII = parseFloat(data.expectedII); //increase in income
  const retirementSR = parseFloat(data.retirementSR); // percent of income that will go to retirement fund
  const yearsToRetirement = retirementAge - currentAge;
  const life_expectency = 102;
  let newBalances = {};
  let n = 12;

  let total_savings = (yearsToRetirement*(annualHouseholdIncome*(retirementSR/100)))+currentSavings;
  const amount_to_make = currentSavings - (life_expectency*estimatedRE);

  //before retirement

  //during retirement 
  for(var i = retirementAge; i<=life_expectency;i++)
  {
    //investment return
     var interest = (total_savings*1*expectedROR)/100;
     total_savings = total_savings + interest;
     total_savings = total_savings - estimatedRE;
     //remaining savings
  }

  if(total_savings>0)
  {
    console.log("YAY");
  }
  else
  {
    console.log("NAY");
  }

  // total_savings ko coumpounded amount
  // counpound_interest = Math.pow(p(1+r/n),t*n);
  // let compound_interest= Math.pow((total_savings*(1+(expectedROR/100))),yearsToRetirement);
  // console.log(compound_interest);

// teting here, incomeDuringRetirement giving issue, needt o fixed decimal  value
  return newBalances;
}

export default CalulationScript;