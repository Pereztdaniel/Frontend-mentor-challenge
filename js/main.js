$(document).ready(function(){

		// NAV BUTTON

		$('.menu-btn').click(()=>{
			$('.nav-menu').addClass('show-bar')
		})

		$('.btn-close').click(()=>{
			$('.nav-menu').removeClass('show-bar')
		})

	// INICIA SLIDE

	let numeroSlide = 1;

	let formatearLoop = false;

	let cantidadImg = $("#slide ul li").length;
	console.log("cantidadImg",cantidadImg);

	$("#slide ul").css({"width":(cantidadImg*100) + "%"});
	$("#slide ul li").css({"width":(100/cantidadImg) + "%"});

	// FUNCION AVANZAR

	function avanzar(){

		if (numeroSlide >= cantidadImg) {
			numeroSlide = 1;
		}
		else{
			numeroSlide++;
		}
		$("#slide ul li").css({"display":"none"});

		$("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();
	}

	// FLECHA DERECHA

	$("#right").click(function(){

		avanzar();
		formatearLoop = true;
	});

	// FLECHA IZQUIERDA

	$("#left").click(function(){

		if (numeroSlide <= 1) {
			numeroSlide = cantidadImg;
		}
		else{
			numeroSlide--;
		}
		$("#slide ul li").css({"display":"none"});

		$("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();

		formatearLoop = true;
	});

	// LOOP

	setInterval(function(){

		if(formatearLoop){
			formatearLoop = false;
		}
		else{
			avanzar();
		}
	},5000);

	// FINALIZA SLIDE
});

