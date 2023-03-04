function createData(
  age,
  years_to_retire,
  annualHouseholdIncome,
  current_retirement_fund_balance,
  investment_growth,
  income_contributed_to_fund,
  total_retirement_fund_increase,
  yearly_expense)
{
return{
  age,
  years_to_retire,
  annualHouseholdIncome,
  current_retirement_fund_balance,
  investment_growth,
  income_contributed_to_fund,
  total_retirement_fund_increase,
  yearly_expense
  };
}

function CalulationScript(data){
  let currentAge = parseInt(data.currentAge);
  let retirementAge = parseInt(data.retirementAge);
  let expectedII = parseInt(data.expectedII); //expected income increase
  let annualHouseholdIncome=parseInt(data.annualHouseholdIncome);
  let currentSavings = parseInt(data.currentSavings); //starting 
  let estimatedRE = parseFloat(data.estimatedRE); // required expences (monhtly exp during retirement)
  let expectedROR = parseFloat(data.expectedROR); // rate of return assuming its invested
  let retirementSR = parseFloat(data.retirementSR); // percent of income that will go to retirement fund  
  let rows = [];
  //before retirement
  for(var age = currentAge; age<=retirementAge; age++)
  {
    var investment_growth = (expectedROR/100)*currentSavings;
    var income_contributed =  (retirementSR/100)*annualHouseholdIncome;
    var total_addition_to_retirement_fund = investment_growth + income_contributed;

    rows.push(
      new createData( 
        age, //current age
        retirementAge-age, //years left to retire
        round(annualHouseholdIncome), // income made in a year
        round(currentSavings), // current balance in retirement account
        round(investment_growth), // how much gains were made on investment
        round(income_contributed), // how much money was contributed to fund
        round(total_addition_to_retirement_fund),//retirement balance after addition
        0 // yearly expenses from retirement fund
      )
    );
      //increased annual household income
      annualHouseholdIncome = (annualHouseholdIncome * (expectedII/100)) + annualHouseholdIncome;
      currentSavings = total_addition_to_retirement_fund+currentSavings;
  }
  

  //todo after retirement
  for(var age = retirementAge+1; age<=102; age++)
  {
    var investment_growth = (expectedROR/100)*currentSavings;
    var income_contributed =  -1*estimatedRE;
    var total_addition_to_retirement_fund = investment_growth + income_contributed;

    rows.push(
      new createData( 
        age, //current age
        retirementAge-age, //years left to retire
        round(annualHouseholdIncome), // income made in a year
        round(currentSavings), // current balance in retirement account
        round(investment_growth), // how much gains were made on investment
        0, // how much money was contributed to fund
        round(total_addition_to_retirement_fund),//retirement balance after addition
        income_contributed // yearly expenses from retirement fund
      )
    );
    
  }
  return rows;
}

function round(value)
{
  return Math.round((value + Number.EPSILON) * 100) / 100
}

export default CalulationScript;