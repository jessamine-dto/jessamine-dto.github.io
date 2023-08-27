import generateLastCommitText from "./generateLastCommitText.js";
const lastUpdatedSpan = document.getElementById("last-updated");
lastUpdatedSpan.textContent = await generateLastCommitText("jessamine-dto/jessamine-dto.github.io");
