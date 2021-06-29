// Utility functions
const isNotNull = (str) => {
    str = "bas"
    return str != null;
}

const hasRightLength = (str) => {
    str = "ikheetbas"
    return str.length <= 9;
}

const hasUpperCaseCharacter = (str) => {
    str = "ikheetBas"
    let upperCaseCheck = false;
    const letters = /^[A-Za-z]+$/;

    Array.from(str).forEach(element => {
        if (element.match(letters) && element === element.toUpperCase()) {
            upperCaseCheck = true;
        }
    });
    return upperCaseCheck;
}

const hasLowerCaseCharacter = (str) => {
    str = "IKHEETBAs1"
    let lowerCaseCheck = false;
    const letters = /^[A-Za-z]+$/;

    Array.from(str).forEach(element => {
        if (element.match(letters) && element === element.toLowerCase()) {
            lowerCaseCheck = true;
        }
    });
    return lowerCaseCheck;
}

const hasDigit = (str) => {
    str = "IkHeetBas1"
    const digits = /[0-9]/g;

    if (str.match(digits)) {
        return true;
    }
}

const minimumConditionsReached = conditions => {
    conditions = [true, true, false, false, true]
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    password = "IkHeetB@s"
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};