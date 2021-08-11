let slides = document.querySelector('.slide-items').children;
let total = slides.length;
let index = 0;

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
setInterval(next, 5000);