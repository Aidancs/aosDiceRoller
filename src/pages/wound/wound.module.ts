import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WoundPage } from './wound';

@NgModule({
  declarations: [
    WoundPage,
  ],
  imports: [
    IonicPageModule.forChild(WoundPage),
  ],
})
export class WoundPageModule {}
