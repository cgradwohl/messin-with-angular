// app.component.ts
// this is the main application compponent where all other components meet.

// every component must include core
import { Component } from '@angular/core';

@Component({
  selector: 'about',
  // template literal using backtick
  template: `
        <h1>about this app</h1>
    `,
})
export class AboutComponent  {

}
