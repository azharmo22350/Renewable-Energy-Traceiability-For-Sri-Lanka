const res = require("express/lib/response");
const xlsx = require("xlsx");

exports.name = 'Mad';

exports.data = () => {
    let date_ob = new Date();

    // test purpose
    date_ob.setDate('01');
    date_ob.setMonth('08');
    date_ob.setFullYear('2021');

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = (parseInt(date_ob.getMinutes()/60) * 60) % 60;
    minutes = ("0" + minutes).slice(-2);
    
    var time =  (date_ob.getMonth() + 1) + '/'+ date_ob.getDate()+ '/' + year.toString().substr(2,2) + ' ' + hours + ':' + minutes;
    console.log(time)
    var current_date = date + "-" + month + "-" + year;
    
    const spreadsheet = xlsx.readFile('./Consumer/consumer.xlsx');
    const sheets = spreadsheet.SheetNames;
    const Sheet = spreadsheet.Sheets[sheets[0]];

    let i = 2;
    var columns = 'abcd'.toUpperCase().split('');
    var result = new Object();

    while (true) {
        console.log(Sheet['A'+ i])
        var obj = Sheet['A'+ i]['w'];

        if (obj == time) {
            console.log(obj);

            for (let j=0; j < columns.length; j=j+1) {
                result[Sheet[columns[j]+ 1]['w']] = Sheet[columns[j]+ i]['w'];
            }
            break;
        }
        
        i = i + 1;
    }

    return result;
}