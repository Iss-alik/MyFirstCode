import { Component, inject } from '@angular/core';
import { TelegramWebService } from '../../services/telegram-web.service';
import { Router } from 'express';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  telegram = inject(TelegramWebService);
  router = inject(Router);

  constructor()
  {
    this.sendData = this.sendData.bind(this);
    this.goNext = this.goNext.bind(this);
    this.telegram.MainButton.setText('Next');
    this.telegram.MainButton.show();
    this.telegram.MainButton.onClick(this.goNext);
  } 
  
  sendData()
  {
    this.telegram.sendData({text: 'any'});
  }

  goNext()
  {
    this.router.navigate(['/characters']);
  }
}
