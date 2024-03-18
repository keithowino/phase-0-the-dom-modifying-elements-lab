// // Write your code here!

// let element = document.createElement("div");
// let appendHere = document.getElementById("appear");
// appendHere.append(element);
// let childElement = document.createElement("ul");
// childElement.style.listStyle = "none";

// for(let i = 1; i < 6; i++){
//   let childElementLi = document.createElement("li");

//   let sup = "";

//   if(i === 1){
//     sup = "ST";
//   }else if(i === 2){
//     sup = "ND";
//   }else if(i === 3){
//     sup = "RD";
//   }else{
//     sup = "TH";
//   };

//   childElementLi.innerHTML = `I am the ${i}<sup>${sup}</sup> item in this unordered list.`;
//   /*
  
//   Programmatically creating and appending elements is safer and more efficient than using the innerHTML method, and it results in code that's easier to read, easier to debug, and easier to maintain.

//   childElementLi.textContent = `I am the ${i}${sup} list item.`;

//   */
//   childElement.append(childElementLi);
// };

// element.append(childElement);

// let ul = document.getElementsByTagName("ul")[0];
// let secondChild = document.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// /*
//  * There's more...

//   element.classlist("class1 class2")
//   element.classlist.add("class")
//   element.classlist.remove("class")


// */

let newHeader = document.createElement("h1");
let appendHere = document.getElementById("appear");
appendHere.append(newHeader);

// let head = document.querySelector("h1");
// head.setAttribute("id")
// head.id = "victory"

newHeader.id("victory"); // I just couldn't understand why the test wasn't passing....

newHeader.textContent = "Keith Owino is the champion";