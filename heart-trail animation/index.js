const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanE1 = document.createElement("span");
    spanE1.style.left = XPos + "px";
    spanE1.style.top = Ypos + "px";
    const size =math.random();
    spanE1.style.width = size + "px";
    spanE1.style.height =size + "px";
    bodyE1.appendChild(spanE1);
setTimeout(()=>{
    spanE1.remove();
}, 3000);
});