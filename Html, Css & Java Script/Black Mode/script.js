let mode = document.querySelector('#Dark-mode')
let curMode = "light"

mode.addEventListener('click',() => {
    if (curMode === "light"){
        curMode = 'dark';
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('body').style.color = 'white'
    } else {
        curMode = 'light'
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black'
    }
    console.log(curMode);
})