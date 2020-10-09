export default const header =() => {
  const head = document.createElement('div');
  head.classList.add('header');
  const headP = document.createElement('p');
  headP.innerHTML = 'Pencil Restaurant';
  head.appendChild(headP);
  return head;
}