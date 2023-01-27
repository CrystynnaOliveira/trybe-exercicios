//       Variáveis   //

//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

//     Tipos Primitivos //

//let salary = "3500";

//console.log(salary + salary);
//console.log(salary - salary);
//console.log(salary / salary);
//console.log(salary * salary);

//salary--;
//console.log(salary);

// Exercício 

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const c = 20;
const d = 21;

if (a > b) {
  console.log("'c' é maior que 'd'");
} else {
  console.log("'d' é maior que 'c'");
};

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
