export default const home =() => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('homeDiv');

  const homeH1 = document.createElement('h1');
  homeH1.innerHTML = 'Mission';
  const homep1 = document.createElement('p');
  homep1.innerHTML = 'To serve good pizza Yow';
  const homeH2 = document.createElement('h1');
  homeH2.innerHTML = 'Vision';
  const homep2 = document.createElement('p');
  homep2.innerHTML = 'With making some great pizza Yow';

  homeDiv.appendChild(homeH1);
  homeDiv.appendChild(homep1);
  homeDiv.appendChild(homeH2);
  homeDiv.appendChild(homep2);

  return homeDiv;
}
