import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const hond1 = {
    naam: "Bobby",
    leeftijd: 3,
    isSpeels: true,
    stelVoor: function() {
      console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben ${this.isSpeels ? 'speels' : 'niet speels'}.`);
    }
  };
  
  const hond2 = {
    naam: "Rex",
    leeftijd: 5,
    isSpeels: false,
    stelVoor: function() {
      console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben ${this.isSpeels ? 'speels' : 'niet speels'}.`);
    }
  };
  
  const hond3 = {
    naam: "Max",
    leeftijd: 2,
    isSpeels: true,
    stelVoor: function() {
      console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben ${this.isSpeels ? 'speels' : 'niet speels'}.`);
    }
  };
  
  const hondenArray = [hond1, hond2, hond3];
  
  hond1.stelVoor();
  hond2.stelVoor();
  hond3.stelVoor();
  

process.exit()