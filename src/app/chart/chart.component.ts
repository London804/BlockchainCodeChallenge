import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { BitcoinPriceService } from '../bitcoin-price/bitcoin-price.service';

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

	priceData: Subscription;

  	loadstate: boolean;
  	subscription: Subscription;

  	moneyArray = [];

	constructor(bs: BitcoinPriceService) {
	  	console.log(bs);
	    this.priceData = bs.getData();
	    this.loadstate = bs.loadstate
	    this.subscription = bs.stateChange.subscribe((value) => { 
	      this.loadstate = value; 
	    });



	    console.log('moneyArray', this.moneyArray = bs.moneyArray);

	    console.log('priceData', this.priceData);
	    console.log('loadstate', this.loadstate);
  	}


// 	this.laugService.getAllLaug().subscribe(laug => {
// 	   this.laugs = laug; //save posts in array

	 //   if (this.laugs && this.laugs.array) {
	 //       this.laugs.array.forEach(element => {
	 //          this.modelLaugs.push(new Laug(element.navn, element.beskrivelse))
	 //       });
	 //   }

	 //   for (let i = 0 i< salesData.length; i++) {
		//     series.push({"name" : key, "data" : sales[key]})
		// }

		// let iterable = [10, 20, 30];

		// for (let value of iterable) {
		//   value += 1;
		//   console.log(value);

// 	});

//     private graphData() {
//     	var series = [],
//     	priceData = this.priceData
//     	console.log(priceData);

// 		for (let i = 1; i < priceData.length; i++) {
// 		    let newName = {
// 		       id:i.toString(),
// 		       name:"Tony"
// 		    };
// 		    series.push(newName);

		

		
// }

//     }

	private data = [
		{
            name: 'USA'
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

