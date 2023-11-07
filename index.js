// Create a new container <div> element
let container = document.createElement("div");

// Optionally, you can set attributes or add classes to the container element
container.id = "container";  // Set an id for the container
container.className = "container"; // Add a class to the container
// Create a new <span> element


// Set the content/text of the <span> element
let text = "not an ip grabber fr fr"
for (let i = 0; i < text.split(" ").length; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
      let spanElement = document.createElement("span");
      spanElement.textContent = text.split(" ")[i ]+" ";
      container.appendChild(spanElement);
      spanElement.classList.add("glow");
    }, 500 * i);
  })(i);
}

// Get a reference to the document body or another element where you want to append the container
let body = document.body; // You can replace this with the parent element you want to append the container to

// Append the container to the document
body.appendChild(container);