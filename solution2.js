// solution 2 :

(function pension(age, retireAge, monthlySalary, savingPercentage) {
    if (age < retireAge) {
      const yearsToWork = retireAge - age;
      const monthsToWork = yearsToWork * 12;
      const totalEarnings = monthsToWork * monthlySalary;
      const totalSavings = (totalEarnings / 100) * savingPercentage;
      console.log(totalSavings);   // 30000
    } else {
      console.log("You're already retired!");
    }
  })(40, 65, 2000, 5);  

  console.log(".........end solution 2......");  
  
