'use strict';

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai');
const expect = chai.expect;

const outs = require('../lib/politician-honesty-lab.js');


describe('politician', function () {
});

describe('deductForDishonesty', function() {
  it('deducts 25 rating points from the politician passed in', function() {

    const politician = outs.politicians[1]
    const rating = politician.rating
    const newRating = rating - 25
    outs.deductForDishonesty(politician)
    expect(politician.rating).to.equal(newRating)
  })
})

describe('addForHonesty', function() {
  it('adds 5 rating points to the politician passed in', function() {

    const politician = outs.politicians[0]
    const rating = politician.rating
    const newRating = rating + 5
    outs.addForHonesty(politician)
    expect(politician.rating).to.equal(newRating)
  })
})

describe('runHonestyScript', function () {

  it('returns undefined when called without arguments', function () {
    expect(outs.runHonestyScript()).to.be.undefined;
  });

});
