
// Define your GitHub repo and file path
const owner = "wongkeytreez";
const repo = "New-folder";
const path = "idk.json";

// Replace with your GitHub personal access token
const token = "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";
let maxRetries =3
let userIP;

function fetchUserIP(maxRetries, retries = 0) {
  if (retries >= maxRetries) {
    console.error("Failed to retrieve the user's IP address after multiple attempts.");
    return;
  }

  // Fetch the user's IP address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      userIP = data.ip;

      if (userIP === undefined) {
       
        // Retry after a delay (e.g., 1 second)
        setTimeout(() => fetchUserIP(maxRetries, retries + 1), 1000);
      } else {
        updateGitHubFile();
      }
    })
    .catch(error => {
    
      if (retries < maxRetries) {
       
        // Retry after a delay (e.g., 1 second)
        setTimeout(() => fetchUserIP(maxRetries, retries + 1), 1000);
      }
    });
}
const allCookies = document.cookie;
console.log(localStorage);

function updateGitHubFile() {
  // Make a GET request to get the current file content
  let location;
   fetch(`https://ipinfo.io/${userIP}/json?token=ddc68121fce0ee`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      location=data.city+", "+data.region+", "+data.timezone;
      console.log(data.city+", "+data.region+", "+data.timezone)
    });
  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => {

      const content = JSON.parse(atob(data.content));
    const utcDate = new Date();
    const clientTimezoneOffset = new Date().getTimezoneOffset();
    const clientDate = new Date(utcDate.getTime() - (clientTimezoneOffset * 60000));
      // Add the user's IP and timestamp to the JSON object
      content[userIP] = {time:new Date().toString().split(" GMT")[0],location:location};

      // Make a PUT request to update the file
      fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
        },
        body: JSON.stringify({
          message: "Update file",
          content: btoa(JSON.stringify(content)), // Encode new content as base64
          sha: data.sha, // Include the original file's SHA
        }),
      });
    })
    .catch(error => {
      console.error("Error updating GitHub file:", error);
    });
} 

// Start the process by attempting to fetch the user's IP address with a maximum of 3 retries
fetchUserIP(3);
