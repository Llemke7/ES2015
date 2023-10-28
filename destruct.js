//## **Object Destructuring 1**

//What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
 let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // 1846/1659


  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); //  "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // "Bright copper kettles", "warm woolen mittens","Brown paper packages tied up with strings"
  
  
  let numbers = [10, 20, 30];
  [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
  
  console.log(numbers) // [10,30,20]

