const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const updatedPrices = prices.map((name) => {
  return name / 0.5
})
console.log(updatedPrices)

coffees.forEach((coffee, index) => {
  updatedPrices.forEach((price, index) => {})
})

alert(`Кофе ${coffees[0]} сейчас стоит ${updatedPrices[0]} евро”.`)

alert(`Кофе ${coffees[1]} сейчас стоит ${updatedPrices[1]} евро”.`)

alert(`Кофе ${coffees[2]} сейчас стоит ${updatedPrices[2]} евро”.`)
