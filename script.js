
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
  // titleElem.innerHTML = "Сумма в " + currencyName
  const USDRUB = CURRENCY.USDRUB
  convertInput.value = 1
  if (currencyName === 'USD') {
    titleElem.innerHTML = "Сумма в долларах"
    rubInput.value = USDRUB
    convertInput.oninput = function() {
      rubInput.value = this.value * USDRUB
    }
    rubInput.oninput = function() {
      convertInput.value = this.value / USDRUB
    }
  }
  if (currencyName === 'EUR') {
    titleElem.innerHTML = "Сумма в евро"
    const USDEUR = CURRENCY.USDEUR
    const EURRUB = USDRUB / USDEUR
    rubInput.value = EURRUB
    convertInput.oninput = function() {
      rubInput.value = this.value * EURRUB
    }
    rubInput.oninput = function() {
      convertInput.value = this.value / EURRUB
    }
  }
  if (currencyName === 'GBP') {
    titleElem.innerHTML = "Сумма в фунтах стерлингов"
    const USDGBP = CURRENCY.USDGBP
    const GBPRUB = USDRUB / USDGBP
    rubInput.value = GBPRUB
    convertInput.oninput = function() {
      rubInput.value = this.value * GBPRUB
    }
    rubInput.oninput = function() {
      convertInput.value = this.value / GBPRUB
    }
  }
  if (currencyName === 'KRW') {
    titleElem.innerHTML = "Сумма в южнокорейских вонах"
    rubInput.value = 1
    const USDKRW = CURRENCY.USDKRW
    const KRWRUB = USDKRW / USDRUB
    convertInput.value = KRWRUB
    rubInput.oninput = function() {
      convertInput.value = this.value * KRWRUB
    }
    convertInput.oninput = function() {
      rubInput.value = this.value / KRWRUB
    }
  }
  if (currencyName === 'UAH') {
    titleElem.innerHTML = "Сумма в гривнах"
    const USDUAH = CURRENCY.USDUAH
    const UAHRUB = USDRUB / USDUAH
    rubInput.value = UAHRUB
    convertInput.oninput = function() {
      rubInput.value = this.value * UAHRUB
    }
    rubInput.oninput = function() {
      convertInput.value = this.value / UAHRUB
    }
  }
  if (currencyName === 'AUD') {
    titleElem.innerHTML = "Сумма в австралийских долларах"
    const USDAUD = CURRENCY.USDAUD
    const AUDRUB = USDRUB / USDAUD
    rubInput.value = AUDRUB
    convertInput.oninput = function() {
      rubInput.value = this.value * AUDRUB
    }
    rubInput.oninput = function() {
      convertInput.value = this.value / AUDRUB
    }
  }
  if (currencyName === 'JPY') {
    titleElem.innerHTML = "Сумма в японских иенах"
    rubInput.value = 1
    const USDJPY = CURRENCY.USDJPY
    const JPYRUB = USDJPY / USDRUB
    convertInput.value = JPYRUB
    rubInput.oninput = function() {
      convertInput.value = this.value * JPYRUB
    }
    convertInput.oninput = function() {
      rubInput.value = this.value / JPYRUB
    }
  }
  if (currencyName === 'INR') {
    titleElem.innerHTML = "Сумма в рупиях"
    rubInput.value = 1
    const USDINR = CURRENCY.USDINR
    const INRRUB = USDINR / USDRUB
    convertInput.value = INRRUB
    rubInput.oninput = function() {
      convertInput.value = this.value * INRRUB
    }
    convertInput.oninput = function() {
      rubInput.value = this.value / INRRUB
    }
  }
}
