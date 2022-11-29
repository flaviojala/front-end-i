const container = document.querySelector(".container");
const button = document.querySelector(".button");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");

// 1. Change the icon of the mouse when it enters the container.
container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("cursor");
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("cursor");
  },
  false
);

// 3. add new article by clicking the first button
button1.addEventListener("click", () => {
  button1.setAttribute("disabled", true);
  const articleWrapper = document.querySelector(".article-wrapper")

  const divCreated = document.createElement("div");
  const templateString = 
  `<div class="containerAdded" id="newContainer">      
  <article>New Container Added!</article>
  <button onclick="removeContainer()" class="button" id="button-remove">Remove</button>
  </div>`

  divCreated.innerHTML = templateString;
  articleWrapper.appendChild(divCreated)
});

function removeContainer() {
  const containerAdded = document.querySelector(".containerAdded")
  containerAdded.remove();
  button1.removeAttribute("disabled", true);
}

let count = 0;

button2.addEventListener("click", () => {
  const articleWrapper = document.querySelector(".article-wrapper")
  const counter = document.querySelector(".counter");
  if (!counter) {
    const newCounter = document.createElement("div");
    newCounter.className = "counter"
    newCounter.innerHTML = `<h3>Counter</h3> ${count}`;
    articleWrapper.appendChild(newCounter)
  }

  count += 1;
  document.querySelector(".counter").innerHTML = `<h3>Counter</h3> ${count}`;
  
});

button3.addEventListener("click", () => {
  const interval = setInterval(() => {
    console.log(`${count} seconds`);
    count--;
    document.querySelector(".counter").innerHTML = `<h3>Counter</h3> ${count}`;
    if (count < 1) {
      clearInterval(interval)
    }
  }, 1000);
});
