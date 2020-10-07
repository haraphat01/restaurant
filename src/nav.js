export const nav = () => {
    let content = document.getElementById("content");

    let navv = document.createElement('div');
    navv.classList.add('nav_');


    let ele1 = document.createElement("p")
    ele1.innerHTML = "Home"
    ele1.setAttribute("href", "https://www.w3schools.com");

    let ele2 = document.createElement("p")
    ele2.innerHTML = "Our Menu"
    ele2.classList.add('menu')
    

    let ele3 = document.createElement("p")
    ele3.innerHTML = "About Us"

    let ele4 = document.createElement("p")
     ele4.innerHTML = "Contact US"

    navv.appendChild(ele1)
    navv.appendChild(ele2)
    navv.appendChild(ele3)
    content.appendChild(navv)
    ele2.addEventListener("onmouseover", menu)
   
}

export const picture=()=>{
  let content = document.getElementById("content");
  let bodi = document.createElement('div');
  bodi.classList.add('pic');

  const myImage = new Image();
  myImage.src = restt;
  bodi.appendChild(myImage);
  content.appendChild(bodi)
}

 const menu =()=> {
    let ar = ["Rice", "Beans", "Yam", "Garri"]
    let str = '<ul>'
    for (let i = 0; i <= ar.length-1; i++) {
    str += '<li>' + ar[i] + '</li>' + + '<br>'
    
    }
      return str 
}
