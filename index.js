var button = document.getElementById('btn');
var text = document.getElementById('text');
button.addEventListener('click',function increase(){
    text.innerText = Number(text.innerText)+1;
    
});

var btnDec = document.getElementById('btn-dec');

btnDec.addEventListener('click',function decrease(){
    text.innerText = Number(text.innerText)-1;
})