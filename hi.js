var d= new Date();
var h= d.getHours();
var m=d.getMinutes();
var y=d.getFullYear();

if(h<12){
    document.getElementById('h1').innerHTML='Hi..Good Morning';
}
else if(h<19){
    document.getElementById('h1').innerHTML='Hi..Good Afternoon';
}
else{
    document.getElementById('h1').innerHTML='Hi..Good Night';
}
document.getElementById('h').innerHTML=h;
document.getElementById('m').innerHTML=m;
document.getElementById('y').innerHTML=y;

