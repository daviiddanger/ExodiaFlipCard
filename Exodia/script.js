document.addEventListener('DOMContentLoaded',function(){
    var cards = document.querySelectorAll('.card'); //selecciona todas las cartas
    
    cards.forEach(function(card){
        var flipping = false;

        card.addEventListener('click', function(){
            if(!flipping){
                flipping= true;
                card.style.transform = 'rotateY(360deg)'; //Gira la carta
                setTimeout(function(){
                    card.style.transform = 'rotateY(0deg)';
                    flipping = false;
                }, 2000); //Duracion de la animacion en milisegundos
            }
        });
    });
});

