const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 25);
    dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 20);
    dinosaur4 = new Dinosaur('compsognathus', 'carnivore', 10);
    dinosaur5 = new Dinosaur('velociraptor', 'carnivore', 30);
    park = new Park('Dino-Mite Park', 10);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dino-Mite Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const count1 = park.dinoCount();
    assert.strictEqual(count1, 0);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const count2 = park.dinoCount();
    assert.strictEqual(count2, 4);
  });


  it('should be able to add a dinosaur to its collection', function(){
    const newDino = new Dinosaur('dilophosaurus', 'carnivore', 20);
    park.addDinosaur(newDino);
    const actual = park.dinoCount();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeDino();
    const actual = park.dinoCount();
    assert.strictEqual(actual, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.mostPopularDino();
    const expected = dinosaur1
    assert.strictEqual(actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const speciesList = park.collectSpecies('velociraptor');
    const actual = speciesList.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.totalDailyVisitors();
    assert.strictEqual(actual, 135);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.annualVisitorCount();
    assert.strictEqual(actual, 49275);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    const actual = park.calculateAnnualRevenue();
    assert.strictEqual(actual, 492750);
  });

  it('should be able to remove a dinosaur by its species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeBySpecies('velociraptor');
    const actual = park.dinoCount();
    assert.strictEqual(actual, 3);
  });

  it('should be able to populate an object based on diet', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.sortByDiet();
    const actual = park.dinoDiets;
    const expected = {
      carnivore : 4,
      herbivore : 1,
      omnivore : 0
    };
    assert.deepStrictEqual(actual, expected);
  })

});
