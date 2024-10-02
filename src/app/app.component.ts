import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelegramWebService } from './services/telegram-web.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {
  telgram = inject(TelegramWebService);
  constructor(){
    this.telgram.ready();
  }
}
