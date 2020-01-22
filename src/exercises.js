function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a[0] == b[0] || a[a.length-1] == b[b.length-1]) {
    return true;
  }
  else {
    return false;
  }
}

function endsMeet(values, n) {
  var show = [];
  if (values == undefined || values.length < n || n <= 0 ) {
    return show;
  }
  else {
    for (let i = 0; i < n; i++) {
      show[show.length] = values[i];
    }
    for (let i = 0; i < n; i++) {
      show[show.length] = values[values.length - n + i];
    }
    return show;
  }
}

function difference(numbers) {
  var min = Number(Math.min.apply(Math, numbers));
  var max = Number(Math.max.apply(Math, numbers));

  if (numbers == undefined || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
    diff = max - min;
    return diff;
  }
}

function max(number) {
  var array = [];
  if (number == undefined || number.some(isNaN)) {
    return undefined;
  }
  else if (number.length >= 3 && number.length % 2 == 1) {
    var first = number[0];
    var middle = number[Math.round((number.length - 1) / 2)];
    var end = number[number.length - 1];

    array.push(first, middle, end);
    var max = Number(Math.max.apply(Math, array));
    return max;
  }
  else {
    return undefined;
  }
}

function middle(values) {
  var array = [];
  if (values == undefined || values.length < 3 || values.length % 2 == 0) {
    return array;
  } else {
    var middle1 = values[Math.round((values.length - 1) / 2 - 1)];
    var middle2 = values[Math.round((values.length - 1) / 2)];
    var middle3 = values[Math.round((values.length - 1) / 2 + 1)];

    array.push(middle1, middle2, middle3);
    return array;
  }
}

function increasing(numbers) {
  if (numbers == undefined || numbers.length < 3 || numbers.some(isNaN)) {
    return false;
  } else {
    for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      var num1 = numbers[i + 1];
      var num2 = numbers[i + 2];
      if (numbers[i] == numbers[i + 1] - 1 && numbers[i] == numbers[i + 2] - 2) {
        return true;
      }
    }
    if (num < num1 < num2) {
      return true;
    }
    else {
      return false;
    }
  }
}

function everywhere(values, x) {
  if (!values || values.length < 1 || !x) {
    return false;
  }
  else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== x) {
        if (values[i - 1] == x || values [i + 1] == x) {

        }
        else {
          return false;
        }
      }
    }
    return true;
  }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3 || numbers.some(isNaN)) {
    return false;
  }
  else {
    for (let i = 0; i < numbers.length - 2; i++) {
      var num = numbers[i];
      var num1 = numbers[i + 1];
      var num2 = numbers[i + 2];

      if (num == num1 && num == num2) {
        return true;
      }
      if (num == num1 - 2 && num == num2 - 4) {
        return true;
      }
    }
    if (num % 2 == 0 && num1 % 2 == 0 && num2 % 2 == 0) {
      return true;
    }
    if (num % 2 == 1 && num1 % 2 == 1 && num2 % 2 == 1) {
      return true;
    }
    else {
      return false;
    }
  } return true;
}

function balance(numbers) {
  var right = 0;
  var left = 0;

  if (!numbers || numbers.length < 2 || numbers.some(isNaN)) {
    return false;
  }
  else {
    for (let i = 0; i < numbers.length; i++) {
      left += numbers[i];
    }
    num = left / 2;
    if (left % 2 == 1) {
      return false;
    }
    for (let i = 0; i < numbers.length; i++) {
      right += numbers[i];
      if (right == num) {
        return true;
      }
    } return false;
  }

  console.log("test");
}

function clumps(values) {
  var count = 0;
  if (!values) {
    return -1;
  }
  else {
    for (let i = 0; i < values.length; i++) {
      var same = values[i];
      if (same == values[i + 1]) {
        count++;
        if (same == values[i + 2]) {
          count--;
        } // that's it?
      }
    } return count;
  }
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
