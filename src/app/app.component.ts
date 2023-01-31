import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // loading = false;
  loading$ = this.loadingService.loading$;
  data: unknown;

  constructor(private _getData: GetDataService
    , private loadingService: LoadingService){ }
  
  showSpinner() {
    // this.loading = true;
    this.loadingService.show();
  }

  hideSpinner() {
    // this.loading = false;
    this.loadingService.hide();
  }

  getData() {
    // this.loading = true;
    this._getData.getData().subscribe(data => {
      // this.loading = false;
      this.data = data;
      console.log(data);
    });
  }
}
