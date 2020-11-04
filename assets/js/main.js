const $submit = document.getElementById('submit')
const $form = document.querySelector('.form1')

const $loaderFragment = `<div class="lds-roller loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
console.log($form);

$submit.addEventListener('click',(e)=>{

    
    //previene al accion por defecto en este caso refrescar la pagina
    e.preventDefault()

    $form.insertAdjacentHTML('afterbegin',$loaderFragment)
    $form.classList.add('sending')
    //desabilita el boton/input
    $submit.setAttribute('disabled','true')

})


/*---------------------- formulario 1 ---------------------*/


const $nombre1 = document.getElementById('name1')
const $tel1 = document.getElementById('tel1')
const $submit1 = document.getElementById('submit1')
//por defecto boton desabilitado 
$submit1.setAttribute('disabled','true')
 
$nombre1.addEventListener('keyup',(e)=>{
    
     //expresion regular \d indica todo lo que   es numeros
     
    $nombre1.value=$nombre1.value.replace(/\d/,'')

     $nombre1.value&&$tel1.value&&$submit1.removeAttribute('disabled')
     !$nombre1.vale||!$tel1.value &&  $submit1.setAttribute('disabled','true')
})

$tel1.addEventListener('keyup',(e)=>{
     //expresion regular \D indica todo lo que no es numeros
    $tel1.value=$tel1.value.replace(/\D/,'')

     
     $nombre1.value&&$tel1.value&&$submit1.removeAttribute('disabled')
     !$nombre1.value||!$tel1.value &&  $submit1.setAttribute('disabled','true')
})