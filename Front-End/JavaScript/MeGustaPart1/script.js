var me_gusta = 3;

function like() {
    me_gusta++;
    var cantidad = document.querySelector(".cantidad"); //<b class="cantidad" >3</b>
    cantidad.innerText = me_gusta;
}

