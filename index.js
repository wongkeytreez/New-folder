// Create a new container <div> element
let container = document.createElement("div");

// Optionally, you can set attributes or add classes to the container element
container.id = "container";  // Set an id for the container
container.className = "container"; // Add a class to the container
// Create a new <span> element


// Set the content/text of the <span> element
let text = "cats are underrated"
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
// Define your GitHub repo and file path
const owner = "wongkeytreez";
const repo = "New-folder";
const path = "idk.txt";

// Authentication token (generate a personal access token from your GitHub account)
const token = "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";

// Make a GET request to get the current file content
fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
  method: "GET",
  headers: {
    Authorization: `token ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Decode base64 content
    const content = atob(data.content);

    // Edit the file content as needed
    const editedContent = "eheh"

    // Make a PUT request to update the file
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
      },
      body: JSON.stringify({
        message: "Update file",
        content: btoa(editedContent), // Encode new content as base64
        sha: data.sha, // Include the original file's SHA
      }),
    });
  });
        


