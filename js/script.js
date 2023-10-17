
const form = document.querySelector('.bmi-form');
let formWeight = document.querySelector('.bmi-form__weight');
let formHeight = document.querySelector('.bmi-form__height');
let btn = document.querySelector('.bmi-form__btn');
let result = document.querySelector('.bmi__result');


form.addEventListener('submit', function (e) {
	e.preventDefault(); //! предотвращает отправку формы по умолчанию

	let userWeight = formWeight.value;
	let userHeight = formHeight.value;

	if (userHeight === '' || userWeight === '') {
		let error = 'Enter the values';
		result.innerHTML = error;
	} else {
		let bmi = parseFloat((userWeight / ((userHeight / 100) ** 2)).toFixed(1));

		if (bmi < 16) {
			result.innerHTML = `Your BMI is <span class="dark-blue">${bmi}</span> - you have <span class="dark-blue">Severe Thinness</span>`;
		} else if (bmi >= 16 && bmi < 17) {
			result.innerHTML = `Your BMI is <span class="blue">${bmi}</span> - you have <span class="blue">Moderate Thinness</span>`;
		} else if (bmi >= 17 && bmi < 18.5) {
			result.innerHTML = `Your BMI is <span class="light-blue">${bmi}</span> - you have <span class="light-blue">Mild Thinness</span>`;
		} else if (bmi >= 18.5 && bmi < 25) {
			result.innerHTML = `Your BMI is <span class="green">${bmi}</span> - you have <span class="green">Normal Weight</span>`;
		} else if (bmi >= 25 && bmi < 30) {
			result.innerHTML = `Your BMI is <span class="yellow">${bmi}</span> - you have <span class="yellow">Overweight</span>`;
		} else if (bmi >= 30 && bmi < 35) {
			result.innerHTML = `Your BMI is <span class="orange">${bmi}</span> - you have <span class="orange">Obese Class I</span>`;
		} else if (bmi >= 35 && bmi < 40) {
			result.innerHTML = `Your BMI is <span class="light-red">${bmi}</span> - you have <span class="light-red">Obese Class II</span>`;
		} else if (bmi >= 40) {
			result.innerHTML = `Your BMI is <span class="red">${bmi}</span> - you have <span class="red">Obese Class III</span>`;
		}
	}
})


// ищем нашу коробку с модалками и кнопки открытия модалки
const modalBox = document.querySelector('.modal-box');
const allModalOpenBtn = document.querySelectorAll('.bmi-form__btn');

allModalOpenBtn.forEach((openBtn) => {
	// проходим циклом все кноки и вешаем события на одну кнопку
	openBtn.addEventListener('click', () => {
		// находим название нашей модалки по id исходя из data-modal
		const id = openBtn.getAttribute('data-modal');

		// ищем текущую модалку по id-шнику
		const currentModal = modalBox.querySelector(`#${id}`);

		// ищем кнопочку закрытия модалки
		const closeBtn = currentModal.querySelector('.modal__btn-close');

		// делаем активной коробку с модалками
		modalBox.classList.add('active');
		// делаем активной текущую модалку
		currentModal.classList.add('active');

		// теперь закрываем коробку с модалками и модалку при клике на кнопку закрытия
		closeBtn.addEventListener('click', () => {
			modalBox.classList.remove('active');
			currentModal.classList.remove('active');
		})

		// и теперь делаем закрытия всего при нажатие за пределами модалки 
		modalBox.addEventListener('click', (e) => {
			// проверяем что мы нажали на коробку модалки и тогда все закрываем
			if (e.target.classList.contains('modal-box')) {
				modalBox.classList.remove('active');
				currentModal.classList.remove('active');
			}
		})
	})
})