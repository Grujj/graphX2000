/*A REFACTO AVEC COLUMN*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CanvasJS from 'src/app/canvasjs.min';
import { DataModel } from 'src/app/models/data.model';
import { DataService } from 'src/app/services/data.service';
 
@Component({
  selector: 'app-pyramid-chart',
  templateUrl: './pyramid-chart.component.html',
  styleUrls: ['./pyramid-chart.component.css']
})
 
export class PyramidChartComponent implements OnInit {

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
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title:{
        text: "Pyramid Chart"
      },
      data: [{
        type: "pyramid",
        toolTipContent: "<b>{label}</b>: {y}%",
        indexLabelFontColor: "#5A5757",
        indexLabelFontSize: 16,
        indexLabel: "{label}({y}%)",
        indexLabelPlacement: "inside",
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