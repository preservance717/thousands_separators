'use strict';

function thousands_separators(num) {
    num = num + "";
    num = num.replace(/[]/g,"");

    if(num == ""){
        return;
    }

    if(isNaN(num)){
        return;
    }

    var index = num.indexOf('.');
    if(index == -1){
        var reg = /(-?\d+)(\d{3})/;

        while(reg.test(num)){
            num = num.replace(reg,"$1,$2");
        }
    }else{
        var intPart = num.substring(0, index);
        var decimalPart = num.substring(index+1, num.length);
        var reg = /(-?\d+)(\d{3})/;

        while(reg.test(intPart)){
            intPart = intPart.replace(reg, "$1,$2");
        }
        num = intPart + "." + decimalPart;
    }

    return num;
}


module.exports = thousands_separators;
