var nome = document.getElementById("nome");
var email = document.getElementById("email");
var celular = document.getElementById("celular");
var mensagem = document.getElementById("mensagem");
var cont = 1;
let index = 0;

let slides = document.querySelector('.slide-items').children;
let total = slides.length;

setInterval(next, 3000);

function next(){
	index++;
	if(index == total){
		index = 0;
	}
	for(i = 0; i < slides.length; i++ ){
		slides[i].classList.remove('ativo');
	}
	slides[index].classList.add('ativo'); 
}


setInterval(()=>{
	document.getElementById('radio' + cont).checked = true;
	cont++;
	if(cont > 3){
		cont = 1;
	}
}, 4000);

function validacao(){
	if(nome.value === ""){
		alert("Por favor, preencha o campo Nome!");
		nome.focus();
		nome.style.borderColor = "red";
		return false;
	}else if(email.value === ""){
		alert("Por favor, preencha o campo Email!");
		email.focus();
		email.style.borderColor = "red";
		return false;
	}else if(email.value.indexOf('@') ===-1){
		alert("Falta um @ no campo Email!");
		email.focus();
		email.style.borderColor = "red";
		return false;
	}else if(email.value.indexOf('.') ===-1){
		alert("Falta um . no campo Email!");
		email.focus();
		email.style.borderColor = "red";
		return false;
	}
    alert("Mensagem enviada! Obrigado por sua colaboração.");
}

function normalizarCor(){
    nome.style.borderColor = "white";
    email.style.borderColor = "white";
    celular.style.borderColor = "white";
    mensagem.style.borderColor = "blue";
}
