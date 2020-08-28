function printOwing(invoice) {
  let outstanding = 0;
  let printString = '***********************\n**** Customer Owes ****\n***********************\n';

  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  printString +=`name: ${invoice.customer}\n`;
  printString +=`amount: ${outstanding}\n`;
  printString +=`amount: ${invoice.dueDate.toLocaleDateString()}`;
  return printString
}
module.exports = {
  printOwing
};
