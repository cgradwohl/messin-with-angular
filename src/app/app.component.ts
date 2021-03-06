// app.component.ts
// this is the main application compponent where all other components meet.

// every component must include core
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template literal using backtick
  template: `
        <ul>
            <li><a routerLink='/'>Home</a></li>
            <li><a routerLink='/about'>About</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent  {

}
