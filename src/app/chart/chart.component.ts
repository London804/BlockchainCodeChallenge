import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response } from '@angular/http';
import { BitcoinPriceService } from '../bitcoin-price/bitcoin-price.service';

import { Interface } from '../bitcoin-price/interface';

declare var jQuery:any;

@Component({
  selector: 'app-chart',
  template: `
  			<section id="container">
	  			<div
					*ngIf="loadstate"
					class="loader">
				</div>
	  			<div></div>
	  		</section>`,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
	  priceData: any;
  	loadstate: boolean;
  	subscription: Subscription;

  	moneyArray = [];

    observableBooks: Observable<Interface[]>
    books: Interface[];
    errorMessage: String;



	constructor(bs: BitcoinPriceService) {
	  	console.log(bs);
	    this.loadstate = bs.loadstate
	    this.subscription = bs.stateChange.subscribe((value) => { 
	      this.loadstate = value; 
	    });

      this.observableBooks = bs.getData();
        this.observableBooks.subscribe(
            books => this.books = books,
            error =>  this.errorMessage = <any>error);
	    console.log('observable', this.observableBooks);


	    console.log('moneyArray', this.moneyArray = bs.moneyArray);

	    console.log('loadstate', this.loadstate);
  	}

    ngOnInit(): void {
        
    }


  	

    ngAfterViewInit() {
    	this.renderChart();
    }
 
    renderChart(){
    	jQuery('#container').highcharts({
	        chart: {
	            type: 'area'
	        },
	        title: {
	            text: 'Bitcoin Price'
	        },
	        subtitle: {
	            text: 'Source: thebulletin.metapress.com'
	        },
	        xAxis: {
	            allowDecimals: false,
	            labels: {
	                formatter: function () {
	                    return this.value;
	                }
	            }
	        },
	        yAxis: {
	            title: {
	                text: 'Nuclear weapon states'
	            },
	            labels: {
	                formatter: function () {
	                    return this.value / 1000 + 'k';
	                }
	            }
	        },
	        tooltip: {
	            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b>' +
	            			 '<br/>warheads in {point.x}'
	        },
	        plotOptions: {
	            area: {
	                pointStart: 1940,
	                marker: {
	                    enabled: false,
	                    symbol: 'circle',
	                    radius: 2,
	                    states: {
	                        hover: {
	                            enabled: true
	                        }
	                    }
	                }
	            }
	        },
	        series: [{
	        	data: this.moneyArray,
	        	name: 'Value Type Description'
	        }]
	    });
    }
    
	ngOnDestroy() {
  		//prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}
}

