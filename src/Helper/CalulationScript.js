import { useState } from "react";

function CalulationScript(data){
console.log(data);
  
  const clientName= data.clientName;
  const currentAge = parseInt(data.currentAge);
  const retirementAge = parseInt(data.retirementAge);

  const annualHouseholdIncome=parseInt(data.annualHouseholdIncome);
  const currentSavings = parseInt(data.currentSavings);
  const estimatedRE = parseFloat(data.estimatedRE);
  const expectedROR = parseFloat(data.expectedROR);
  const expectedII = parseFloat(data.expectedII);
  const retirementSR = parseFloat(data.retirementSR);

  const yearsToRetirement = retirementAge - currentAge;
// teting here, incomeDuringRetirement giving issue, needt o fixed decimal  value
  let amt = annualHouseholdIncome;
  let incomeDuringRetirement=annualHouseholdIncome;
  let lastYearIncome=annualHouseholdIncome;
  for(var k=0; k<yearsToRetirement; k++)
  {
    amt = Math.round(amt + (0.02*amt),2);
    lastYearIncome =(annualHouseholdIncome * Math.pow(1 + expectedII, yearsToRetirement).toFixed(2));

  }

  console.log(amt,",",lastYearIncome);
  
  //  const yearsToRetirement = retirementAge - currentAge;
    const annualSavings = currentSavings * expectedROR;
    const totalSavings = currentSavings + annualSavings * yearsToRetirement;
    let balance = totalSavings;

    const newBalances = [];
    for (let i = 0; i <= yearsToRetirement; i++) {
      const age = currentAge + i;

      const investmentGrowth = balance * estimatedRE;
      const contributionOfIncome = annualHouseholdIncome * retirementSR;

      const incomeDuringRetirement = i === 0 ? 0 : incomeDuringRetirement * (1 + expectedII);
      const retirementAccountWithdrawals = i === 0 ? 0 : incomeDuringRetirement / retirementSR;

      const beginningRetirementBal = i === 0 ? balance : balance - contributionOfIncome + incomeDuringRetirement;
      const endingRetirementBalance = beginningRetirementBal + investmentGrowth - retirementAccountWithdrawals;

      newBalances.push({
        age,
        beginningRetirementBal,
        investmentGrowth,
        contributionOfIncome,
        incomeDuringRetirement,
        retirementAccountWithdrawals,
        endingRetirementBalance,
      });
      balance = endingRetirementBalance;
    }
  
    // newBalances = {
    //   name:"AAA",
    //   age: 45
    // };
  return newBalances;
}

export default CalulationScript;