const main = document.body.children[1];
main.style = "font-weight: bold";

const time = main.children[0];
time.dateTime = new Date().toLocaleTimeString();
time.innerText = time.dateTime;

const list = main.children[1];
const listText = [
    `Screen: ${window.screen.width} * ${window.screen.height}`,
    `Window Outer: ${window.outerWidth} * ${window.outerHeight}`,
    `Window Inner: ${window.innerWidth} * ${window.innerHeight}`,
    `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`
]
for(let i = 0; i < listText.length; i++){
    const temp = document.createElement("li");
    temp.innerText = listText[i];
    list.appendChild(temp);
}