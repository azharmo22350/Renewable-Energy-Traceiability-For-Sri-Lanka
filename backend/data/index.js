const res = require("express/lib/response");
const xlsx = require("xlsx");

exports.name = 'Mad';

exports.data = () => {
    let date_ob = new Date();

    // test purpose
    date_ob.setDate('1');
    date_ob.setMonth('0');
    date_ob.setFullYear('2021');

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = (parseInt(date_ob.getMinutes()/15) * 15) % 60;
    minutes = ("0" + minutes).slice(-2);
    
    var time = date_ob.getDate() + '/' + (date_ob.getMonth() + 1) + '/' + year.toString().substr(2,2) + ' ' + hours + ':' + minutes;
    var current_date = date + "-" + month + "-" + year;

    const spreadsheet = xlsx.readFile('./data/New Generation Log  '+ current_date + '.xlsx');
    const sheets = spreadsheet.SheetNames;
    const Sheet = spreadsheet.Sheets[sheets[0]];

    let i = 1;
    var columns = 'abcdefghijklmn'.toUpperCase().split('');
    var result = new Object();
    while (true) {
        var obj = Sheet['A'+ i]['w'];

        if (obj == time) {
            for (let j=0; j < columns.length; j=j+1){
                result[Sheet[columns[j]+ 1]['w']] = Sheet[columns[j]+ i]['w']
            }
            break;
        }

        if (obj.split(" ")[1] == '0:00'){
            break;
        }
        i = i + 1;
    }

    return result;
}