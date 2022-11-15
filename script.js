"use strict";
let ele = document.getElementById("Grad1");
let ele2 = document.getElementById("Grad2");
let ele3 = document.getElementById("Grad3");
let ele4 = document.getElementById("Grad4");
let ele5 = document.getElementById("Grad5");
let ele6 = document.getElementById("Grad6");
let ele7 = document.getElementById("Grad7");
let ele8 = document.getElementById("Grad8");
let ele9 = document.getElementById("Grad9");
let ele10 = document.getElementById("Grad10");

const credit1 = document.getElementById("Credit1");
const credit2 = document.getElementById("Credit2");
const credit3 = document.getElementById("Credit3");
const credit4 = document.getElementById("Credit4");
const credit5 = document.getElementById("Credit5");
const credit6 = document.getElementById("Credit6");
const credit7 = document.getElementById("Credit7");
const credit8 = document.getElementById("Credit8");
const credit9 = document.getElementById("Credit9");
const credit10 = document.getElementById("Credit10");

/*
function allcredit(){
  for(const [first, last])
}
*/
const btnTotal = document.querySelector(".btn");
const TotalGrades = document.getElementById("total");
const calc = function (a, b) {
  return a * 1 * (b * 1);
};
const credSum = function (
  cre1,
  cre2,
  cre3,
  cre4,
  cre5,
  cre6,
  cre7,
  cre8,
  cre9,
  cre10
) {
  return (
    cre1 * 1 +
    cre2 * 1 +
    cre3 * 1 +
    cre4 * 1 +
    cre5 * 1 +
    cre6 * 1 +
    cre7 * 1 +
    cre8 * 1 +
    cre9 * 1 +
    cre10 * 1
  );
};
const Grades = [
  { Point: 4.3, Litter: "A+" },
  { Point: 4, Litter: "A" },
  { Point: 3.7, Litter: "A-" },
  { Point: 3.3, Litter: "B+" },
  { Point: 3, Litter: "B" },
  { Point: 2.7, Litter: "B-" },
  { Point: 2.3, Litter: "C+" },
  { Point: 2, Litter: "C" },
  { Point: 1.7, Litter: "C-" },
  { Point: 1.3, Litter: "D+" },
  { Point: 1, Litter: "D" },
  { Point: 0.7, Litter: "D-" },
  { Point: 0, Litter: "F" },
];

for (let i = 0; i < Grades.length; i++) {
  ele.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";

  ele2.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele3.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele4.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele5.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele6.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele7.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele8.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele9.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
  ele10.innerHTML +=
    '<option value="' + Grades[i].Point + '">' + Grades[i].Litter + "</option>";
}

/*
    ele.innerHTML += '<option value="' + b.ID + '">' + b['Bird_Name'] + '</option>';
  })*/

/*
  if ((credit1 = Grades.value)) {
    credit1 = Grades.value;
  }
  */
function calcal() {
  //set a value

  let grade1 = Grades.find((sele) => sele.Point == ele.value);
  let grade2 = Grades.find((sele) => sele.Point == ele2.value);
  let grade3 = Grades.find((sele) => sele.Point == ele3.value);
  let grade4 = Grades.find((sele) => sele.Point == ele4.value);
  let grade5 = Grades.find((sele) => sele.Point == ele5.value);
  let grade6 = Grades.find((sele) => sele.Point == ele6.value);
  let grade7 = Grades.find((sele) => sele.Point == ele7.value);
  let grade8 = Grades.find((sele) => sele.Point == ele8.value);
  let grade9 = Grades.find((sele) => sele.Point == ele9.value);
  let grade10 = Grades.find((sele) => sele.Point == ele10.value);
  //multyply
  let Cred = credSum(
    credit1.value,
    credit2.value,
    credit3.value,
    credit4.value,
    credit5.value,
    credit6.value,
    credit7.value,
    credit8.value,
    credit9.value,
    credit10.value
  );
  let pow1 = calc(credit1.value, grade1.Point);
  let pow2 = calc(credit2.value, grade2.Point);
  let pow3 = calc(credit3.value, grade3.Point);
  let pow4 = calc(credit4.value, grade4.Point);
  let pow5 = calc(credit5.value, grade5.Point);
  let pow6 = calc(credit6.value, grade6.Point);
  let pow7 = calc(credit7.value, grade7.Point);
  let pow8 = calc(credit8.value, grade8.Point);
  let pow9 = calc(credit9.value, grade9.Point);
  let pow10 = calc(credit10.value, grade10.Point);
  TotalGrades.innerHTML =
    (pow1 + pow2 + pow3 + pow4 + pow5 + pow6 + pow7 + pow8 + pow9 + pow10) /
    Cred;
  console.log(Cred);
  console.log(pow1);
}
btnTotal.addEventListener("click", calcal);

//btnTotal.addEventListener("click", calc);

/*
  let sum = document.getElementById("Credit1").value;
  let sum2 = document.getElementById("Grades1").value;
  document.getElementById("total").innerHTML = sum;
  document.getElementById("total").innerHTML = sum2;
  */

//Total.innerHTML = calc(credit1, grades1);
