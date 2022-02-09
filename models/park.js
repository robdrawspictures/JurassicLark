const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
    this.dinoDiets = {
        'carnivore' : 0,
        'herbivore' : 0,
        'omnivore' : 0
    };
};

Park.prototype.dinoCount = function(){
    return this.dinoCollection.length;
};

Park.prototype.addDinosaur = function(newDino){
    this.dinoCollection.push(newDino);
};

Park.prototype.removeDino = function(){
    this.dinoCollection.pop();
};

Park.prototype.removeBySpecies = function(species){
    let newCollection = [];
    for (let dinosaur of this.dinoCollection){
        if (dinosaur.species != species){
            newCollection.push(dinosaur);
        };
    };
    this.dinoCollection = newCollection;
};

Park.prototype.mostPopularDino = function(){
    let visitorCount = 0;
    for (let dinosaur of this.dinoCollection){
        if (dinosaur.guestsAttractedPerDay > visitorCount){
            visitorCount = dinosaur.guestsAttractedPerDay
        };
    };

    let popularDino;
    for (let dinosaur of this.dinoCollection){
        if (dinosaur.guestsAttractedPerDay === visitorCount){
            popularDino = dinosaur;
        }
    }
    return popularDino;
}

Park.prototype.collectSpecies = function(species){
    const speciesCollection = [];
    for (let dinosaur of this.dinoCollection){
        if (dinosaur.species === species){
            speciesCollection.push(dinosaur);
        };
    };
    return speciesCollection;
};

Park.prototype.totalDailyVisitors = function(){
    let count = 0
    for (let dinosaur of this.dinoCollection){
        count += dinosaur.guestsAttractedPerDay;
    };
    return count;
};

// Ask Steve why const count didn't work but let did.

Park.prototype.annualVisitorCount = function(){
    let annualVisitors = this.totalDailyVisitors() * 365;
    return annualVisitors;
};

Park.prototype.calculateAnnualRevenue = function(){
    let annualRevenue = this.annualVisitorCount() * this.ticketPrice;
    return annualRevenue;
};

// Park.prototype.sortByDiet = function(){
//     for (var dinosaur in this.dinoCollection){
//         if (dinosaur.diet === this.dinoDiets.){
//             this.dinoDiets. += 1
//         };
//     };
// };

Park.prototype.sortByDiet = function(){
    for (let dinosaur of this.dinoCollection){
        if (dinosaur.diet === 'carnivore'){
            this.dinoDiets.carnivore += 1
        } else if (dinosaur.diet === 'herbivore'){
            this.dinoDiets.herbivore += 1
        } else if (dinosaur.diet === 'omnivore'){
            this.dinoDiets.omnivore += 1
        };
    };
};

module.exports = Park;