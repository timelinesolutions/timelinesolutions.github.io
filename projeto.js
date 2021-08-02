$(function(){
    $('#slide img:eq(0)').addClass("atual").show();
    setInterval(slide, 4000);
    
    function slide(){
        if($('.atual').next().size()){
            $('.atual').fadeOut().removeClass("atual").next().fadeIn().addClass("atual");
        }else{
            $('.atual').fadeOut().removeClass("atual");
            $('#slide img:eq(0)').fadeIn().addClass("atual");
        }
    }
});

function proximo(){
    if($('.atual').next().size()){
            $('.atual').fadeOut().removeClass("atual")
                    .next().fadeIn().addClass("atual");
    }else{
            $('.atual').fadeOut().removeClass("atual");
            $('#slide img:eq(0)').fadeIn().addClass("atual");
         }
}

function anterior(){
    if($('.atual').prev().size()){
            $('.atual').fadeOut().removeClass("atual")
                    .prev().fadeIn().addClass("atual");
    }else{
            $('.atual').fadeOut().removeClass("atual");
            $('#slide img:eq(2)').fadeIn().addClass("atual");
         }
}

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var celular = document.getElementById("celular");
var mensagem = document.getElementById("mensagem");

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
