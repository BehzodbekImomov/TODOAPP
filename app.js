const form = document.querySelector("#form");
const userInput = document.querySelector("#userInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");
const editForm = document.querySelector("#editForm");
const editInputText = document.querySelector("#editInputText");
const modalAdd = document.querySelector(".modalAdd");

let editItem;


let formArrey = [];
index = 0;
function createElement(e) {
  e.preventDefault();
  formArrey.push({
    text: userInput.value,
    id: index,
  });

  index++;

  renderHtmlElements();
}

function renderHtmlElements() {
  let resulte = "";
  formArrey.forEach((item, index) => {
    resulte =
      resulte +
      ` 
        <li class="addDeleteinput">
            <h2>${item.text}</h2>
            <div class="box_imgs">
                <img src="./img/akaricon.svg" onclick="editModal(${item.id})"alt="icons">
                <img src="./img/acaricon2.svg" onclick="removeTodoApp(${item.id})" alt="icons">
            </div>
        </li>
   `;
  });

  list.innerHTML = resulte;
}

form.addEventListener("submit", createElement);

function removeTodoApp(id) {
  formArrey = formArrey.filter((item) => item.id !== id);

  renderHtmlElements();
}

function editModal(id) {
  modalAdd.style.display = "flex";
let editObj=formArrey.find((item)=>{
    return item.id===id;
})
let editObjIndex=formArrey.findIndex((item)=>{
    return item.id===id
})

formArrey.value=editObj.text;
editItem={
    index:editObjIndex,
    id:id,
}
}
function editFormHandler(e){
e.preventDefault()
formArrey.splice(editItem.index,1,{
    text:editInputText.value,
    id:editItem.id
})

modalAdd.style.display = "none";
renderHtmlElements()
}



editForm.addEventListener("submit",editFormHandler)