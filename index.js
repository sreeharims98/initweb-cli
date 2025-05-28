#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get component name from command line argument
const folderName = process.argv[2];

if (!folderName) {
  console.error("Please provide a folder name!");
  console.error("Usage: init-web <folder-name>");
  process.exit(1);
}

// Create directory if it doesn't exist
const directory = path.join(process.cwd(), folderName);
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// Create html file
const htmlFile = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./styles.css">
</head>

<body>
    <h1>Hello world!</h1>
    <script src="./script.js"></script>
</body>

</html>`;

// Create css file
const cssFile = `/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}`;

// Create js file
const jsFile = `// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is loaded and ready!");
});`;

// Write files
fs.writeFileSync(path.join(directory, "index.html"), htmlFile);
fs.writeFileSync(path.join(directory, "styles.css"), cssFile);
fs.writeFileSync(path.join(directory, "script.js"), jsFile);

console.log(`Folder ${folderName} created successfully!`);
