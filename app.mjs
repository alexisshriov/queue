import fs from 'fs'

import Queue from './queue.mjs'
import { ADD, REMOVE_POSITION, REMOVE_USER, MOVE, REVERSE, SWAP, PRINT } from './constants.mjs'

const operations = [ADD, REMOVE_POSITION, REMOVE_USER, MOVE, REVERSE, SWAP, PRINT]
const q = new Queue();

var input = fs.createReadStream('input.rtf');
readLines(input, processLine);

function readLines(input, func) {
    var remaining = '';

    input.on('data', function (data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        while (index > -1) {
            var line = remaining.substring(0, index);
            remaining = remaining.substring(index + 1);
            func(line);
            index = remaining.indexOf('\n');
        }
    });

    input.on('end', function () {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
}

function processLine(data) {
    for (let operation of operations) {
        if (data.includes(operation)) {
            data = data.split(`${operation},`)
            let params = []
            if (data.length > 1) {
                params = data[1].split(',')
            }

            switch (operation) {
                case PRINT: q.print(); break
                case REVERSE: q.reverse(); break
                case ADD: q.add(params[0]); break
                case REMOVE_USER: q.removeByUser(params[0]); break
                case REMOVE_POSITION: q.removeByPosition(params[0]); break
                case MOVE: q.move(params[0], params[1]); break
                case MOVE: q.swap(params[0], params[1]); break
            }
        }
    }
}