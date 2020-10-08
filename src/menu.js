import Fud1 from './images/garri.jpg';
import Fud2 from './images/rice.jpg';
import Fud3 from './images/tuwo.jpg';
import Fud4 from './images/yam.jpg';

export const menu = () => {
    let element = document.createElement('div')
    let food = [fud1, fud2, fud3, fud4]
    for (let i = 0; i < food.length; i += 1){
     const listing = document.createElement('li');
     listing.classList.add = ('listing');
     let images = document.createElement('img')
     images = food[i]
     let title = document.createElement('p')
     title.classList.add('title')
     title.innerHTML = "Random Title"
     let price = document.createElement('p')
     price.classList.add('price')
     price.innerHTML = (Math.random() * 100)
     

     listing.appendChild(images)
     listing.appendChild(title)
     listing.appendChild(price)
    }

    element.appendChild(listing)
    return element
}

