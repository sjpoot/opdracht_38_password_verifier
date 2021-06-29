const passwordverifier = require('./passwordverifier.js')

test("Password is not Null", function () {
    expect(passwordverifier.isNotNull()).toBeTruthy();
});

test("Password is shorter than 9 characters", function () {
    expect(passwordverifier.hasRightLength()).toBeTruthy();
});

test("Has at least 1 UPPERcase character", function () {
    expect(passwordverifier.hasUpperCaseCharacter()).toBeTruthy();
});

test("Has at least 1 LOWERcase character", function () {
    expect(passwordverifier.hasLowerCaseCharacter()).toBeTruthy();
});

test("Has at least 1 digit", function () {
    expect(passwordverifier.hasDigit()).toBeTruthy();
});

test("Has at least 3 TRUE conditions", function () {
    expect(passwordverifier.minimumConditionsReached()).toBeTruthy();
});

test("Password is valid", function () {
    expect(passwordverifier.verifyPassword()).toBeTruthy();
});