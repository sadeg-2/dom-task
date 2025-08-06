console.log("here");
console.log(document.body);
console.log(document.body.lastElementChild.tagName);// here log the script tag

console.log(`number of element children ${document.body.children.length}`);//

const differ = document.body.childNodes.length - document.body.children.length;
console.log(`difference in length between childNodes and children ${differ}`);
// the childnode have extra text element cause it append extra element as a new line between elements

//What is the nodeType and nodeName of the first node in document.body.childNodes?
var firstNode = document.body.childNodes[0];

console.log(`first node name: ${firstNode.nodeName}`);// here log just the name of node like text
console.log(`first node type: ${firstNode.nodeType}`);// here log the code of the type that if we see in Node object that we have many type ELEMENT_NODE: 1; ATTRIBUTE_NODE: 2; TEXT_NODE: 3; and so on 
   
//Is the first paragraph a sibling of the second, or a descendant?
// sibling

console.log(document.body.childNodes);

//Twist: Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin
// i find the text node after my element that their origin to new line \n as we learn
/**--------------------------------------------------------*/

var element = document.createElement("div");
element.className = "card";
element.setAttribute("data-role", "admin");
element.innerHTML = `
  <h2>Access Panel</h2>
  <p>Authenticated</p>
`;
document.body.appendChild(element);
//Log the value of the data-role as a JS property, not via `.getAttribute`.
console.log(element.dataset["role"]);

const paragraph = document.getElementsByTagName("p");
paragraph[1].textContent = "Welcome back, Admin;";

//Add two classes to the div: "authenticated" and "highlight" using `classList`
element.classList.add("authenticated");
element.classList.add("highlight");

// Extra Section -------------
const greetTeacher = document.createElement("div");
greetTeacher.innerHTML = "Welcom Mohammed in My Solution";
greetTeacher.style.backgroundColor = "#EEE";
greetTeacher.style.border = "1px solid";
greetTeacher.style.padding = "4px";
document.body.append(greetTeacher);
notify(greetTeacher);

function notify(node) {
  for (let index = 0; index < 10; index++) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        node.style.display = "block";
      }, i * 1000); // show every second
      setTimeout(() => {
        node.style.display = "none";
      }, i * 1000 + 500); // hide after 0.5s
    }
  }
}
