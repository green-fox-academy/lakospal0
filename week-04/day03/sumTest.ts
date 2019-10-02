import * as test from "tape"
import { Sum } from "./sum"

test("add numbers together", function (t){
  let Einstein = new Sum();
  const actual=Einstein.szummaSzummarum()
  const expected=6;

  t.equal(actual,expected);
  t.end();
})