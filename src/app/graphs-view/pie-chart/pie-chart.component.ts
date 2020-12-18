/*A REFACTO AVEC COLUMN*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CanvasJS from 'src/app/canvasjs.min';
import { DataModel } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
 
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
 
export class PieChartComponent implements OnInit {

  newPieData: FormGroup;
  chart: CanvasJS.Chart;

  constructor(private dataService: DataService, private fb: FormBuilder) {

    this.newPieData = this.fb.group({
      data: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

	ngOnInit() {

	this.chart = new CanvasJS.Chart("chartContainer", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title:{
			text: "Pie Chart"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
			indexLabel: "{name} - #percent%",
			dataPoints: this.dataService.getAll()
		}]
  });
		
	this.chart.render();
  }

    newPieChartData(data: number, name: string){
      this.dataService.create(new DataModel(data, name));
    }
    
    onSubmitPieData(){      
      this.newPieChartData(this.newPieData.value.data, this.newPieData.value.name);
      this.chart.render();
      this.newPieData = this.fb.group({
        data: ['', Validators.required],
        name: ['', Validators.required]
      })
    }
}