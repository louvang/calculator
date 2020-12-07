const displayArea = document.getElementById('display');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const allBtns = document.getElementsByTagName('button');

let currentLine = line1;

const updateDisplay = (e) => {
  if (currentLine.textContent.length >= 25) {
    alert(
      "You're trying to calculate too many numbers. Please clear the calculator and try again."
    );
  }
  let text = currentLine.textContent;
  let input;
  e.type == 'click' ? (input = e.target.id) : (input = e.key);
  switch (input) {
    case 'clear':
      clearDisplay();
      break;
    case 'Backspace':
    case 'backspace':
      if (text.length == 1) {
        currentLine.textContent = '0';
      } else if (
        text.length == 1 &&
        text == '0' &&
        line2.textContent.length > 0
      ) {
        line2.textContent = '';
      } else if (
        line2.textContent.length > 0 &&
        !currentLine.textContent.match(/(\+|\-|\×|\÷)/)
      ) {
        return;
      } else if (text[text.length - 1] == ' ') {
        currentLine.textContent = text.substring(0, text.length - 3);
      } else {
        currentLine.textContent = text.substring(0, text.length - 1);
      }
      break;
    case '.':
    case 'point':
      let op = /(\+|\-|\×|\÷)/;
      let a = /(\d+\.\d+)/;
      let b = / \d+\.+\d+$/;
      if (text[text.length - 1] == ' ') {
        currentLine.textContent += '0.';
      } else if (
        text[text.length - 1] == '.' ||
        (text.match(a) && !text.match(op)) ||
        text.match(b)
      ) {
        return;
      } else {
        currentLine.textContent += '.';
      }
      break;
    case '0':
    case 'zero':
      updateNum('0', text);
      break;
    case '1':
    case 'one':
      updateNum('1', text);
      break;
    case '2':
    case 'two':
      updateNum('2', text);
      break;
    case '3':
    case 'three':
      updateNum('3', text);
      break;
    case '4':
    case 'four':
      updateNum('4', text);
      break;
    case '5':
    case 'five':
      updateNum('5', text);
      break;
    case '6':
    case 'six':
      updateNum('6', text);
      break;
    case '7':
    case 'seven':
      updateNum('7', text);
      break;
    case '8':
    case 'eight':
      updateNum('8', text);
      break;
    case '9':
    case 'nine':
      updateNum('9', text);
      break;
    case '+':
    case 'plus':
      updateOp(' + ', text);
      break;
    case '-':
    case 'minus':
      updateOp(' - ', text);
      break;
    case 'x':
    case '*':
    case '×':
    case 'times':
      updateOp(' × ', text);
      break;
    case '/':
    case '÷':
    case 'divide':
      updateOp(' ÷ ', text);
      break;
    case 'Enter':
    case '=':
    case 'equals':
      line2.textContent = text;
      currentLine.textContent = operate(line2.textContent);
  }
};

const operate = (text) => {
  let ans = text;
  const expRegex = /(\d+\.*\d*) (\+|\-|\×|\÷) (\d+\.*\d*)/;

  while (ans.match(expRegex)) {
    let toSolve = ans.match(expRegex);
    let num1 = parseFloat(toSolve[1]);
    let num2 = parseFloat(toSolve[3]);

    if (toSolve[0].match(/\+/)) {
      ans = ans.replace(toSolve[0], num1 + num2);
    } else if (toSolve[0].match(/\-/)) {
      ans = ans.replace(toSolve[0], num1 - num2);
    } else if (toSolve[0].match(/\×/)) {
      ans = ans.replace(toSolve[0], num1 * num2);
    } else if (toSolve[0].match(/\÷/)) {
      ans = ans.replace(toSolve[0], num1 / num2);
    } else {
      ans.match(opRegex) = null;
    }
  }

  if (ans.length - ans.indexOf('.') > 4) {
    ans = Number.parseFloat(ans).toFixed(4);
  }
  return ans;
};

const clearDisplay = () => {
  line1.textContent = '0';
  line2.textContent = '';
  line3.textContent = '';
  line4.textContent = '';
};

const updateNum = (str, text) => {
  if (text[0] == 0 && text.length == 1) {
    currentLine.textContent = str;
  } else if (
    line2.textContent.length > 0 &&
    !currentLine.textContent.match(/(\+|\-|\×|\÷)/)
  ) {
    clearDisplay();
    line1.textContent = str;
  } else {
    currentLine.textContent += str;
  }
};

const updateOp = (str, text) => {
  if (text[text.length - 1] == ' ' || (text[0] == '0' && text.length == 1)) {
    return;
  } else {
    currentLine.textContent += str;
  }
};

// Event Listeners
for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click', updateDisplay);
}

window.addEventListener('keydown', updateDisplay);

console.log((5.23354798).toFixed(5));
