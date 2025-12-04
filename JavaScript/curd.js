import { url } from '../JavaScript/metaData.js'
const nameInput = document.getElementById("name");
const addBtn = document.getElementById("addbtn");
const list = document.getElementById("list");


addBtn.onclick = function () {
    const n = nameInput.value;

    fetch(`${url}.json`, {
        method: "POST",
        body: JSON.stringify({ name: n }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => {
        nameInput.value = "";
        loadData(); // refresh list after POST succeeds
    })

};

// Load all items
function loadData() {
    fetch(`${url}.json`)
        .then(res => res.json())
        .then(data => {
            list.innerHTML = "";
            for (let key in data) {
                list.innerHTML += `<li>${data[key].name}</li>`;
            }
        })
        .catch(error => console.error("Error loading data:", error));
}