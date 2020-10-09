import fud1 from './images/garri.jpg';
import fud2 from './images/rice.jpg';
import fud3 from './images/tuwo.jpg';
import fud4 from './images/yam.jpg';

export const menu = () => {
    let element = document.createElement('div')
    let food = [fud1, fud2, fud3, fud4]
    let p_menu = document.createElement('ul')
    p_menu.classList.add('p_menu')
    for (let i = 0; i < food.length; i += 1){
    let listing = document.createElement('li');
     listing.classList.add = ('listing');
     let images = document.createElement('img')
     images.classList.add = ('images')
     images.src = food[i]
     let title = document.createElement('p')
     title.classList.add('title')
     title.innerHTML = "Random Title"
     let price = document.createElement('p')
     price.classList.add('price')
     price.innerHTML = (Math.random() * 100)
     

     listing.append(images, title, price)
     p_menu.appendChild(listing)
     
    }

    element.appendChild(p_menu)
    return element
}

