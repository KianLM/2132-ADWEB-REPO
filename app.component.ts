import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-data';
  appName1 = '1. One-way data binding'
  appName2 = '2. Two-way data binding'
  head1 = 'String/Number'
  x = 64;
  y = 23;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  head2 = 'Style'
  appliedCSSClass = "blue";
  notappliedCSSClass = false;
  myColor = "orange";

  head3 = 'Property'
  clientName:string = "Kian";

  head4 = 'Class'
  
  head5 = 'Event/Actions'
  showData($event:any){
    console.log("The button is clicked!"); if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  getData(data:any){
    console.warn(data);
  }
}
