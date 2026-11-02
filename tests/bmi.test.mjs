import test from "node:test"
import assert from "node:assert/strict"
import {calculateBmi} from "../src/utils/bmi.mjs"

test("BMI correctly classifies an adult",()=>{
 const result=calculateBmi(70,175)
 assert.equal(result.value,22.9)
 assert.equal(result.category,"Faixa considerada adequada")
})
test("BMI rejects empty and implausible inputs",()=>{
 assert.equal(calculateBmi("",175),null)
 assert.equal(calculateBmi(70,0),null)
 assert.equal(calculateBmi(0,175),null)
 assert.equal(calculateBmi("abc",175),null)
 assert.equal(calculateBmi(70,251),null)
})
test("BMI identifies high BMI category",()=>{
 assert.equal(calculateBmi(130,175).category,"Obesidade grau III")
})
