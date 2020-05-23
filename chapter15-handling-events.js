let firstHeader = document.getElementById("1")

firstHeader.addEventListener("mousedown", e => {
  if (e.button == 0) {
    console.log("Left button")
  } else if (e.button == 1) {
    console.log("Middle button")
  } else if (e.button == 2) {
    console.log("Right button")
  }
})

// adding events to the window object

window.addEventListener("keydown", e => {  //when a key is pressed, that's the keydown event
    
    if (e.key === "v") document.body.style.background = "violet"
    
})

window.addEventListener("keyup", e => { //when a key is released, that's the keyup event
    
    if (e.key === "v") document.body.style.background = ""

})


// mouse dragging events


let lastX // Tracks the last observed mouse X position
let bar = document.getElementsByTagName("div")[1]

bar.addEventListener("mousedown", event => {

    if (event.button === 0) {
        lastX = event.clientX
        window.addEventListener("mousemove", moved)
        event.preventDefault() // Prevent selection
    }

})

function moved(event) {
    if (event.buttons == 0) {
        window.removeEventListener("mousemove", moved)
    } else {
        let dist = event.clientX - lastX;
        let newWidth = Math.max(10, bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX = event.clientX;
    }
}


// scroll events -- horizontal progress bar example 

function scrollThisBitch() {
    
    document.body.appendChild(document.createTextNode("supercalifragilisticexpialidocious ".repeat(1000))) //

    let newBar = document.querySelector("#progress")
      
    window.addEventListener("scroll", () => {
        let max = document.body.scrollHeight - innerHeight
        newBar.style.width = `${(pageYOffset / max) * 100}%`
    })

}

// more research on scrolling implies looking at scrollHeight properties, innerHeight 


// focus events

let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");

for (let field of Array.from(fields)) {
    field.addEventListener("focus", event => {
        let text = event.target.getAttribute("data-help")
        help.textContent = text
    })
    field.addEventListener("blur", event => {
        help.textContent = ""
    })
}


// load / unload

/* 

When a page finishes loading, the "load" event fires on the window and the document body objects. 
This is often used to schedule initialization actions that require the whole document to have been built. 
Remember that the content of <script> tags is run immediately when the tag is encountered. 
This may be too soon, for example when the script needs to do something with parts of the document that appear after the <script> tag.

Elements such as images and script tags that load an external file also have a "load" event that indicates the files they reference were loaded. 
Like the focus-related events, loading events do not propagate.

When a page is closed or navigated away from (for example, by following a link), a "beforeunload" event fires. 
The main use of this event is to prevent the user from accidentally losing work by closing a document. 
If you prevent the default behavior on this event and set the returnValue property on the event object to a string, 
the browser will show the user a dialog asking if they really want to leave the page. 
That dialog might include your string, but because some malicious sites try to use these dialogs to 
confuse people into staying on their page to look at dodgy weight loss ads, 
most browsers no longer display them.

*/

