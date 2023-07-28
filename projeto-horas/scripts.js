const form = document.getElementById("form");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const campos = document.querySelectorAll(".required");
const campos2 = document.querySelectorAll(".required2");
const campos3 = document.querySelectorAll(".inputs");

const span = document.querySelectorAll(".span-required");
const span1 = document.querySelectorAll(".span-required1");
const span2 = document.querySelectorAll(".span-required2");
const span3 = document.querySelectorAll(".span-required3");
const span4 = document.querySelectorAll(".span-required4");

const hours = document.querySelectorAll(".hours");

const activity = document.querySelectorAll(".activity1");

const nameRegex = /^[a-zA-z]+$/
const hourRegex = /^[0-2][0-3]:[0-5][0-9]$/

/*const nomesCadastro = document.querySelector("#textName");*/

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeError(0);
    }
};
function projectNameValidate(){
    if(campos2[0].value.length < 10){
        setError2(0);
    }else{
        removeError2(0);
    }
};
function hourValidate(){
    if(hours[0].value.length > 3){
        setError3(0);
    }else{
        removeError3(0);
    }
};
function activityValidate(){
    if(activity[0].value.length < 30){
        setError4(0);
    }else{
        removeError4(0);
    }
};
function buttonValidate(){
    if(campos[0].value === ''){
        setButtonError(0);
    }else{
        removeButtonError(0);
    }
};

function buttonValidateProject(){
    if(campos2[0].value === ''){
        setButtonError2(0);
    }else{
        removeButtonError2(0);
    }
};

function buttonValidateForm(){
    if(campos3[0].value === ''){
        setButtonError3(0);
    }else{
        removeButtonError3(0);
    }
};

function reloadPage(){
    window.location.reload(true);
};




function setError(index){
    campos[index].style.border = '2px solid red';
    span[index].style.display = 'block';
};
function removeError(index){
    campos[index].style.border = '';
    span[index].style.display = 'none';
};

function setError2(index){
    campos2[index].style.border = '2px solid red';
    span[index].style.display = 'block';
};
function removeError2(index){
    campos2[index].style.border = '';
    span[index].style.display = 'none';
};

function setError3(index){
    hours[index].style.border = '2px solid red';
    span1[index].style.display = 'block';
};
function removeError3(index){
    hours[index].style.border = '';
    span1[index].style.display = 'none';
};

function setError4(index){
    activity[index].style.border = '2px solid red';
    span[index].style.display = 'block';
};
function removeError4(index){
    activity[index].style.border = '';
    span[index].style.display = 'none';
};

function setButtonError(index){
    campos[index].style.border = '2px solid red'
    span2[index].style.display = 'block'
};
function removeButtonError(index){
    campos[index].style.border = ''
    span2[index].style.display = 'none'
};

function setButtonError2(index){
    campos2[index].style.border = '2px solid red'
    span3[index].style.display = 'block'
};
function removeButtonError2(index){
    campos2[index].style.border = ''
    span3[index].style.display = 'none'
};

function setButtonError3(index){
    campos3[index].style.border = '2px solid red'
    span4[index].style.display = 'block'
};
function removeButtonError3(index){
    campos3[index].style.border = ''
    span4[index].style.display = 'none'
}

/*

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuarios) => {
            nomesCadastro.innerHTML += `<li> ${usuarios.nome} - ${usuarios.sobrenome} </li>`
            console.log(usuarios);
        })
    })
})*/


/*
nomesCadastro.forEach(function(item){
    addOption(item)
});

function addOption(valor){
    let option = new Option(valor, valor);
    let select = document.getElementById("nameSelect");
    select.add(option);
} */




var arr = [];
 
function addItem(){
   if (localStorage.nomesCadastro){             
      arr = JSON.parse(localStorage.getItem('nomesCadastro')); 
   }
   
   let novoItem = document.getElementById("textName").value;
   arr.push(novoItem);
   document.getElementById("textName").value = "";
   localStorage.nomesCadastro = JSON.stringify(arr);
};
document.getElementById("nameOption").innerHTML=localStorage.getItem("nomesCadastro");


/*
let againObjectName = JSON.parse(localStorage.getItem("nomesCadastro"));
*/











/*
var arr2 = [];
 
function addItem2(){
   if (localStorage.projetosCadastro){             
      arr2 = JSON.parse(localStorage.getItem('projetosCadastro')); 
   }
   
   let novoItem = document.getElementById("projectName").value;
   arr2.push(novoItem);
   document.getElementById("projectName").value = "";
   localStorage.projetosCadastro = JSON.stringify(arr2);
};  
*/