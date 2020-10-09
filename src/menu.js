import fud1 from './images/garri.jpg';
import fud2 from './images/rice.jpg';
import fud3 from './images/tuwo.jpg';
import fud4 from './images/yam.jpg';

export function menu() {
  const element = document.createElement('div');
  element.classList.add = ('iyawon');
  const food = [fud1, fud2, fud3, fud4];
  const pMenu = document.createElement('ul');
  pMenu.classList.add('p_menu');
  for (let i = 0; i < food.length; i += 1) {
    const listing = document.createElement('li');
    listing.classList.add = ('listing');
    const images = document.createElement('img');
    images.classList.add = ('image');
    images.src = food[i];
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = 'Random Title';
    const price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = `#${+(Math.ceil(Math.random() * 100))}${+'.00'}`;


    listing.append(images, title, price);
    pMenu.appendChild(listing);
  }

  element.appendChild(pMenu);
  return element;
}
