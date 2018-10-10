import { Haiku } from '../src/haiku.js';

describe('Haiku', function() {

  it('should test whether vowel counter returns right', function() {
    let newHaiku = new Haiku("apple apple","apple apple","apple apple");
    let result = newHaiku.countVowel();
    expect(result).toEqual(4);
  });

  it('should test whether silent vowel returns right', function() {
    let newHaiku = new Haiku("apple apple","apple apple","apple apple");
    let result = newHaiku.countSilentVowel();
    expect(result).toEqual(2);
  });

  it('should test whether diphthong returns right', function() {
    let newHaiku = new Haiku("book","apple apple","apple apple");
    let result = newHaiku.countDiphthong();
    expect(result).toEqual(1);
  });
});
