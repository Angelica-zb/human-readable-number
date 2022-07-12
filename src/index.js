module.exports = function toReadable(number) {
    let num = number;

    const ones = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    const tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    const hundred = ' hundred';
    let output = '';
    const numString = num.toString();

    if (num == 0) {
        return 'zero';
    }

    if (num < 20) {
        output = ones[num];
        return output;
    }

    if (num % 10 == 0 && num > 10 && num < 100) {
        output += tens[numString.charAt(0)];
        return output;
    }

    if (num % 10 != 0 && num > 10 && num < 100) {
        output += tens[numString.charAt(0)];
        output += ' ' + ones[numString.charAt(1)];
        return output;
    }

    if (num % 100 == 0) {
        output = ones[numString.charAt(0)] + hundred;
        return output;
    }

    if ((num - (numString.charAt(0) * 100)) >= 10 && (num - (numString.charAt(0) * 100)) < 20) {
        output = ones[numString.charAt(0)] + hundred;
        output += ' ' + ones[num - (numString.charAt(0) * 100)];
        return output;

    }

    if (numString.charAt(1) == 0) {
        output = ones[numString.charAt(0)] + hundred;
        output += ' ' + ones[numString.charAt(2)];
        return output;
    }

    if (((num - (numString.charAt(0) * 100)) % 10) == 0) {
        output = ones[numString.charAt(0)] + hundred;
        output += ' ' + tens[numString.charAt(1)];
        return output;
    }

    output = ones[numString.charAt(0)] + hundred;
    output += ' ' + tens[numString.charAt(1)];
    output += ' ' + ones[numString.charAt(2)];
    return output;
}