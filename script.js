const displayBox=document.querySelector('.display');
const show=document.querySelectorAll(".show-display");
for(let item of show){
    item.addEventListener('click', showDisplay)
}
function showDisplay(event){
    const text=event.target.innerText;
    if(displayBox.innerText == 0){
        displayBox.innerHTML=text;
    }else{
        displayBox.innerHTML += text;
        console.log(text);
    }
}
document.querySelector('.calculate').addEventListener('click',calculator)
function calculator(){
    const val=displayBox.innerText;
    displayBox.innerText=eval(val);
}
document.querySelector('.all-clear').addEventListener('click', clearAll)
function clearAll(){
    displayBox.innerHTML=0;
}
document.querySelector('.clear-last').addEventListener('click', clearOne)
function clearOne(){
    const val=displayBox.innerText;
    if(val.length===1){
        displayBox.innerHTML=0;
    }else{
        displayBox.innerText=val.substring(0,val.length -1);
    }
}