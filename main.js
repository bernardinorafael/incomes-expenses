let family = {
  incomes: [2500, 3200, 250, 360.45],
  expenses: [320.32, 128.45, 176.87, 1200]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}
function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  const total = calculateIncomes - calculateExpenses
  const positiveResult = total >= 0
  let balanceText = 'NEGATIVO'
  
  if (positiveResult) {
    balanceText = 'POSITIVO'
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}
calculateBalance()
