//получаем поля для ввода
let inputRub = document.querySelector(".rub");
let inputUsd = document.querySelector(".usd");

//проверка получения данных из поля
console.log(inputRub.value);

inputRub.addEventListener("input", () => {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText);
      inputUsd.value = inputRub.value / data.data.USDRUB;
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  };
  xmlhttp.open("GET", "currency-cash.json", true);

  xmlhttp.send();
});

// получение курса онлайн
// https://currate.ru/api/?get=rates&pairs=USDRUB&key=340601d646a9a3be1a8dcd6278c7fc7c
//https://www.w3schools.com/js/js_json_parse.asp
