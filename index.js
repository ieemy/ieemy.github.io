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

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
}

function showHomePage() {
  hideAllPages();
  showPage("home");
}

function showSkillsPage() {
  hideAllPages();
  showPage("skills");
}

function showProjectsPage() {
  hideAllPages();
  showPage("projects");
}

function showLanguagesPage() {
  hideAllPages();
  showPage("languages");
}
showHomePage();
