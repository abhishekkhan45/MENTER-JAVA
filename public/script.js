const addUserBtn = document.querySelector("#adduser");
const btntext = addUserBtn.innerText;

const UsernameTextField = document.querySelector("#username");
const recordDisplay = document.querySelector("#records");
let userArray = [];
let edit_id = null;

let objStr = localStorage.getItem("users");
if (objStr != null) {
  userArray = JSON.parse(objStr);
}

//input field

addUserBtn.onclick = (e) => {

    let name1=document.forms["myform"]["fname"].value;
  console.log("hello");
  if(name1 === ""){
    alert("enter data");
    return false;
  }



  e.preventDefault();
  //input filed value

  const name = UsernameTextField.value;
  //input

  if (edit_id != null) {
    //edit
    userArray.splice(edit_id, 1, { name: name });
    edit_id = null;
  } else {
    //insert

    userArray.push({ name: name });
  }

  SaveInfo(userArray);
  UsernameTextField.value = "";
  addUserBtn.innerHTML = btntext;
};


//saveinfi function
function SaveInfo(userArray) {
  let str = JSON.stringify(userArray);
  localStorage.setItem("users", str);
  DisplayInfo();
}

//displayinfo function
function DisplayInfo() {
  let statement = "";
  userArray.forEach((user, i) => {
    statement += `<tr>
                  <th scope="row">${i + 1}</th>
                  <td>${user.name}</td>
                  <td>
                    <i class="fa-solid fa-pen-to-square" onClick= EditInfo(${i})></i>
                    <i class="fa-solid fa-trash" onClick= DeleteInfo(${i})></i>
                  </td>
                </tr>   `;
  });
  recordDisplay.innerHTML = statement;
}

//editinfo function
function EditInfo(id) {
  edit_id = id;
  UsernameTextField.value = userArray[id].name;
  addUserBtn.innerHTML = "Edit";
}

//deleteinfi function
function DeleteInfo(id) {
  userArray.splice(id, 1);
  SaveInfo(userArray);
}

/*
const form = document.querySelector("#form");
const error = document.querySelector("#error");

form.addEventListener("click", (e) => {
  e.preventDefault();

  //form input value
  const username = document.querySelector("#username");

  error.innerHTML = " ";

  //validation login
  if (username === "") {
    error.innerHTML = "username is required...";
    return;
  }
});
*/

/*function validateform(){
  let name1=document.forms["myform"]["fname"].value;
  console.log("hello");
  if(name1 === ""){
    alert("enter data");
    return false;
  }
  const name = UsernameTextField.value;
  //input

  if (edit_id != null) {
    //edit
    userArray.splice(edit_id, 1, { name: name });
    edit_id = null;
  } else {
    //insert

    userArray.push({ name: name });
  }

  SaveInfo(userArray);
  UsernameTextField.value = "";
  addUserBtn.innerHTML = btntext;

  //return true;
}
*/