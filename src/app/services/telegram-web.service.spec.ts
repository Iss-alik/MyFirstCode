import { TestBed } from '@angular/core/testing';

import { TelegramWebService } from './telegram-web.service';

describe('TelegramWebService', () => {
  let service: TelegramWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegramWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
