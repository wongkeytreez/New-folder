// Create a new container <div> element
function createContainer(className) {
  let container = document.createElement("div");
  container.className = className;
  document.body.appendChild(container);
  return container;
}

let waitTime = 70;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateText(container, words) {
  for (let x = 0; x < words.length; x++) {
    let wordsNow = words[x].split("");
    for (let y = 0; y < wordsNow.length; y++) {
      await sleep(waitTime);
      let spanElement = document.createElement("span");
      spanElement.textContent = wordsNow[y];
      container.appendChild(spanElement);
      // spanElement.classList.add("glow");
    }
    await sleep(waitTime * 7.14);
  }
}

(async function () {
  let container1 = createContainer("container");
  let container2 = createContainer("container");
  let container3 = createContainer("container");
  let container4 = createContainer("container");
  let container5 = createContainer("container");
  let container6 = createContainer("containerrb");
  await sleep(waitTime*5);
  await animateText(container1, ["roses are red, ", "violets are blue"]);
  await animateText(container2, ["infinity's vast, ", "and my love is too"]);
  await animateText(container3, ["Like the stars at night, ", "endless and bright"]);
  await animateText(container4, ["For you my dear, ", "day and night"]);
  await animateText(container5, ["-c̶h̶a̶t̶g̶p̶t̶,  ", " hakim fr fr"]);
  await animateText(container6, ["i might or might not be joking, dont ask"]);
})();
