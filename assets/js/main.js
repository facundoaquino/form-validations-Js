const $submit = document.getElementById('submit');
const $form = document.querySelector('.form1');

const $loaderFragment = `<div class="lds-roller loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
console.log($form);

$submit.addEventListener('click', (e) => {
	//previene al accion por defecto en este caso refrescar la pagina
	e.preventDefault();

	$form.insertAdjacentHTML('afterbegin', $loaderFragment);
	$form.classList.add('sending');
	//desabilita el boton/input
	$submit.setAttribute('disabled', 'true');
});

/*---------------------- formulario 1 ---------------------*/

const $nombre1 = document.getElementById('name1');
const $tel1 = document.getElementById('tel1');
const $submit1 = document.getElementById('submit1');
//por defecto boton desabilitado
$submit1.setAttribute('disabled', 'true');

$nombre1.addEventListener('keyup', (e) => {
	//expresion regular \d indica todo lo que   es numeros

	$nombre1.value = $nombre1.value.replace(/\d/, '');

	$nombre1.value && $tel1.value && $submit1.removeAttribute('disabled');
	!$nombre1.vale || (!$tel1.value && $submit1.setAttribute('disabled', 'true'));
});

$tel1.addEventListener('keyup', (e) => {
	//expresion regular \D indica todo lo que no es numeros
	$tel1.value = $tel1.value.replace(/\D/, '');

	$nombre1.value && $tel1.value && $submit1.removeAttribute('disabled');
	!$nombre1.value || (!$tel1.value && $submit1.setAttribute('disabled', 'true'));
});

/*---------------------- formulario 3 ---------------------*/

const imgPaises = document.getElementById('country');
const $selectPaises = document.getElementById('paises');
console.log('id', $selectPaises.getAttribute('id'));
$selectPaises.addEventListener('change', () => {
	imgPaises.setAttribute('src', `assets/img/${$selectPaises.value}.svg`);
});

/*---------------------- formulario radio button ---------------------*/

const $fede = document.querySelectorAll('[name=fede]');
const $result = document.getElementById('result');

$fede.forEach((item) => {
	item.checked ? console.log(`la opcion seleccionada por defecto es ${item.value}`) : '';
	item.addEventListener('input', (e) => {
		e.target.checked ? ($result.textContent = `RESULTADO: ${e.target.value}`) : '';
	});
});

/*---------------------- text area ---------------------*/
const $caracter = document.getElementById('caracter');

const $textArea = document.getElementById('text');

console.log($caracter.textContent != 100);
$textArea.addEventListener('keydown', (e) => {
	$caracter.textContent = 100 - e.target.value.length;
});

/*---------------------- busqueda ---------------------*/

const $busqueda = document.getElementById('busqueda');
const $busquedali = document.querySelectorAll('.busqueda__id');

$busqueda.addEventListener('input', (e) => {
	$busquedali.forEach((li) => {
		if (!li.textContent.includes(e.target.value)) {
			//la clase none estableca un display none , puesta en styles.css
			li.classList.add('none');
		} else {
			li.classList.remove('none');
		}
	});
});
