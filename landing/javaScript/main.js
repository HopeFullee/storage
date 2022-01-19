const menuWrap = document.querySelector('.menu-wrap');
const menu = document.querySelectorAll('.menu');
const mTitle = document.querySelectorAll('.menu-title');
const content = document.querySelectorAll('.content');


/**************************			M A I N			***************************/


menuWrap.addEventListener('click', clickHandler);	

function clickHandler(e) {
	let elem = e.target;
	while(!elem.classList.contains('menu')){
		elem = elem.parentNode;
		if(elem.nodeName == "BODY") {
			elem = null;
			return;
		}
	}
	for(i=0; i<menu.length; i++) {
		mTitle[i].classList.add('hide');
		if(elem.dataset.value == (i+1)) {
			mTitle[i].classList.remove('hide');
			mTitle[i].classList.add('menu-click');
			menu[i].classList.add('expand');
			menu[i].classList.add('fade-out');
			doSetTimeout(i);
		}
	}
}

function doSetTimeout(i){
	setTimeout(function(){
		menuWrap.classList.add('hide');
		content[i].classList.add('flex');
		content[i].classList.add('fade-in');
		entry();
	},2400);
}






menu[0].addEventListener('mouseenter', particleHandler);

function particleHandler(){
	mTitle[0].classList.add('menu-hover');

	const particleContainer = document.createElement('div');
	particleContainer.classList.add('particle-container');
	menu[0].appendChild(particleContainer);

	let particleCount = 150;
	let i = 0;

	while(i < particleCount){
		const particle = document.createElement('span');
		particle.classList.add('particle')
		particleContainer.appendChild(particle);

		let particleSize = Math.random() * 5;
		let particlePosX = Math.floor(Math.random() * window.innerWidth);
		let particleDelay = Math.random() * -20;
		let particleDuration = Math.random() * 5;

		particle.style.width = 5 + particleSize + 'px';
		particle.style.height = 5 + particleSize + 'px';
		particle.style.left = particlePosX + 'px';
		particle.style.animationDelay = particleDelay + 's';
		particle.style.animationDuration = 6 + particleDuration + 's';

		i++
	}

	menu[0].onmouseleave = ()=> {
		menu[0].removeChild(particleContainer);
		mTitle[0].classList.remove('menu-hover');
	}
}






menu[1].addEventListener('mouseenter', shutterHandler);

function shutterHandler(){
	mTitle[1].classList.add('menu-hover');

	const shutter = document.createElement('div');
	const picture = document.createElement('div');
	shutter.classList.add('shutter');
	picture.classList.add('picture');
	menu[1].appendChild(shutter);
	menu[1].appendChild(picture);


	setTimeout(() => {	
		picture.classList.add('show');
	}, 300);
	
	menu[1].onmouseleave = ()=>{
		menu[1].removeChild(shutter);
		menu[1].removeChild(picture);
		mTitle[1].classList.remove('menu-hover');
	}
}






menu[2].addEventListener('mouseenter', rainHandler);

function rainHandler(){
	mTitle[2].classList.add('menu-hover');

	let rainContainer = document.createElement('div');
	rainContainer.classList.add('rain-container');
	menu[2].appendChild(rainContainer)


	let rainCount = 50;
	let i = 0;

	while(i < rainCount){	
		let rainDrop = document.createElement('i');
		rainDrop.classList.add('rain-drop');
		
		let rainSize = Math.random() * 5;
		let rainPosX = Math.floor(Math.random() * window.innerWidth);
		let rainDelay = Math.random() * -20;
		let rainDuration = Math.random() * 5;

		rainDrop.style.width = 0.2 + rainSize + 'px';
		rainDrop.style.left = rainPosX + 'px';
		rainDrop.style.animationDelay = rainDelay + 's';
		rainDrop.style.animationDuration = 1 + rainDuration + 's';

		rainContainer.appendChild(rainDrop);
		i++
	}

	menu[2].onmouseleave = ()=>{
		menu[2].removeChild(rainContainer);
		mTitle[2].classList.remove('menu-hover')
	}
}










