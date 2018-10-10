export class Haiku {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  countVowel(){
    let poem = this.first;
    let poemCharacters = poem.split('');
    console.log(poemCharacters);
    let vowel = ['a','e','i','o','u'];
    let count= 0;

    console.log(poemCharacters[0]);
    for(let i=0; i< poemCharacters.length; i++) {
      if(vowel.includes(poemCharacters[i])){
        count++;
      }
    }
    return count;
  }

  countSilentVowel(){
    let poem = this.first;
    let poemWords = poem.split(' ');
    console.log(poem);
    let silentVowel = /e$/i;
    let silentCount= 0;
    console.log(poemWords.length);
    for(let i=0; i< poemWords.length; i++) {
      if(silentVowel.test(poemWords[i])){
        console.log(poemWords[i]);
        silentCount++;
      }
    }
    return silentCount;
  }

  countDiphthong(){
    let poem = this.first;
    let poemWords = poem.split(' ');
    console.log(poemWords);
    let diphthongs = [/eo/i,/ai/i,/ei/i,/ee/i,/ou/i,/ie/i,/io/i];
    let diphCount= 0;

    console.log(poemWords[0]);
    for(let i=0; i< poemWords.length; i++) {
      if(diphthongs.test(poemWords[i])){
        diphCount++;
      }
    }
    return diphCount;
  }
}

// let newHaiku = new Haiku("apple apple","apple","apple");
// let result = newHaiku.countSilentVowel();
// result;
