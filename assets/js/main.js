var menuResponsive = {
	init: function(){
		this.scrollMenu();
		this.showMenu();
	},

	scrollMenu: function(){
		window.onscroll = () => {
			var currentScroll = window.pageYOffset;
			var menu = document.querySelector('nav');
			if (currentScroll > 215 ){
				menu.classList.add('menu-fixed');
			}else
				menu.classList.remove('menu-fixed');
		}
	},
	showMenu: function(){
		var menuOverlay = document.querySelector('.menu-overlay');
		var burgerOverlay = document.querySelector('.menu-responsive-overlay');
		var burger = document.querySelector('.menu-responsive');
		burger.addEventListener('click', function(){
			burger.classList.toggle('burger-last');
			menuOverlay.classList.add('menu-overlay-none');
			console.log('hi');
		})


		burgerOverlay.addEventListener('click', function(){
			menuOverlay.classList.remove('menu-overlay-none');
			burger.classList.remove('burger-last');
		});
	},
}

menuResponsive.init();

