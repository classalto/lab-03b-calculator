import './example.test.js';
import { getSum, getSubtract, getDivision, getMultiply } from '../utils.js'

const test = QUnit.test;

test('should return 0 when given 1, -1 ', expect => () {
    const expected = 0;

    const actual = getSum(1, -1);

    expect.equal(actual, expected);
}
test('should return -1 when given 1, -2 ', expect => () {
    const expected = -1;

    const actual = getSubtract(1, -2);

    expect.equal(actual, expected);
}
test('should return 0 when given 1, 0 ', expect => () {
    const expected = 0;

    const actual = getDivision(1, 0);

    expect.equal(actual, expected);
}
test('should return 0 when given 1, 0 ', expect => () {
    const expected = 0;

    const actual = getMultiply(1, 0);

    expect.equal(actual, expected);
}