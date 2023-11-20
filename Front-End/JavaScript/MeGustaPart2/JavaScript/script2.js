


function like(CountPlus) {
    // encuentra el elemento del contador especifico
    var Likes = document.getElementById(CountPlus);
    // Obtiene el número actual de "me gusta" y lo incrementa
    let count = parseInt(Likes.textContent);
    count++;
    // Actualiza el contador de "me gusta" en el elemento
    Likes.textContent = count;
}

function dislike(CountPlus) {
    // encuentra el elemento del contador especifico
    var Likes = document.getElementById(CountPlus);
    // Obtiene el número actual de "me gusta" y lo incrementa
    let count = parseInt(Likes.textContent);
    count--;
    // Actualiza el contador de "me gusta" en el elemento
    Likes.textContent = count;
}