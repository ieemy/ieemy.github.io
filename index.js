// console.info(2);
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("app started");

var myName = "Emanuel";
var age = 17;
//console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 18;
//console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 19;
//console.info("My name is " + myName + ", I'm " + age + " years old.");

var jobTitle = "<span>High School Student</span>";
var mottoElement = document.getElementById("motto");

console.info(mottoElement);
console.warn(mottoElement.innerHTML);

//mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  // console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function show(id) {
  // console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

var activePage = "home";

function showPage(nextPage) {
  // console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + nextPage).classList.add("active");
  activePage = nextPage;
}

showPage(activePage);
