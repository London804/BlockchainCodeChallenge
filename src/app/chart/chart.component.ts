import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { BitcoinPriceService } from '../bitcoin-price/bitcoin-price.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

	data: Observable<any[]>;
	loadstate: boolean;
  	subscription: Subscription;
	
	options: Object; //chart

	constructor(bs: BitcoinPriceService) { 
		console.log(bs);
		console.log('loadstate', this.loadstate);
		this.data = bs.getData();
	    this.loadstate = bs.loadstate
	    this.subscription = bs.stateChange.subscribe((value) => { 
	      this.loadstate = value; 
	    });
	    var i; 
	    var x = this.data;
	    for (i = x; i < x; i++){
	    	{{i.price}}
	    }


        this.options = {
            title : { text : 'Bitcoin Price' },
            series: [{
                data: this.data 
            }],
        };

	}

        // console.log('options', this.options[Object.keys(this.options)[1]])

    ngOnDestroy() {
	  	//prevent memory leak when component destroyed
	    this.subscription.unsubscribe();
	}
}


// var obj = { first: 'someVal' };
// obj[Object.keys(obj)[0]]; //returns 'someVal'
