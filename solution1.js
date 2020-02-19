// solution 1 :

((age, retireAge, monthlySalary, savingPercentage ) =>{
      
       if (age < retireAge) {
           const yearsToWork = retireAge - age;
           const monthsToWork = yearsToWork * 12;
           const totalEarnings = monthsToWork * monthlySalary;
           const totalSavings = (totalEarnings / 100) * savingPercentage;
           console.log(totalSavings);       
         } else {
           console.log("You're already retired!");
         }
       })(40, 65, 2000, 5);   


     






     



/* solution 3
console.log(".........start solution 3......");


((currAge, retireAge, monthlySalary, savingPercentage ) =>{

if ( currAge >= retireAge){
console.log( "Hi already retired")
}else {


   let yearsToWork = retireAge - currAge;
   console.log(yearsToWork + " years to go"); // 35 years to go

   let monthsToSave = yearsToWork * 12;
   console.log(yearsToWork + " months to go"); // 35 month to go
 
   let totalSaving = (monthlySalary * savingPercentage) / 100 ;
   let totalSave = totalSaving * monthsToSave;
   console.log(`you will get old${35}  and you will have ${totalSaving} euro in  bank`);
   console.log(totalSaving);
}

})(40,65,2000,5);



console.log(".........end solution 3..........");  */