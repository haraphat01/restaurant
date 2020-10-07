import { nav } from './nav.js';

export const header =() => {
    let head = document.createElement('div');
    head.classList.add('header');
    let head_p = document.createElement('p');
    head_p.innerHTML = "Pencil Restaurant"
    head.appendChild(head_p)
    content.appendChild(head)

}