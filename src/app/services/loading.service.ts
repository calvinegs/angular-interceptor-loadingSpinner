import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading$ = new BehaviorSubject<boolean>(false);
  // loading$ = this._loading$.asObservable();
  loading$: Observable<boolean> = this._loading$.pipe(
    switchMap(isLoading => {
      if (!isLoading) {
        return of(false);
      }
      return of(true).pipe(delay(1000));
    })
  )

  constructor() { }

  show() {
    this._loading$.next(true);
  }

  hide() {
    this._loading$.next(false);
  }
}
