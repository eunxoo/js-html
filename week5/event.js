const content = document.querySelector("div.content h1");

function handleContentClick() {
  content.style.color = "orange";
}

content.addEventListener("click", handleContentClick);
