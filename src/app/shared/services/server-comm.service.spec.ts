import { TestBed, inject } from '@angular/core/testing';

import { ServerCommService } from './server-comm.service';

xdescribe('ServerCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerCommService]
    });
  });

  it('should be created', inject([ServerCommService], (service: ServerCommService) => {
    expect(service).toBeTruthy();
  }));
});
