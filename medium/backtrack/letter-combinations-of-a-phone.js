/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
 * Return the answer in any order.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length < 1) {
        return [];
    }
    let letters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    let combinations = [];
    var backtrack = function (index, array) {
        if (index === digits.length) {
            combinations.push(array.join(""));
            return;
        }
        let possibleLetters = letters[digits[index]];
        for (let i = 0; i < possibleLetters.length; i++) {
            array.push(possibleLetters[i]);
            backtrack(index + 1, array);
            array.pop();
        }
    }
    backtrack(0, []);
    return combinations;
};