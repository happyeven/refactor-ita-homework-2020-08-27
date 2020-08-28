function printOwing(invoice) {

  let printString = generateTitle()
  let outstanding = calculateOutstanding(invoice);
  invoice.dueDate = generateDueData()
  printString += appendDetails(invoice, outstanding);
  return printString
}
module.exports = {
  printOwing
};

function generateDueData(){
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
function generateTitle() {
  return '***********************\n' +
    '**** Customer Owes ****\n' +
    '***********************\n'
}
function appendDetails(invoice, outstanding) {
  return `name: ${invoice.customer}\namount: ${outstanding}\namount: ${invoice.dueDate.toLocaleDateString()}`
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

