import { home } from './home.js';


export const nav = () => {
    

    let navv = document.createElement('ul');
    navv.classList.add('nav_');


    let ele1 = document.createElement("li")
    ele1.innerHTML = 'Home'
    ele1.classList.add('home_button')
    
    
    let ele2 = document.createElement("li")
    ele2.innerHTML = "Our Menu"
    ele2.classList.add('menu')
    

    let ele3 = document.createElement("li")
    ele3.innerHTML = "About Us"
    ele3.classList.add('about')

    let ele4 = document.createElement("p")
     ele4.innerHTML = "Contact US"

    navv.appendChild(ele1)
    navv.appendChild(ele2)
    navv.appendChild(ele3)
    return navv
}

