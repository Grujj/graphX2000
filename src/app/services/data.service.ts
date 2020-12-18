/*A REFACTO AVEC COLUMN*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: DataModel;
  allData: Array<DataModel>;

  constructor(private httpClient: HttpClient) {
    this.allData = new Array<DataModel>();
   }

  getAll(): Array<DataModel> {
    return this.allData;
    //return this.httpClient.get<PieChartModel[]>("http://localhost:3000/pieChart")
  }

  getOne(name: string): DataModel{
    for(let data of this.allData){
      if(data.name == name){
        return data;
      }
      else{
        return new DataModel(0, "default");
      }
    }
    //return this.httpClient.get<PieChartModel>("http://localhost:3000/pieChart/" + name)
  }

  create(pieChart: DataModel): void {
    this.allData.push(new DataModel(pieChart.y, pieChart.name));
    
    //return this.httpClient.post<PieChartModel>("http://localhost:3000/pieChart", pieChart)
  }

  update(data: DataModel): void{
    //return this.httpClient.put<PieChartModel>("http://localhost:3000/pieChart", pieChart)
  }

  delete(name: string): any{
    //return this.httpClient.delete("http://localhost:3000/pieChart/" + name)
  }
}
