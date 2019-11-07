
var CURRENCY = null
axios.get('http://apilayer.net/api/live?access_key=9b1c2f459b8b8b22fb7c781dec2fade2')
  .then((response) => {
    console.log(response.data)
    CURRENCY = response.data.quotes
  })
  .catch((error) => {
    console.log(error);
  })


// Объявить переменные html элементов на самом высоком уровне, чтобы они были видны везде
var titleElem
var nameElem
var rubInput
var convertInput

window.addEventListener("DOMContentLoaded", () => {

  // Инициализировать переменные html элементов когда страница загружена
  titleElem = document.querySelector('.title')
  console.log(titleElem)
  nameElem = document.querySelector('.currency')
  console.log(nameElem)
  rubInput = document.querySelector('.rubInput')
  convertInput = document.querySelector('.convertInput')

  var buttonElems = document.getElementsByTagName('button')
  console.log('buttonElems', buttonElems)

  for (let i = 0; i < buttonElems.length; i++) {
    const btnElem = buttonElems[i]
    btnElem.onclick = (e) => {
      const target = e.target
      const btnText = target.innerHTML
      changeCurrency(btnText)
    }
  }
})

function changeCurrency(currencyName) {
  if (!CURRENCY) {
    console.error('CURRENCY not define')
    return
  }
  titleElem.innerHTML = "Сумма в " + currencyName
  const USDRUB = CURRENCY.USDRUB
  rubInput.value = 1
  if (currencyName === 'USD') {
    convertInput.value = USDRUB
    rubInput.oninput = function() {
      convertInput.value = this.value * USDRUB
    }
  }
  if (currencyName === 'EUR') {
    const USDEUR = CURRENCY.USDEUR
    const EURRUB = USDRUB / USDEUR
    convertInput.value = EURRUB
    rubInput.oninput = function() {
      convertInput.value = this.value * EURRUB
    }
  }
}
