
export function nav() {
  const navv = document.createElement('ul');
  navv.classList.add('nav_');


  const ele1 = document.createElement('li');
  ele1.innerHTML = 'Home';
  ele1.classList.add('home_button');


  const ele2 = document.createElement('li');
  ele2.innerHTML = 'Our Menu';
  ele2.classList.add('menu');


  const ele3 = document.createElement('li');
  ele3.innerHTML = 'About Us';
  ele3.classList.add('about');

  const ele4 = document.createElement('p');
  ele4.innerHTML = 'Contact US';

  navv.appendChild(ele1);
  navv.appendChild(ele2);
  navv.appendChild(ele3);
  return navv;
}
