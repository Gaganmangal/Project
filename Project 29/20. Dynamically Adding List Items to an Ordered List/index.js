const courseTopics = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Under Standing Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Under Standing Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];

const button = document.getElementById("button");
const list = document.getElementById("list");
let index = 0;

button.addEventListener("click", () => {
  if (index < courseTopics.length) {
    const newli = document.createElement("li");
    newli.textContent = courseTopics[index];
    list.appendChild(newli);
    index++;
  } else if (index === courseTopics.length) {
    button.disabled = true;
    alert("All topics have been added.");
  }
});
