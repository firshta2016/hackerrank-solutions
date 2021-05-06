'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  let begCount = 0;
  let revCount = 0;
  
  if (n === p) {
      return 0
  }
  
  else if (p <= Math.floor(n / 2)) {
      //start from beg
      for (let i = 1; i < n; i += 2) {
          if (p > i) {
              begCount += 1;
          }
      }
      return begCount;
  } else if (p > Math.floor(n / 2)) {
      if (n %2 != 0) {
          n -= 1;
      }
      for (let j = n; j >= 0; j -= 2) {
          if (p < j) {
              revCount += 1
          }
      }
      return revCount;
  }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
