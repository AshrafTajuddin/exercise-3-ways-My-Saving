# My Saving when i'm retired

## Data Structure
* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires.

* The function should be self invoked and should have the following parameters:
* The current age of the person // e.g. 40
* The retirement age of the person // e.g. 60
* The monthly wage the person earns // e.g. 1000
* he percentage (as integer) that the person saves each month // e.g. 10%

* If the person has already retired then the message ‘You’re already retired!’ should be printed. 

* If not, then the program should calculate how many years remain until the person retires, 
the monthly income and take a specific percent of this income every month as saved money.


**Example**
- A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. 
How much money will she have saved until she retires?
Output: $30000


**Expected Output**

```javascript
30000
```

## Solutions

- [First Solution](https://github.com/AshrafTajuddin/exercise-3-ways-My-Saving/tree/first)
  ![Imgur](https://imgur.com/p4yVyg3)

  ```javascript

  // 1. Created a ES6 style self-invoking (also called self-executing) function  is a nameless (anonymous) function that is invoked immediately after its definition.

  // 2. That function accept several parameters as arguments like age, retireAge, monthlySalary and savingPercentage.
  // 2.1 Inside function use if.. else and declare some variable using const to calculate years to work, months to work , total earnings and total saving.

  // 3. At the end pass the number to check if we get the output 30000
  ```

- [Second Solution](https://github.com/AshrafTajuddin/exercise-3-ways-My-Saving/tree/second)
  ![Imgur](https://imgur.com/3hxdF1M)

  ```javascript
  // 1. Using normal self-invoking function.
  ```

## Resources
- [Self-Invoking Functions](https://scriptverse.academy/tutorials/js-self-invoking-functions.html)













