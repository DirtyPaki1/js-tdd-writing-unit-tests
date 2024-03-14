// src/utils.js

// Add this test case
it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
   });
   
   // Adjust the function to handle case-insensitive matching
   export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
       points += /[aeiou]/i.test(char) ? 1 : 2;
    }
    return points;
   }
   