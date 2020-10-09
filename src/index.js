
import './style.css';
import { nav } from './nav';
import { header } from './header';
import { home } from './home';
import { contact } from './contact';
import { menu } from './menu';

const app = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  container.classList.add('container');
  content.append(header(), nav(), container);

  container.appendChild(home());
  content.addEventListener('click', (e) => {
    if (e.target.classList.contains('home_button')) {
      container.innerHTML = '';
      container.appendChild(home());
    } else if (e.target.classList.contains('menu')) {
      container.innerHTML = '';
      container.appendChild(menu());
    } else {
      container.innerHTML = '';
      container.appendChild(contact());
    }
  });
};


app();
