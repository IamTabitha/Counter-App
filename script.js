let countEl = document.getElementById("count");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}