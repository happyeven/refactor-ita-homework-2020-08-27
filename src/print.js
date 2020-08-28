function printOwing(invoice) {

  let printString = generateTitle()

  // calculate outstanding
  let outstanding = calculateOutstanding(invoice);

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  printString += appendDetails(invoice, outstanding);
  return printString
}
module.exports = {
  printOwing
};

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

