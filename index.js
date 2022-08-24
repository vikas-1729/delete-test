var button = document.getElementById('btn');
var text = document.getElementById('text');
button.addEventListener('click',function increase(){
    text.innerText = Number(text.innerText)+1;
    
});