function calculate() {
    // get my x
    let x = document.getElementById('x').value
    // get my operator
    let operator = document.getElementById('operator').value
    // get my y
    let y = document.getElementById('y').value
    console.log (x, operator, y)
    // run x operator y
    let operatorBag ={
        Addition: '+',
        Subtraction: '-',
        Multiplication: 'x',
        Division: '/',
        Exponentiation: '**',
        Remainder: '%'
    } 
    let Answer = eval(`${x} ${operatorBag[operator]} ${y}`)
    document.getElementById('Answer').innerHTML = `NGN ${profit}`
    
    let wr = 1/0
}
//calc
//let wr = 1/0
//joining arrays
//let array1 = [1,2,3,4,5,6,7,9,[4,5,7,8], [undefined, 'hi', 6, null]];
//let last = array1[array1.length - 1];
//let lastTypes = last.map(element => typeof element);
//let second = array1[array1.length - 2];
//let multiply= second.length = last[2];
//let length = array1.length;
// let array2 = array1.filter(element => ![4, 5, 9, second, last].includes(element));
//let newLength = array2.length;
//console.log(`New length: ${newLength}`);

//reverse function
//let array3 = ['500','100','20','10','900','200'];
//let srt = array3.sort(sortMe)

//function sortMe(a, b) {
//    return b -a;
//}
//console.log(srt)
//function calc (jir) {
    
//}
 
//function fizzbuzz () {
 //   for(let i = 0)
//}
//console.log(myName);
//var myName = "Precious Anjorin"

//function name (x) {
  //  return x++

    //code
  //  console.log(x)
//}

//let x = 0
//while (x<=10) {
    //if (x == 3){
     //   x++ 
   //     continue;
   // }
   // console.log(x)
  //  x++;
//}
//if (condition) {

//}
//else if (condition) {

//}
//function sumNumbers(x, ...y) {
  //  let sum = y.reduce ((p, c) => p +c, 0)
    //return sum
//} 

//console.log(sumNumbers(2,12,22))
//console.log(sumNumbers(3,-12,-22,-32))
//console.log(sumNumbers(4,12,-22,32, -42))
//console.log(sumNumbers(1, 42))
//console.log(sumNumbers(0))

//let building = {
  //  room1: function (){
    //    return this.room4.bedroom[3]
    //},
   // room2: {},
 //   room3: "kitchen",
   // room4: {
//        bedroom: [
  //        "bed", "lampstand", "alarm", "charger"
    //    ],
      //  living_room:[
        //  'cushion', 'videogames', 'dressing_mirror', 'table'
   //     ]
//    }
//}
//console.log(building.room1())
//let tbody = document.getElementById('tbody')
//let companies = [
//  {
  //  name:'Kehinde plc',
//    address:'Team1.com'
    
  //},
 // {

//  }
//]

//companies.map(value=>{
  //  let tdbody = `
  //  <tr>
    //    <td>${value.S/N}</td>
  //      <td>${value.CompanyName}</td>
    //    <td>${value.CompanyAddress}</td>
      //  <td>${value.CompanyPhone}</td>
     //   "Team1.com"
    //`
//})

//function countVowel(str) {

  //find the count of vowel 
  //const count = str.match(/[aeiou]/gi).length;
  //return count;
//}

//console.log(countVowel('PRECIOUS ANJORIN; A FORCE TO BE RECKONED WITH'));



function scoreSum(scores) {
  let sum;

  scores. forEach ((score) => {
    sum += score;
  });

  return sum;
  
}
console. log(scoreSum ([5, 10, 51]))


