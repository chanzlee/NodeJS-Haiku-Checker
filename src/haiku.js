export class Haiku {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  countVowel(lineNumber){
    let poem;
    if (lineNumber == 1) {
      poem = this.first;
    } else if (lineNumber == 2) {
      poem = this.second;
    } else {
      poem = this.third;
    }
    let poemCharacters = poem.split('');
    let vowel = ['a','e','i','o','u'];
    let count= 0;
    for(let i=0; i< poemCharacters.length; i++) {
      if(vowel.includes(poemCharacters[i])){
        count++;
      }
    }
    console.log(count);
    return count;
  }

  countSilentVowel(lineNumber){
    let poem;
    if (lineNumber == 1) {
      poem = this.first;
    } else if (lineNumber == 2) {
      poem = this.second;
    } else {
      poem = this.third;
    }
    let poemWords = poem.split(' ');
    let silentVowel = /e$/i;
    let silentCount= 0;
    for(let i=0; i< poemWords.length; i++) {
      if(silentVowel.test(poemWords[i])){
        silentCount++;
      }
    }
    console.log(silentCount);
    return silentCount;
  }

  countDiphthong(lineNumber){
    let poem= "";
    if (lineNumber == 1) {
      poem = this.first;
    } else if (lineNumber == 2) {
      poem = this.second;
    } else {
      poem = this.third;
    }
    let poemWords = poem.split(' ');
    let diphthongs = [/eo/i,/ai/i,/ei/i,/ee/i,/ou/i,/ui/i,/ie/i,/io/i,/oo/i,/uo/i];
    let diphCount= 0;

    for(let i=0; i< poemWords.length; i++) {
      for(let j=0; j<diphthongs.length; j++){
        if(diphthongs[j].test(poemWords[i])){

          diphCount++;
        }
      }
    }
    console.log(diphCount);
    return diphCount;
  }

  syllableChecker(lineNumber){
    let self = this;
    let required = 0;
    if(lineNumber == 2) {
      required = 7;
    } else {
      required = 5;
    }
    let count = self.countVowel(lineNumber) - self.countSilentVowel(lineNumber) - self.countDiphthong(lineNumber);
    if (count == required) {
      console.log(count+ "/" +required );
      return true;
    } else {
      console.log(count+ "/" +required );
      return false;
    }
  }

  haikuChecker(){
    // console.log(this.syllableChecker(1));
    // console.log(this.syllableChecker(2));
    // console.log(this.syllableChecker(3));
    if(this.syllableChecker(1) && this.syllableChecker(2) && this.syllableChecker(3)) {
      return true;
    } else {
      return false;
    }
  }
}

// let newHaiku = new Haiku("come epicodus","smoke cigarette and drink beer","rather than coding");
// let result = newHaiku.haikuChecker();
// result;
