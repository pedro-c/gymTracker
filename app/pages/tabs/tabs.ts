import {Component} from '@angular/core';
import {ExercicesPage} from '../exercices/exercices';
import {CircuitsPage} from '../circuits/circuits';
@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ExercicesPage;
    this.tab2Root = CircuitsPage;
  }
}
