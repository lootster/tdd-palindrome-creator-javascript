const palindromeCreator = require("./Palindrome-Creator-javascript");

describe("Palindrome-Creator", () => {
  it('should return "Not possible"', () => {
    let result = palindromeCreator("mmop");
    expect(result).toBe("Not possible");
  });
  it('should return "k"', () => {
    let result = palindromeCreator("kjjjhjjj");
    expect(result).toBe("k");
  });
  it('should return "jc"', () => {
    let result = palindromeCreator("abjchba");
    expect(result).toBe("jc");
  });
});
