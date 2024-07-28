function calculatorBMI() { // ИМТ
  const width = parseFloat(document.querySelector('#wight').value);
  const height = parseFloat(document.querySelector('#height').value) / 100; // Переводим см в метры

  const bmi = width / (height * height);
  const result = document.querySelector('#result');
  const description = document.querySelector('#description');

  if (!isNaN(bmi)) {
    result.innerHTML = "Ваш ИМТ " + bmi.toFixed(2);

    if (bmi > 0 && bmi < 18.5) {
      description.innerHTML = "Недостаточный вес";
    } else if (bmi >= 18.5 && bmi < 25) {
      description.innerHTML = "Нормальый вес"
    } else if (bmi >= 25 && bmi < 30) {
      description.innerHTML = "Избыточный вес"
    } else if (bmi >= 30 && bmi < 35) {
      description.innerHTML = "Ожирение I степени"
    } else if (bmi >= 35 && bmi < 40) {
      description.innerHTML = "Ожирение II степени"
    } else if (bmi >= 40) {
      description.innerHTML = "Ожирение III степени"
    }
  } else {
    result.innerHTML = "Please enter valid values.";
  }
}