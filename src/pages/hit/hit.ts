import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WoundPage } from '../wound/wound';

@Component({
  selector: 'page-hit',
  templateUrl: 'hit.html'
})
  export class HitPage {

    rolls: number;
    sixes: number = 0;
    fives: number = 0;
    fours: number = 0;
    threes: number = 0;
    twos: number = 0;
    ones: number = 0;
    hits: number = 0;
    wounds: number = 0;
    totalDice: number = 0;
    toHit: number;
    rerollOnesBoolean: boolean = false;
    oneTimeReroll: boolean = true;
    extraHits: boolean = false;

  constructor(public navCtrl: NavController) {}

  rollDice(numOfDice) {
    this.totalDice = numOfDice;
    this.diceChecker(this.totalDice);

    if (this.toHit == 6) {
      this.hits = this.sixes;
    } else if (this.toHit == 5) {
      this.hits = this.sixes + this.fives;
    } else if (this.toHit == 4) {
      this.hits = this.sixes + this.fives + this.fours;
    } else if (this.toHit == 3) {
      this.hits = this.sixes + this.fives + this.fours + this.threes;
    } else if (this.toHit == 2) {
      this.hits = this.sixes + this.fives + this.fours + this.threes + this.twos;
    } else if (this.toHit == 1) {
      this.hits = this.sixes + this.fives + this.fours + this.threes + this.twos + this.ones;
    }
  }

  rerollOnes() {
    if(this.rerollOnesBoolean && this.oneTimeReroll) {
      let totalOnes = this.ones;
      this.ones = 0;
      this.rollDice(totalOnes);
    }
    this.oneTimeReroll = false;
    this.rerollOnesBoolean = false;
  }

  extraHitsOnSixes() {
    if (!this.extraHits) {
      this.extraHits = true;
      let totalSixes = this.sixes;
      this.rollDice(totalSixes);
    }
  }

  reset() {
    this.ones = 0;
    this.twos = 0;
    this.threes = 0;
    this.fours = 0;
    this.fives = 0;
    this.sixes = 0;
    this.rolls = 0;
    this.toHit = 0;
    this.hits = 0;
    this.extraHits = false;
    this.oneTimeReroll = true;
  }

  diceChecker(numOfDice) {
    for (let i = 0; i < numOfDice; ++i) {
      let num = Math.floor((Math.random() * 6) + 1);
      if (num == 1) {
        ++this.ones;
        if (this.oneTimeReroll) {
          this.rerollOnesBoolean = true;
        }
      } else if (num == 2) {
        ++this.twos;
      } else if (num == 3) {
        ++this.threes;
      } else if (num == 4) {
        ++this.fours;
      } else if (num == 5) {
        ++this.fives;
      } else if (num == 6) {
        ++this.sixes;
      }
    }
  }

  toWoundPage() {
    this.navCtrl.push(WoundPage, {
      rolls: this.hits,
    });
  }
}
