const res = require("express/lib/response");
const xlsx = require("xlsx");

let next_pointer = 0;

exports.name = 'Mad';

exports.data = () => {

    let date_ob = new Date();

    // test purpose
    date_ob.setDate('18');
    date_ob.setMonth('09');
    date_ob.setFullYear('2021');
    // date_ob.setHours('1');
    // date_ob.setMinutes('5');

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    
    let time = (date_ob.getMonth() + 1) + '/' + date_ob.getDate() + '/' + year.toString().substr(2,2) + ' ' + next_pointer + ':00';
    
    const spreadsheet = xlsx.readFile('./Lstm_data/data.xlsx');
    const sheets = spreadsheet.SheetNames;
    const Sheet = spreadsheet.Sheets[sheets[0]];

    let i = 2;
    var columns = 'abc'.toUpperCase().split('');
    var result = new Object();

    while (true) {
        var obj = Sheet['A'+ i]['w'];
        
        if (obj == time) {
            console.log(obj);

            for (let j=0; j < columns.length; j=j+1) {
                result[Sheet[columns[j]+ 1]['w']] = Sheet[columns[j]+ i]['w'];
            }

            next_pointer = next_pointer + 1;

            break;
        }

        i = i + 1;
    }

    if (next_pointer == 25) {
        next_pointer = 0;
    }

    return result;
}