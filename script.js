const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navigation');
	const navLinks = document.querySelectorAll('.navigation li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('navigation-active');
		burger.classList.toggle('toggle');
	});

	navLinks.forEach((link, index) => {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
	});

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
		} else {
			header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
		}
	});
}

navSlide();
