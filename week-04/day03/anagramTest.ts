import * as test from "tape"
import { Anagram } from "./anagram"

test("test if 2 word is anagram or not", function (t) {
  let anagram = new Anagram();
  let word1: string = "voldemort";
  let word2: string = "emortvold";
  const actual = anagram.anagramChecker(word1, word2);;
  const expected = true;

  t.equal(actual, expected);
  t.end();
})