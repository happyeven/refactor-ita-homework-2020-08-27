function printOwing(invoice) {

  let printString = generateTitle()
  invoice = addDataToInvoice(invoice)
  printString += appendDetails(invoice);
  return printString
}
module.exports = {
  printOwing
};
function addDataToInvoice(invoice){
  invoice.outstanding = calculateOutstanding(invoice);
  invoice.dueDate = generateDueData()
  return invoice
}
function generateDueData(){
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
function generateTitle() {
  return '***********************\n' +
    '**** Customer Owes ****\n' +
    '***********************\n'
}
function appendDetails(invoice) {
  return `name: ${invoice.customer}\namount: ${invoice.outstanding}\namount: ${invoice.dueDate.toLocaleDateString()}`
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

