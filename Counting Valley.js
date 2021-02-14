/** An avid hiker keeps meticulous records of their hikes. During the last hike that 
took exactly  'steps' steps, for every step it was noted if it was an uphill,U, or a downhill,D 
step. Hikes always start and end at sea level, and each step up or down represents a  
unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up 
from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down 
from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let elevation = 0;
    let valley = 0;
    for (let i = 0; i < path.length; i++) {
       if (path[i] === 'U') {
        elevation++;
           if (elevation === 0) {
               valley++;
           }
       } else if(path[i] === 'D') {
           elevation--;
       }
   }
   return valley;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
