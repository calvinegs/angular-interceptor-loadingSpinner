import { TestBed } from '@angular/core/testing';

import { HttpLoadingSpinInterceptor } from './http-loading-spin.interceptor';

describe('HttpLoadingSpinInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpLoadingSpinInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpLoadingSpinInterceptor = TestBed.inject(HttpLoadingSpinInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
