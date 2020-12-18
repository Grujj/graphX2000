import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraphsViewComponent } from './graphs-view/graphs-view.component';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ColumnChartComponent } from './graphs-view/column-chart/column-chart.component';
import { PieChartComponent } from './graphs-view/pie-chart/pie-chart.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
  { path: 'graphs/pie', component: PieChartComponent},
  { path: 'graphs/column', component: ColumnChartComponent},
  { path: 'graphs', component: GraphsViewComponent},
  { path: '', component: GraphsViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GraphsViewComponent,
    ColumnChartComponent,
    PieChartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
