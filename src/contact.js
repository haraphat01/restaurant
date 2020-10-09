export default function contact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  const hOne = document.createElement('h1');
  hOne.innerHTML = 'You can reach us here on the line displayed below';
  const pOne = document.createElement('p');
  pOne.innerHTML = 2347037192459;

  contact.appendChild(hOne);
  contact.appendChild(pOne);


  return contact;
}