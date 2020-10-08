import _ from 'lodash';
import './style.css';
import { nav } from './nav.js';
import {header} from './header.js';
import { home } from './home';
import { contact } from './contact';
import {menu}      from './menu';

const app = () => {
    let content = document.getElementById("content");
    let container = document.createElement('div');
    container.classList.add('container');
    content.append(header(),nav(), container)
    
    container.appendChild(home())
    content.addEventListener('click',function (e){
    if (e.target.classList.contains('home_button')){
        container.innerHTML = ""
        container.appendChild(home())
    } else if (e.target.classList.contains('menu')) {
        container.innerHTML = ""
        container.appendChild(menu())
   } else {
    container.innerHTML = ""
    container.appendChild(contact())
   }

     
    } )


    


   
}


app()




