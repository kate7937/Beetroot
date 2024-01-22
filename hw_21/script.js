let header = {
    logo: {
      url: `/home`,
      text: `logo`,
    },
    nav: {
      1: {
        url: `/home`,
        text: `Home`,
      },
      2: {
        url: `/about`,
        text: `About`,
      },
      3: {
        url: `/portfolio`,
        text: `Portfolio`,
      },
      4: {
        url: `/contacts`,
        text: `Contacts`,
      }
    },
    btn: [`LogIn`, `LogOut`],
  };
let all = document.querySelector('*');
all.style.boxSizing = 'border-box';

let body = document.querySelector(`body`);
let headerElement = document.createElement(`header`);
body.prepend(headerElement);
headerElement.style.cssText = `display: flex; justify-content: space-between; align-items: center; padding: 0 10px; `;

let logo = document.createElement('a');
logo.setAttribute(`href`, header.logo.url)
logo.innerHTML = header.logo.text;
headerElement.prepend(logo);
logo.style.cssText = `text-decoration: none; font-size: 30px; color: cadetblue;`;

let nav = document.createElement(`nav`);
logo.after(nav);
let ul = document.createElement(`ul`)
nav.prepend(ul);
for (let i = 1; i <= 4; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', header.nav[i].url);
    a.innerHTML = header.nav[i].text;
    li.appendChild(a);
    ul.appendChild(li);
    a.style.cssText = `text-decoration: none; color: navy;`;
  };
nav.style.cssText = `max-width: 500px; width: 100%;`;
ul.style.cssText = `width: 100%; display: flex; justify-content: space-between; padding: 0 10px; list-style-type: none;`;


let btn1 = document.createElement(`button`);
btn1.textContent = header.btn[0];
let btn2 = document.createElement(`button`);
btn2.textContent = header.btn[1];
nav.after(btn1);
btn1.after(btn2);
btn1.style.cssText = `width: 60px; height: 30px; background: darkcyan; color: cornsilk;`;
btn2.style.cssText = `width: 60px; height: 30px; background: darkcyan; color: cornsilk;`;
