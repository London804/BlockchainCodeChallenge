import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { BitcoinPriceService } from '../bitcoin-price/bitcoin-price.service';

declare var jQuery:any;

@Component({
  selector: 'app-chart',
  template: `<div style="width:80%" id="container"></div>`,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

	priceData: Observable<any[]>;

  	loadstate: boolean;
  	subscription: Subscription;

	constructor(bs: BitcoinPriceService) {
	  	console.log(bs);
	    this.priceData = bs.getData();
	    this.loadstate = bs.loadstate
	    this.subscription = bs.stateChange.subscribe((value) => { 
	      this.loadstate = value; 
	    });
	    console.log(this.priceData);
	    console.log('loadstate', this.loadstate);
  	}

	private data = [
		{
            name: 'USA',
            data: this.priceData
        }, 
        {
        	name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }];

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
	        series: this.data
	    });
    }

	ngOnDestroy() {
  		//prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}
}

