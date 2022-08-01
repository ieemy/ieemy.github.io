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

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        // console.warn("click pe menu", id);
        showPage(id);
      }
    });
}

showPage(activePage);

initEvents();

function displaySkills() {
  console.info("display skills");

  // initializare ; conditie ; post exec
  for (var i = 1; i < 3; i++) {
    console.info(`${i} * 5 = ${i * 5}`);
    //  i = i + 1; = i++
  }

  var ul = document.querySelector("#skills ul");
  var skills = ["js", "html", "css"];
  console.info(ul);
  for (var i = 0; i < skills.length; i++) {
    // ul.innerHTML = ul.innerHTML + `<li>${skills[i]}</li>`;
    // ul.innerHTML = `<li>${skills[i]}</li>` + ul.innerHTML;
    ul.innerHTML += `<li>${skills[i]}</li>`;
  }
}

displaySkills();
