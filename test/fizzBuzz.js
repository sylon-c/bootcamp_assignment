'use strict';
var chai = require('chai');
var expect = chai.expect;
var fizzBuzz = require("../app/fizzBuzz")

describe("Fizz Buzz tests ", function() {

 it("should return `Fizz` for number divisible by 3", function() {
   expect(fizzBuzz(3)).to.equal('Fizz');
 });

 it("should return `Buzz` for number divisible by 5", function() {
   expect(fizzBuzz(5)).to.equal('Buzz');
 });

 it("should return `FizzBuzz` for 15", function() {
   expect(fizzBuzz(15)).to.equal('FizzBuzz');
 });

 it("should return `FizzBuzz` for 45", function() {
   expect(fizzBuzz(45)).to.equal('FizzBuzz');
 });

 it("should return `FizzBuzz` for 90", function() {
   expect(fizzBuzz(90)).to.equal('FizzBuzz');
 });

 it("should return `Fizz` for 63", function() {
   expect(fizzBuzz(63)).to.equal('Fizz');
 });
})