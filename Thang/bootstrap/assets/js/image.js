const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Automation";
    }, 0);
    setTimeout(() => {
        text.textContent = "Designer Workflows";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Connect apps";
    }, 8000); //2s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);