

const lists = document.querySelectorAll('nav ul li');
lists.forEach(link => {
  link.classList.remove('active');
});

var loc = window.location.href.split('/');
var pageName = loc[loc.length-1];
var activeLink = document.querySelector(`nav ul li a[href="${pageName}"]`);
document.addEventListener('DOMContentLoaded', ()=>{
  
  activeLink.parentElement.classList.add('active');

});


