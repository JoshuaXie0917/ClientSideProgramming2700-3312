//A timer is used to store the return value of `setTimeout`.
//Purpose: To empty the shopping cart if the user remains inactive for a period of time.
let timer;

// Prices (fixed, easy)
const PRICE_MILK = 3.50;
const PRICE_BREAD = 2.25;
const PRICE_EGGS = 4.10;
const PRICE_RICE = 6.00;
const PRICE_APPLES = 2.80;
const PRICE_CHICKEN = 9.50;

/**
* startTimer()
* Purpose: Resets the countdown for "auto-clear when no activity occurs"
* Why clearTimeout: To prevent multiple timers from being generated when the user is actively interacting, causing repeated triggering of resetCart()
* Join point: It is called by calculateTotal(), printReceipt(), and resetCart(), indicating "user activity"
*/
function startTimer() {
  clearTimeout(timer);
// 15 second
  timer = setTimeout(function () {
    resetCart("Cart reset due to inactivity.");
  }, 15000);
}

/**
 * readQty(id)
 * purpose: Read the quantity from the input box and perform "input cleaning/validation".
 * The id is the input's id.
 * Returns: Final valid number 
 */
function readQty(id) {
  let v = Number(document.getElementById(id).value);
  if (!document.getElementById(id).value) v = 0;
  if (isNaN(v) || v < 0) v = 0;

  document.getElementById(id).value = v;
  return v;
}

/**
 * setTotal(amount)
 * purpose: Update the total amount displayed on the page.
 * The amount is the total cost.
 * Return: Round to two decimal places and display with a dollar sign.
 */
function setTotal(amount) {
  document.getElementById("total").textContent = "$" + amount.toFixed(2);
}

/**
 * calculateTotal()
 * Function: Read the quantity of all products -> Calculate the total price -> Update the page display.
 */
function calculateTotal() {
  // Refresh the no-action timer when there is user interaction.
  startTimer();
  // Read the quantity of each product, with input validation.
  // EX: <input type="number" id="milk" value="0" min="0" oninput="startTimer()" />
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");

  // Calculate the total price: Quantity per item * Unit price, then add them together
  let total =
    milk * PRICE_MILK +
    bread * PRICE_BREAD +
    eggs * PRICE_EGGS +
    rice * PRICE_RICE +
    apples * PRICE_APPLES +
    chicken * PRICE_CHICKEN;
  // Display the total price on the page.
  setTotal(total);

  // If the sum of all quantities is 0, the shopping cart is empty.
  // // Connection point: The HTML must contain an element with id="receipt" to display text/receipt.
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    document.getElementById("receipt").textContent = "Cart is empty.";
  } else {
    document.getElementById("receipt").textContent = "Total calculated. Click Print Receipt.";
  }
}

/**
 * formatDateTime(d)
 * Purpose: Format a Date object into a string in the format "YYYY-MM-DD HH:MM AM/PM".
 * The input d is a Date object.
 * Returns: A formatted date-time string.
 */
function formatDateTime(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0"); // // Months start from 0, so +1.
  const dd = String(d.getDate()).padStart(2, "0");

  // Convert to 12-hour format and determine AM/PM.
  let h = d.getHours();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;

  const hh = String(h).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd} ${hh}:${min} ${ampm}`;
}

/**
 * printReceipt()
 * Purpose: Generate a receipt based on the current shopping cart contents and display it on the page.
 * Function: Generates a "text receipt" displaying the subtotal of each item, the total price, and the time for each line.
 * Connection point: The HTML must contain an element with id="receipt" to display the receipt text.
 * 
 */
function printReceipt() {
  // Refresh the no-action timer when there is user interaction.
  startTimer();
  // Read the quantity again (to prevent users from changing their input without recalculating).
  let milk = readQty("milk");
  let bread = readQty("bread");
  let eggs = readQty("eggs");
  let rice = readQty("rice");
  let apples = readQty("apples");
  let chicken = readQty("chicken");
  // If all values ​​are 0, immediately display an empty shopping cart and stop.
  if (milk + bread + eggs + rice + apples + chicken === 0) {
    setTotal(0);
    document.getElementById("receipt").textContent = "Cart is empty.";
    return;
  }
  // Calculate the subtotal for each row. number of items * price per item.
  // EX: Milk x2 = $7.00
  let milkLine = milk * PRICE_MILK;
  let breadLine = bread * PRICE_BREAD;
  let eggsLine = eggs * PRICE_EGGS;
  let riceLine = rice * PRICE_RICE;
  let applesLine = apples * PRICE_APPLES;
  let chickenLine = chicken * PRICE_CHICKEN;
  // Total price = sum of all subtotals
  let total = milkLine + breadLine + eggsLine + riceLine + applesLine + chickenLine;
  // Update the total price display on the page
  setTotal(total);
  // Generate the current time (required for receipts)
  const now = new Date();
  const when = formatDateTime(now);
  // text is used to concatenate the complete receipt content
  // \n Use line breaks to facilitate displaying multiple lines of text on the page
  let text = "";
  text += "Green Basket Grocery\n";
  text += "Date/Time: " + when + "\n";
  text += "-----------------------------\n";
  // Only print items with a quantity > 0
  if (milk > 0) text += "Milk x" + milk + " = $" + milkLine.toFixed(2) + "\n";
  if (bread > 0) text += "Bread x" + bread + " = $" + breadLine.toFixed(2) + "\n";
  if (eggs > 0) text += "Eggs x" + eggs + " = $" + eggsLine.toFixed(2) + "\n";
  if (rice > 0) text += "Rice x" + rice + " = $" + riceLine.toFixed(2) + "\n";
  if (apples > 0) text += "Apples x" + apples + " = $" + applesLine.toFixed(2) + "\n";
  if (chicken > 0) text += "Chicken x" + chicken + " = $" + chickenLine.toFixed(2) + "\n";

  text += "-----------------------------\n";
  text += "FINAL TOTAL: $" + total.toFixed(2) + "\n";
  text += "Thank you for shopping!\n";
  // Display the receipt string on the page
  // Note: Using textContent can prevent HTML injection; displaying plain text is safer.
  document.getElementById("receipt").textContent = text;
}

/**
 * resetCart(message)
 * Purpose: Clear the shopping cart and reset the page display. This function is called when the user is inactive for too long.
 * Function: Resets all input quantities to 0, updates the total price to $0.00, and displays a message on the page.
 * Connection point: <span class="small-note">Tip: do nothing for 15 seconds to see the inactivity reset message.</span>.
 * Connection point: The HTML input ID must correspond to these product names.
 */
function resetCart(message) {
  document.getElementById("milk").value = 0;
  document.getElementById("bread").value = 0;
  document.getElementById("eggs").value = 0;
  document.getElementById("rice").value = 0;
  document.getElementById("apples").value = 0;
  document.getElementById("chicken").value = 0;
  // Clear total price display
  setTotal(0);
  // Display the reason for the reset in the receipt area.
  document.getElementById("receipt").textContent = message;
  // restart timer.
  startTimer();
}
