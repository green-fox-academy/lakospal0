export class Anagram {
  anagramChecker(word1: string, word2: string) {

    word1 = "voldemort".split("").sort().join("");
    word2 = "emortvold".split("").sort().join("");
    if (word1 === word2) {
      return true;
    } else {
      console.log("not good")
    }
  }
}

//let angram=new Anagram();
//angram.anagramChecker();
//console.log(angram.anagramChecker());
//tomdenem
//voldemort
