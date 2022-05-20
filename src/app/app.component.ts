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
    a.style.display = 'none';
  }
}
