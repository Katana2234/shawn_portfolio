// const mobileMenu = document.getElementById('menu-bar');
// const optionMenu = document.getElementById('option-menu');
// const header = document.getElementById('header-menu');
// const screenWidth = window.innerWidth;


const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

// mobileMenu.addEventListener('click', () => {
//     optionMenu.classList.toggle('active');
// 	header.classList.toggle('active');

//     // Get all <a> elements inside the nav
//     const navLinks = optionMenu.querySelectorAll('a');

//     // Toggle the display property of each <a> element
//     navLinks.forEach(link => {
// 		link.classList.toggle('fade-in');
//         link.style.display = optionMenu.classList.contains('active') ? 'block' : 'none';
//     });

	
// 	if(screenWidth > 959){
// 		navLinks.forEach(link => {
// 			link.style.display = "unset";
// 		});
// 	}

// });


toggleBtn.onclick = function () { 
	dropdownMenu.classList.toggle('open');
	const isOpen = dropdownMenu.classList.contains('open')

	toggleBtnIcon.classList = isOpen
	? 'fas fa-xmark'
	: 'fas fa-bars'
}

