import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
	 options: Object;
	constructor() { 
        this.options = {
            title : { text : 'Bitcoin Price' },
            series: [{
                data: [29.9, 71.5, 106.4, 129],
            }]
        };
    }
}


