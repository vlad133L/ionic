const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const overflow = document.querySelector('body');

mobileNavButton.addEventListener('click',function(){
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	overflow.classList.toggle('body--scroll');
});