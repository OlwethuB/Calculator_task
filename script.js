function getID() {
  let BtnID = event.target.id;
  document.getElementById("input").innerHTML += BtnID;
}

function clear() {

}

function del() {
  document.getElementById("input").innerHTML = BtnID.slice(0,-1);
}
