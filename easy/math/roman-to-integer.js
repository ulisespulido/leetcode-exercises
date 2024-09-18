/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let i = s.length - 1;

    while(i >= 0 && s[i] === 'I') {
        result += 1;
        i--;
    }

    if (i >= 0 && s[i] === 'V') {
        if (s[i - 1] === 'I') {
            result +=4;
            i -= 2;
        } else {
            result += 5;
            i--;
        }
    }


    while (i >= 0 && s[i] === 'X') {
        if (s[i - 1] === 'I') {
            result +=9;
            i -= 2;
        } else {
            result += 10;
            i--;
        }
    }

    if (i >= 0 && s[i] === 'L') {
        if (s[i - 1] === 'X') {
            result += 40;
            i -= 2;
        } else {
            result += 50;
            i--;
        }

    }

    while (i >= 0 && s[i] === 'C') {
        if (s[i - 1] === 'X') {
            result += 90;
            i -= 2;
        } else {
            result += 100;
            i--;
        }
    }

    if (i >= 0 && s[i] === 'D') {
        if (s[i - 1] === 'C') {
            result += 400;
            i -= 2;
        } else {
            result += 500;
            i--;
        }
    }

    while (i >= 0 && s[i] === 'M') {
        if (s[i - 1] === 'C') {
            result += 900;
            i -= 2;
        } else {
            result += 1000;
            i--;
        }
    }

    return result;
};