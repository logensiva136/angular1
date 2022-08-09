import { Component } from '@angular/core'; // component module

@Component({
  // call as decorator
  selector: 'theroot', // it will custom html tag
  templateUrl: './app.component.html', // html file
  styleUrls: ['./app.component.css'], // css file
})

// these all are classes
// every component is a class
export class AppComponent {}
