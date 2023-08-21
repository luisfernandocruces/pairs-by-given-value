const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const validateInput = require("./validateInput");

describe("validateInput tests", () => {
  it("should work fine if the format is correct(list of numbers separated by a comma + space + given value)", () => {
    const input1 = "1,2,3,4,5,6,7,8,9,10 10";
    const isValidInput1 = validateInput(input1);
    assert.ok(isValidInput1);

    const input2 = "1 1";
    const isValidInput2 = validateInput(input2);
    assert.ok(isValidInput2);
  });

  it("should fail because the the input is empty", () => {
    const input1 = "";
    const isValidInput1 = validateInput(input1);
    assert.ok(isValidInput1 === false);

    const input2 = " ";
    const isValidInput2 = validateInput(input2);
    assert.ok(isValidInput2 === false);

    const input3 = "                                                  ";
    const isValidInput3 = validateInput(input3);
    assert.ok(isValidInput3 === false);
  });

  it("should fail because the input is not a string", () => {
    const input1 = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z a";
    const isValidInput1 = validateInput(input1);
    assert.ok(isValidInput1 === false);

    const input2 = "true false";
    const isValidInput2 = validateInput(input2);
    assert.ok(isValidInput2 === false);

    const input3 = "1,2,3,4,5 ab";
    const isValidInput3 = validateInput(input3);
    assert.ok(isValidInput3 === false);

    const input4 = "a,b 1";
    const isValidInput4 = validateInput(input4);
    assert.ok(isValidInput4 === false);
  });

  it("should fail because the input is not a valid format", () => {
    const input1 = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10 10";
    const isValidInput1 = validateInput(input1);
    assert.ok(isValidInput1 === false);

    const input2 = "1|2|3|4|5|6|7|8|9|10 10";
    const isValidInput2 = validateInput(input2);
    assert.ok(isValidInput2 === false);
  });

  it("should fail because the input contains a number greater than MAX_SAFE_INTEGER", () => {
    const input1 = `${Number.MAX_SAFE_INTEGER} 10`;
    const isValidInput1 = validateInput(input1);
    assert.ok(isValidInput1 === false);

    const input2 = `10 ${Number.MAX_SAFE_INTEGER}`;
    const isValidInput2 = validateInput(input2);
    assert.ok(isValidInput2 === false);
  });

  it("should fail because the input contains a number lower than MIN_SAFE_INTEGER", () => {
    const input1 = `${Number.MIN_SAFE_INTEGER} 10`;
    const isValidInput1 = validateInput(input1);
    assert.ok(isValidInput1 === false);

    const input2 = `10 ${Number.MIN_SAFE_INTEGER}`;
    const isValidInput2 = validateInput(input2);
    assert.ok(isValidInput2 === false);
  });
});
