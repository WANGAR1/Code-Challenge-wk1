//      CODE CHALLENGE 1      //

const calculate = () => {
    let english = document.querySelector("#e").value;
    let math = document.querySelector("#m").value;
    let physics = document.querySelector("#p").value;
    let geography = document.querySelector("#g").value;
    let chemistry = document.querySelector("#c").value;
    
// Calculates total marks//    
    let total =
      parseFloat(english) +
      parseFloat(math) +
      parseFloat(physics) +
      parseFloat(geography) +
      parseFloat(chemistry);

// Calculates percentage// 
    let percentage = (total / 500) * 100;
    let grade = "";
  
// Calculates grades//
    if (percentage <= 100 && percentage >= 79) {
      grade = "A";
    } else if (percentage <= 78 && percentage >= 60) {
      grade = "B";
    } else if (percentage <= 59 && percentage >= 49) {
      grade = "C";
    } else if (percentage <= 48 && percentage >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
    
// Result for total marks, percentage and grades//  
    document.querySelector("#demo").textContent = `Total marks=${total}, Percentage=${percentage.toFixed(
      2
    )}, Grade=${grade}`;
  };

  //               CODE CHALLENGE 2           //

  const detectSpeed = () => {

    let speed = document.querySelector("#speed").value;
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  //if gives speed//
    if (speed <= speedLimit) {
      document.querySelector("#result").textContent = "The car is driving within the speed limit.";
  
  //else gives demerit points//    
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      document.querySelector("#result").textContent = `Demerit points: ${demeritPoints}`;
      
  //if gives liscense suspension//    
      if (demeritPoints > 12) {
        document.querySelector("#result").textContent += " License suspended";
      }
    }
  };

  //               CODE CHALLENGE 3          //  

  const calculateNetSalary = () => {
    let salary = document.querySelector("#salary").value;
    let tax = document.querySelector("#tax").value;
 
    const PAYEE_TAX_RATE = 0.3;
    const NHIF_RATE = 0.025;
    const NSSF_RATE = 0.06;
  
// Calculate PAYEE tax//
    let payeeTax = salary * PAYEE_TAX_RATE;
    
// Calculate NHIF deduction//
    let nhifDeduction = salary * NHIF_RATE;
  
// Calculate NSSF deduction//
    let nssfDeduction = salary * NSSF_RATE;
  
// Calculate net salary//
    let netSalary = salary - payeeTax - nhifDeduction - nssfDeduction;

// Result for net salary//  
    let result = `PAYEE Tax: ${payeeTax.toFixed(2)}<br>NHIF Deduction: ${nhifDeduction.toFixed(2)}<br>NSSF Deduction: ${nssfDeduction.toFixed(2)}<br>Net Salary: ${netSalary.toFixed(2)}`;
    document.querySelector("#result").innerHTML = result;
  };
