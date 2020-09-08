var d= new Date();
var h= d.getDate();
var m=d.getMonth();
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
document.getElementById('h').innerHTML=h+1;
document.getElementById('m').innerHTML=m+1;
document.getElementById('y').innerHTML=y;

