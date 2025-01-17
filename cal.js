let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      try {

        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error";
        string = "";
      }
    } else if (buttonValue === 'C') {

      string = "";
      document.querySelector('input').value = string;
    } else {
      string += buttonValue;
      document.querySelector('input').value = string;
    }
  });
});
