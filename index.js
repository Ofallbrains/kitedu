const clickMenu = document.getElementById("menu-toogle")
const mainMenu = document.getElementById("menu")
const menuIcon = document.getElementById("menu-icon")

clickMenu.addEventListener('click', () => {
  console.log('hy')
  mainMenu.classList.toggle('translate-x-[100%]')

  if (mainMenu.classList.contains('translate-x-[100%]')) {
    menuIcon.setAttribute('name', 'menu-outline')
  } else {
    menuIcon.setAttribute('name', 'close-outline')
  }
})

const pages = document.getElementById('pages')
let currentIndex = 0;
const totalPages = 3;

function showPage(index){
    pages.style.transform = `translateX(-${index * 1200}px)`
}

function nextPage(){
    currentIndex = (currentIndex + 1) % totalPages
    showPage(currentIndex)
}

function prevPage(){
    currentIndex = (currentIndex - 1 + totalPages) % totalPages;
    showPage(currentIndex)
}

setInterval(nextPage, 4000) 