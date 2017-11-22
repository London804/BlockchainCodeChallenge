import { Component, ViewEncapsulation } from '@angular/core';
 
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

	ngAfterViewInit() {
		jQuery('button').click();
	}
}

