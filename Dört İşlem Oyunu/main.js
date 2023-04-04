//Bildirimler yapılıyor.
var Number1,
  Number2,
  Operator,
  result,
  answer,
  True = 0,
  False = 0;
//Html nesnelerine ulaşma.
Number1 = document.getElementById("Number1");
Number2 = document.getElementById("Number2");
Operator = document.getElementById("Operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
True = document.getElementById("True");
False = document.getElementById("False");
//rastgele sayı üretme fonksiyonu.
function RandomNumber(min, max) {
  var number =Math.floor(Math.random() * (max - min)) + min;
  return number;
}
//Oyun Başlangıcında Veya Soru Tahmini Sonrası Yeni Soru Oluşturma Fonksiyonu.
function newQuestion() {
  var operation = ["+", "-", "*", "/"];
  Operator.textContent = operation[RandomNumber(0, 4)]; //operator seçimi.
  Number1.textContent = RandomNumber(0, 50);
  Number2.textContent = RandomNumber(0, 50);

  //Kalansız Bölme İşlemi Yapacak Koşul
  if (Operator.textContent == "/") {
    while (True) {
      Number2.textContent = RandomNumber(0, 50);
      if (Number1.textContent % Number2.textContent == 0) {
        break;
      }
    }
  }
}

//Sayfa Yüklendiğinde Yeni Soru Soran Fonksiyonu (newQuestion) Çalıştırır.
window.onload = function () {
  newQuestion();
};
// Cevapla Butonuna Basıldığında Değerlendirme İşlemi Yapma.
answer.onclick = function () {
  var ans, n1, n2;
  n1 = Number(Number1.textContent);
  n2 = Number(Number2.textContent);
  switch (Operator.textContent) {
    case "+":
      ans = n1 + n2;
      break;
    case "-":
      ans = n1 - n2;
      break;
    case "*":
      ans = n1 * n2;
      break;
    case "/":
      ans = n1 / n2;
      break;
    default:
      break;
  }
  if (result.value == ans) {
    True.textContent = Number(True.textContent) + 1;
  } else {
    False.textContent = Number(False.textContent) + 1;
  }
  newQuestion();
}
