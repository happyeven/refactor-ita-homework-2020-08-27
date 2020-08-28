function printOwing(invoice) {
  invoice = addDataToInvoice(invoice)
  return generateResult(invoice)
}
module.exports = {
  printOwing
};
function addDataToInvoice(invoice) {
  invoice.outstanding = calculateOutstanding(invoice);
  invoice.dueDate = generateDueData()
  return invoice
}
function generateDueData() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
function generateTitle() {
  return '***********************\n' +
    '**** Customer Owes ****\n' +
    '***********************\n'
}
function generateResult(invoice) {
  let printString = generateTitle()
  printString += `name: ${invoice.customer}\namount: ${invoice.outstanding}\namount: ${invoice.dueDate.toLocaleDateString()}`
  return printString
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

