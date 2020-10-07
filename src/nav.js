import { home } from './home.js';


export const nav = () => {
    let content = document.getElementById("content");

    let navv = document.createElement('div');
    navv.classList.add('nav_');


    let ele1 = document.createElement("p")
    ele1.innerHTML = '<a href="'  + '">Home</a>'
    
    
    let ele2 = document.createElement("p")
    ele2.innerHTML = "Our Menu"
    ele2.classList.add('menu')
    

    let ele3 = document.createElement("p")
    ele3.innerHTML = "About Us"

    let ele4 = document.createElement("p")
     ele4.innerHTML = "Contact US"

    navv.appendChild(ele1)
    navv.appendChild(ele2)
    navv.appendChild(ele3)
    content.appendChild(navv)
   
}

