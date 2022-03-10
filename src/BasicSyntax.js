export function romanToInteger(str) {
    let result = 0;
    let symbols = str.split('');
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];
        switch (symbol) {
            case 'I':
                if (symbols[i + 1] == 'V') {
                    result += 4;
                    i++;
                } else {
                    if (symbols[i + 1] == 'X') {
                        result += 9;
                        i++;
                    } else {
                        result += 1;
                    }
                }
                break;
            case 'V':
                if (symbols[i + 1] == 'I') {
                    result += 6;
                    i++;
                } else {
                    result += 5;
                }
                break;
            case 'X':
                if (symbols[i + 1] == 'V') {
                    result += 15;
                    i++;
                } else {
                    if (symbols[i + 1] == 'L') {
                        result += 40;
                        i++;
                    } else {
                        if (symbols[i + 1] == 'C') {
                            result += 90;
                            i++;
                        } else {
                            result += 10;
                        }
                    }
                }
                break;
            case 'L':
                if (symbols[i + 1] == 'X') {
                    result += 60;
                    i++;
                } else {
                    result += 50;
                }
                break;
            case 'C':
                if (symbols[i + 1] == 'L') {
                    result += 150;
                    i++;
                } else {
                    if (symbols[i + 1] == 'M') {
                        result += 900;
                        i++;
                    } else {
                        if (symbols[i + 1] == 'D') {
                            result += 400;
                            i++;
                        } else {
                            result += 100;
                        }
                    }
                }
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;
}
