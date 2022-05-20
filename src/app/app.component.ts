import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathApp';

  displayChange(){
    const a = document.querySelector<HTMLElement>('.navBar')!;
    if(a.style.display==='block'){
      a.style.display='none';
    }
    else
      a.style.display = 'block';
  }
}
