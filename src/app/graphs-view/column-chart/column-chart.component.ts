/*A REFACTO AVEC PIECHART*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CanvasJS from 'src/app/canvasjs.min';
import { DataModel } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
 
export class ColumnChartComponent implements OnInit {

	newColumnData: FormGroup;
	chart: CanvasJS.Chart;
	  
	  constructor(private dataService: DataService, private fb: FormBuilder) {

		this.newColumnData = this.fb.group({
		  data: ['', Validators.required],
		  name: ['', Validators.required]
		})

	  }

	  ngOnInit() {
			this.chart = new CanvasJS.Chart("chartContainer", {
				theme: "light2",
				animationEnabled: true,
				exportEnabled: true,
				title: {
					text: "Basic Column Chart in Angular"
				},
				data: [{
					type: "column",
					dataPoints: this.dataService.getAll()
				}]
			});
			this.chart.render();
		}	
	

	newColumnChartData(data: number, name: string){
		this.dataService.create(new DataModel(data, name));
	}
	
	onSubmitColumnData(){      
		this.newColumnChartData(this.newColumnData.value.data, this.newColumnData.value.name);

		this.newColumnData = this.fb.group({
		  data: ['', Validators.required],
		  name: ['', Validators.required]
		})

		this.chart.render();
	}

	
}