const $inputA = document.getElementById("input-a");
const $inputB = document.getElementById("input-b");
const $output = document.getElementById("output");
const $submit = document.getElementById("submit");
const $outputTriangle = document.getElementById('output-triangle')
const $submitTriangle = document.getElementById('submit-triangle')
const $inputTriangle = document.getElementById('input-triangle')

$submit.addEventListener("click", () => {
 const arrayNumbers =  getNumberRange(parseInt($inputA.value), parseInt($inputB.value));
 const PrimeNumbers = getPrimeNumbers(arrayNumbers)
 $output.textContent = PrimeNumbers

});
$submitTriangle.addEventListener('click', () =>{
    if (parseInt($inputTriangle.value) > 10  || parseInt($inputTriangle.value) < 1  ) {
        return alert('vượt quá mức quy định từ 1 - 10')
        
    }
    $outputTriangle.innerText = triangle(parseInt($inputTriangle.value))
   



})
console.dir($outputTriangle)

const getNumberRange = (a, b) => {
  let numberRange = [];
  
  if ( a > b ) {
    let aInitial = a
    a = b
    b = aInitial   
    console.log(a,b)
  }

  for (let i = a; i <= b; i++) {
    numberRange.push(i);
  }

  return numberRange;
};

const kiem_tra_snt = (n) => {
  let flag = true;
  if (n < 2) {
    flag = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }

  return flag;
};
const getPrimeNumbers = (test) => {
  return test.filter((e) => kiem_tra_snt(e));
};

function triangle(length) {
    let line = "";
    for (let i = 1; i <= length; i++) {
      for (let j = 1; j <= i; j++) {
        line += "* "
      }
      line += "\n";
    }
    return line
  }


