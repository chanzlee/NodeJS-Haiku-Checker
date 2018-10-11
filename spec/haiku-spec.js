import { Haiku } from '../src/haiku.js';

describe('Haiku', function() {

  it('should test whether vowel counter returns right', function() {
    let newHaiku = new Haiku("apple apple","apple apple","apple apple");
    let result = newHaiku.countVowel(1);
    expect(result).toEqual(4);
  });

  it('should test whether silent vowel returns right', function() {
    let newHaiku = new Haiku("apple apple","apple apple","apple apple");
    let result = newHaiku.countSilentVowel(1);
    expect(result).toEqual(2);
  });

  it('should test whether diphthong returns right', function() {
    let newHaiku = new Haiku("book book","book book","book book");
    let result = newHaiku.countDiphthong(1);
    expect(result).toEqual(2);
  });

  it('should test whether syllable checker returns right', function() {
    let newHaiku = new Haiku("buk booke buok big big","book","book");
    let result = newHaiku.syllableChecker(1);
    expect(result).toEqual(true);
  });
});
