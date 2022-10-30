let tbcount = document.getElementById("tb-count")
let entries = document.getElementById("entries")
let count = 0;
function increment() {

    count++;
    tbcount.textContent = count;
}
function save() {
    countStr = count + " - "
    entries.textContent += countStr;
    tbcount.textContent = 0;
    count = 0;
}