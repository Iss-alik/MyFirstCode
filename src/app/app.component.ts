import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TelegramWebService } from './services/telegram-web.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `<router-outlet />`
})
export class AppComponent {
 
}
