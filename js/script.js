let totalNumber = 0;

function card1() {
  setCardValue("K.Accessories");
  const cardPrice = getCardValue("card1-price");
  setTotalPrice(cardPrice);
}

function card2() {
  setCardValue("K.Accessories");
  const cardPrice2 = getCardValue("card2-price");
  setTotalPrice(cardPrice2);
}
function card3() {
  setCardValue("Home Cooker");
  const cardPrice3 = getCardValue("card3-price");
  setTotalPrice(cardPrice3);
}

function card4() {
  setCardValue("Sport Black Cap");
  const cardPrice4 = getCardValue("card4-price");
  setTotalPrice(cardPrice4);
}
function card5() {
  setCardValue("Full Jersey Set");
  const cardPrice5 = getCardValue("card5-price");
  setTotalPrice(cardPrice5);
}
function card6() {
  setCardValue("Sport Cates");
  const cardPrice6 = getCardValue("card6-price");
  setTotalPrice(cardPrice6);
}
function card7() {
  setCardValue("Single relax chair");
  const cardPrice7 = getCardValue("card7-price");
  setTotalPrice(cardPrice7);
}
function card8() {
  setCardValue("Children play");
  const cardPrice8 = getCardValue("card8-price");
  setTotalPrice(cardPrice8);
}
function card9() {
  setCardValue("Flexible Sofa");
  const cardPrice9 = getCardValue("card9-price");
  setTotalPrice(cardPrice9);
}
function getCardValue(cardId) {
  const card = document.getElementById(cardId);
  const cardValue = card.innerText;
  const cardValueN = parseFloat(cardValue);
  return cardValueN;
}

function setCardValue(valueField) {
  const valueF = document.getElementById("display-name");
  const p = document.createElement("p");
  p.innerHTML = `${valueField}`;
  valueF.appendChild(p);
}
function setTotalPrice(total) {
  const totalPrice = document.getElementById("total-price");
  const totalPriceS = totalPrice.innerText
  const totalPriceN = parseFloat(totalPriceS)
  const couponBtn = document.getElementById('coupon-btn')
  if (totalPriceN ) {
    const sum = totalPriceN + total;
    if(sum >= 200 ){
      couponBtn.removeAttribute('disabled')
    }
    totalNumber = sum
   return totalPrice.innerText = sum;
  }
  totalPrice.innerText = total;
}

document.getElementById('coupon-btn').addEventListener('click', function(){
  const couponInput = document.getElementById('coupon-input')
  const couponInputValue = couponInput.value;
  couponInput.value = ''
  const discount = document.getElementById('discount')
  const total2 = document.getElementById('total')
     if(couponInputValue === 'SELL200'){
      const result = totalNumber * .20
      const result2 = result.toFixed(2)
      discount.innerText = result2
      const formula = totalNumber - result2
      total2.innerText = formula
     }
})
document.getElementById('close').addEventListener('click', function(){
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = ''
  const discount = document.getElementById('discount')
  discount.innerText = ''
  const total2 = document.getElementById('total')
  total2.innerText = ''

})

