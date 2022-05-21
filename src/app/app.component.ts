import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathApp';

  displayChange(){
    const a = document.querySelector<HTMLElement>('.navBar')!;
    if(a.style.transition==='none'){
      a.style.transition='transition: 0.5s transform ease-in-out;';
    }
    else
      a.style.transition = 'none';
  }
}


