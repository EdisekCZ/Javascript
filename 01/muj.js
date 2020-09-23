/* alert("Toto pochází z externího souboru"); */
// var nadpis - starší deklarace proměnné v 35
// proměná v nových verzích JS 
let nadpis = document.getElementById('nadpis');
let footer = document.querySelector('footer');
let img = document.querySelector('img');

img.addEventListener('mouseout', function(){
    img.src = 'image.jpg';    
})

img.addEventListener('mouseover', function(){
    img.src = 'nojo.img';    
})
nadpis.addEventListener('click', function(){
    nadpis.innerHTML = 'Ahoj <i>Karle</i>!';
    nadpis.style.color = 'blue';
    nadpis.style.fontFamily = 'serif';
    nadpis.classList.add('text-right');
    nadpis.classList.add('text-info');
    nadpis.classList.remove('text-uppercase');
});

footer.addEventListener('mouseover', function(){
    console.log('Footer reaguje - myš je uvnitř');
    footer.classList.add('jumbotron');
    footer.classList.add('bg-primary');
    nadpis.innerHTML = 'Myš je v zápatí';
});

footer.addEventListener('mouseout', function(){
    console.log('Footer reaguje - myš je fuč');
    footer.classList.add('jumbotron');
    footer.classList.add('bg-primary');
    nadpis.innerHTML = 'Myš není v zápatí';
});