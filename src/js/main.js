//main.js file
// Responsive menu
const menu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.mobile-burger')
burger.onclick = () => {
  menu.classList.toggle('active')
  burger.classList.toggle('active')
}

// Hide mobile menu onclick anchor 
const anchor = document.querySelectorAll('.mobile-menu li')
anchor.forEach(item => {
  item.onclick = () => {
    menu.classList.remove('active')
    burger.classList.remove('active')
  }
})


// Tab
let tabs = document.querySelectorAll('.accordion__contentBox'),
  contents = document.querySelectorAll('.accordion__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('active')
    })
    tabs.forEach((tab) => {
      tab.classList.remove('active')

    })
    contents[index].classList.add('active')
    tabs[index].classList.add('active')
  })
})

