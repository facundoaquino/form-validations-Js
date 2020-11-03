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