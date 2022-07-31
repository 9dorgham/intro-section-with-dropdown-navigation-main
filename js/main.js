let header = document.querySelector('header'),
  nav = document.querySelector('nav'),
  features = document.querySelector('.features'),
  company = document.querySelector('.company'),
  clickers = document.getElementsByClassName('clickers')[0],
  menu = document.querySelector('.menu'),
  c_Menu = document.createElement('img'),
  aside= document.createElement('aside');
  drop1 = features.querySelector('.dropdown-f'),
  drop2 = company.querySelector('.dropdown-c');

// colse icon
c_Menu.src= "/media/Icon/icon-close-menu.svg";
c_Menu.className= 'close';



// Remove Dropdown menus from DOM
drop1.remove();
drop2.remove();



// Toggle For dropdown1
let toggle = true;
function test() {
  if (toggle) {
    features.append(drop1);
  }else {
    drop1.remove();
  }

  toggle = !toggle;
}
features.onclick = test;



// Toggle For dropdown2
let toggle2 = true;
function test2() {
  if (toggle2) {
    company.append(drop2);
  }else {
    drop2.remove();
  }

  toggle2 = !toggle2;
}
company.onclick = test2;






function watch(y) {
  if (y.matches) {
    nav.remove();
    clickers.remove();
    menu.onclick= showAside;
  }else {
    aside.remove();
    header.append(nav, clickers);
  }
}

function look(y) {
  if(y.matches) {
    document.querySelector('.box1 img').src = "/media/images/image-hero-mobile.webp";
  }else {
    document.querySelector('.box1 img').src = "/media/images/image-hero-desktop.WebP";
  }
}


// media Query
let v = window.matchMedia("(max-width: 900px)");
watch(v)
v.addEventListener("change", watch);


// media query for hero image
let x = window.matchMedia("(max-width: 500px)");
look(x);
x.addEventListener("change", look);



// Aside Element
function showAside() {
  header.after(aside);
  let head = document.createElement('div');
  head.append(c_Menu);
  head.className= 'c-box';
  
  aside.append(head, nav, clickers);
  aside.style.height= `${window.innerHeight}px`;
  clickers.classList.add('v');

  document.images[0].onclick = () => {
    aside.remove();
  }

  window.onkeydown = (e) => {
    if (e.key == 'Escape') {
      aside.remove();
    }
  }
}