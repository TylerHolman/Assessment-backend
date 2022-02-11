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