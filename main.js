// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      let currBase =  '';
      let mutatedBase = '';
      // generates 2 bases that are not equal
      do {
        
        currBase = this.dna[Math.floor(Math.random() * 14)];

        mutatedBase = this.dna[Math.floor(Math.random() * 14)];
      } while  (currBase === mutatedBase);

      //console.log(currBase, mutatedBase);
      // replaces current base with mutated base
      this.dna.splice(this.dna.indexOf(currBase), 1, mutatedBase);
      return this.dna;
    },

    compareDNA(obj) { 
      let counter = 0;
      // for each element in this dna
      this.dna.forEach((el, i) => {
        // if element = obj.dna index inrement counter by 1
        if (el === obj.dna[i]) {
          counter++;
        }
      });
      let percentage = (counter / this.dna.length) * 100;
      console.log(`speciman ${this.specimanNum} and ${obj.specimanNum} have ${percentage.toFixed(2)}% DNA in common`)
    },

    willLikelySurvive() {
      let filteredArr = [];
      //if index = c || or g push to empty array
      this.dna.filter(index => {
        if (index === 'C' || index === 'G')
        filteredArr.push(index);
      });
      //console.log(this.dna)
      //console.log(filteredArr)
      //specimans need to have 60% of dna made from c or g
      if ((filteredArr.length / this.dna.length) * 100 >= 60) {
        //more likely to survive
        return true;

      } else {
        //less likely
        return false;
      }
    },

  }
};

let survivingSpeciman = []
let idCounter = 1;
// stores 30 specimans who returned true on likely to sruvive method being called on their dna
while (survivingSpeciman.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand())
  if (newOrg.willLikelySurvive() === true) {
    survivingSpeciman.push(newOrg)
    idCounter++;
  }

};

//console.log(survivingSpeciman);
//console.log(survivingSpeciman.length);


//console.log(pAequorFactory(1, mockUpStrand()));

let shane = pAequorFactory(1, mockUpStrand());
//console.log(shane.dna);
//shane.mutate();
//console.log(shane.dna);

let chubs = pAequorFactory(2, mockUpStrand());
//console.log(chubs.dna);
//shane.compareDNA(chubs);
//console.log(shane.willLikelySurvive());







