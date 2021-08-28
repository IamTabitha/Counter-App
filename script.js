let countEl = document.getElementById("count");
let count = 0;
let saveCountEl = document.getElementById("saveCount");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function saveCount() {
    saveCountEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;

}