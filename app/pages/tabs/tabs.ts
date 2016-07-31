import {Component} from '@angular/core';
import {ExercisesPage} from '../exercises/exercises';
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
    this.tab1Root = ExercisesPage;
    this.tab2Root = CircuitsPage;
  }
}
