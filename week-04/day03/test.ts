import * as test from "tape"

import { Apple } from "./apples"


test("write out apple", function (t){
  let alma=new Apple();
  const actual= alma.getApple();
  const expected:string= "apple";

  t.equal(actual,expected);
  t.end ();
})