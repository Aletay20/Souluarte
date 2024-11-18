//Oficina Carrousel

$(document).ready(function() {
	$('.oficina-carrousel').owlCarousel({
    center: true,
	navText: ["<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Left.svg'/> </div>", "<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Right.svg' /> </div>"],

    items:2,
    loop:true,
	dots: true,
    responsive:{
		 0:{
            items:1,
            nav:false,
			 margin:20,
			 dots: true
        },
        768:{
            items:2,
			margin:80,
			nav: true,
			dots: false
        },
		1200:{
            items:2,
			margin:120,
			nav: true,
			dots: false
        },
		1600:{
            items:2,
			margin:160,
			nav: true,
			dots: false
        }
    }
});
})

//Oficina Carrousel Comments

$(document).ready(function() {
	$('.oficina-carrousel-comments').owlCarousel({
  
    items:3,
	dots: true,
	slideBy: 3,
    responsive:{
		 0:{
            items:1,
            nav:false,
			 margin:20,
        },
        768:{
            items:3,
			margin:10,
			nav: true,
			navText: ["<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Left_Gray.svg'/> </div>", "<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Right_Gray.svg' /> </div>"],
			dots: false
        }
    }
});
})

//Workshop Carrousel

$(document).ready(function() {
	$('.workshop-carrousel').owlCarousel({
    responsive:{
		 0:{
            items:1,
            nav:false,
			 margin:20,
			 dots: true,
			 loop: true
        },
        768:{
            items:3,
			margin:20,
			nav: true,
			navText: ["<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Left_Gray.svg'/> </div>", "<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Right_Gray.svg' /> </div>"],
			dots: false,
			slideBy: 3
        }
    }
});
})

//Homepage Carrousel

$(document).ready(function() {
	$('.homepage-carrousel').owlCarousel({
    center: true,

    items:2,
    loop:true,
	dots: true,
    responsive:{
        0:{
            items:1,
			margin:80,
			nav: false,
			dots: true,
			loop: true
        },
		768:{
            items:2,
			margin:200,
			slideBy: 2,
			navText: ["<div class='nav-button'> <img class='size_button' src='./img/Arrow_Left_Black.svg'/> </div>", "<div class='nav-button'> <img class='size_button' src='./img/Arrow_Right_Black.svg' /> </div>"],
			nav: true,
			dots: false,
			center: false,
			loop: false
        }
    }
});
})

//Muralismo Carrousel

$(document).ready(function() {
	$('.muralismo-carrousel').owlCarousel({
    center: true,
	

    items:2,
    loop:true,
	dots: true,
    responsive:{
		 0:{
            items:1,
			 margin:20,
            nav:false,
			dots: true,
			 center: true,
			loop: true
        },
		768:{
            items:1.2,
			navText: ["<div class='nav-button'> <img class='size_button' src='./img/Arrow_Left_Gray.svg'/> </div>", "<div class='nav-button'> <img class='size_button' src='./img/Arrow_Right_Gray.svg' /> </div>"],
			margin:120,
			nav: true,
			dots: false,
			center: true,
			loop: false
        },
    }
});
})

//Homepage Galeria Carrousel

$(document).ready(function() {
	$('.homepage-galeria-carrousel').owlCarousel({
    center: true,

    items:2,
    loop:true,
	dots: true,
    responsive:{
		 0:{
            items:1,
            nav:false,
			 margin:20,
        },
		768:{
            items:3,
			slideBy: 3,
			margin:20,
				nav: true,
			navText: ["<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Left_Gray.svg'/> </div>", "<div class='nav-button'> <img class='size_button ps-1' src='./img/Arrow_Right_Gray.svg' /> </div>"],
			dots: false,
			center: false,
			loop: false
        },
    }
});
})
