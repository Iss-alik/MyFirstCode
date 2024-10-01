import { Component, inject } from '@angular/core';
import { TelegramWebService } from '../../services/telegram-web.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  telegram = inject(TelegramWebService);

  constructor()
  {
    this.telegram.MainButton.show();
  }  
}
