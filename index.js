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