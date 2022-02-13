const showsForm = document.getElementById(`shows`)
const priority = document.getElementById(`priority`)
const itemName = document.getElementById(`item-name`)
const watchlist = document.getElementById(`watchlist-section`)







document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById(`fortuneteller`).onclick = function (){
    axios.get("http://localhost:4000/api/fortune/")
    .then((res) => {
        const data = res.data;
        alert(data);
        console.log(data)
    })
}
document.getElementById(`games`).onclick = function (){
    axios.get("http://localhost:4000/api/games/")
    .then((res) => {
        const data = res.data;
        alert(data);
        console.log(data)
    })
}
document.getElementById(`certs`).onclick = function (){
    axios.get("http://localhost:4000/api/certs/")
    .then((res) => {
        const data = res.data;
        alert(data);
        console.log(data)
    })
}
document.getElementById(`gym`).onclick = function (){
    axios.get("http://localhost:4000/api/gym/")
    .then((res) => {
        const data = res.data;
        alert(data);
        console.log(data)
    })
}

showsForm.addEventListener( `submit`, (e) => {
    e.preventDefault()

    const newItem = {
        name: itemName.value,
        priority: priority.value
    }

    axios.post("http://localhost:4000/api/watchlist", newItem).then((res) => {
        displayItems(res.data)
    })
    itemName.value = ``
    priority.selectedIndex = 0
})

const displayItems = (arr) => {
    console.log(arr);
    while(watchlist.firstChild){
        watchlist.removeChild(watchlist.firstChild)
    }
    for (let i = 0; i < arr.length; i++){
      const newItem = document.createElement(`div`)

      newItem.className = `new-item`

      newItem.innerHTML = `<h1 class='item-title'>${arr[i].name}</h1><p>priority: ${arr[i].priority}</p>
      <button onclick="deleteitem(${arr[i].id})" class='delete-btn' value="${arr[i].id}">delete</button>`;
        
      watchlist.appendChild(newItem)
         let deleteBtns = document.getElementsByClassName("delete-btn");

    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", deleteItem);
    }
    }
}

const deleteItem = (id) => {
    axios.delete(`http://localhost:4000/api/watchlist/${id}`).then((res) => {
        displayItems(res.data)
    })
}