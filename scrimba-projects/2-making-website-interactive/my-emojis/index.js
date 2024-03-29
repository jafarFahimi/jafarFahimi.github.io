const storageEmojis = localStorage.getItem("storedEmojis");
const myEmojis = storageEmojis ? JSON.parse(storageEmojis) : [];

const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

renderEmojis();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    localStorage.setItem("storedEmojis", JSON.stringify(myEmojis));
    emojiInput.value = "";
    renderEmojis();
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    localStorage.setItem("storedEmojis", JSON.stringify(myEmojis));
    emojiInput.value = "";
    renderEmojis();
  }
});
