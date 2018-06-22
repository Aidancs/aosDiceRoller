import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wound',
  templateUrl: 'wound.html',
})
export class WoundPage {

      rolls: number;
      sixes: number = 0;
      fives: number = 0;
      fours: number = 0;
      threes: number = 0;
      twos: number = 0;
      ones: number = 0;
      wounds: number = 0;
      totalDice: number = 0;
      toWound: number;

    constructor(
      public alertCtrl: AlertController,
      public navCtrl: NavController,
      public navParams: NavParams
    ) {
      this.reset();
      this.rolls = navParams.get("rolls");
    }

    rollDice(numOfDice) {
      this.totalDice = numOfDice;
      this.diceChecker(this.totalDice);

      if (this.toWound == 6) {
        this.wounds = this.sixes;
      } else if (this.toWound == 5) {
        this.wounds = this.sixes + this.fives;
      } else if (this.toWound == 4) {
        this.wounds = this.sixes + this.fives + this.fours;
      } else if (this.toWound == 3) {
        this.wounds = this.sixes + this.fives + this.fours + this.threes;
      } else if (this.toWound == 2) {
        this.wounds = this.sixes + this.fives + this.fours + this.threes + this.twos;
      } else if (this.toWound == 1) {
        this.wounds = this.sixes + this.fives + this.fours + this.threes + this.twos + this.ones;
      }

      if (this.ones === 0) {
        let alert = this.alertCtrl.create({
            title: 'Total: ' + this.wounds,
            buttons: ['Dismiss'],
          });
          alert.present();
      }
    }

    rerollOnes() {
      let totalOnes = this.ones;
      this.ones = 0;
      this.rollDice(totalOnes);
    }

    extraHitsOnSixes() {
      let totalSixes = this.sixes;
      this.sixes = 0;
      this.rollDice(totalSixes);
    }

    total() {
      let alert = this.alertCtrl.create({
          title: 'Total: ' + this.wounds,
          buttons: ['Dismiss'],
        });
        alert.present();
    }

    reset() {
      this.ones = 0;
      this.twos = 0;
      this.threes = 0;
      this.fours = 0;
      this.fives = 0;
      this.sixes = 0;
      this.rolls = 0;
      this.toWound = 0;
      this.wounds = 0;
    }

    diceChecker(numOfDice) {
      for (let i = 0; i < numOfDice; ++i) {
        let num = Math.floor((Math.random() * 6) + 1);
        if (num == 1) {
          ++this.ones;
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

    toHitPage() {
      this.navCtrl.pop();
    }

}
