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
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
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
