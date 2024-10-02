import { Component, OnDestroy, OnInit} from '@angular/core';
import { TelegramWebService } from '../../services/telegram-web.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit, OnDestroy {
  
  constructor(private telegram: TelegramWebService,
    private route: ActivatedRoute,
    private router: Router) 
    {this.goBack = this.goBack.bind(this);}

    ngOnDestroy(): void {
      this.telegram.BackButton.offClick(this.goBack);
    }
    ngOnInit(): void {
      this.telegram.BackButton.show();
      this.telegram.BackButton.onClick(this.goBack);
    }

    goBack(): void{
      this.router.navigate(['/']);
    }
}
