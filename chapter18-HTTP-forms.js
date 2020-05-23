// 
console.log(encodeURIComponent("???"))

console.log(document.activeElement) //activeElement property returns by defaul the <body> HTML elem

// focus() and blur() work on forms as well. 

/* 

Browsers traditionally also allow the user to move the focus through the document by pressing the tab key. 
We can influence the order in which elements receive focus with the tabindex attribute. 
The following example document will let the focus jump from the text input to the OK button, rather than going through the help link first.

*/ 
// By default, most types of HTML elements cannot be focused. 
// But you can add a tabindex attribute to any element that will make it focusable. 
// A tabindex of -1 makes tabbing skip over an element, even if it is normally focusable.


let buttons = document.querySelectorAll("[name=color]");
  for (let button of Array.from(buttons)) {
    button.addEventListener("change", () => {
      document.body.style.background = button.value;
    });
}

let select = document.querySelector("select");
  let output = document.querySelector("#output");
  select.addEventListener("change", () => {
    let number = 0;
    for (let option of Array.from(select.options)) {
      if (option.selected) {
        number += Number(option.value);
      }
    }
    output.textContent = number;
  });



