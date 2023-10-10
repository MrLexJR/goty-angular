import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoComponent } from './grafico/grafico.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    NavbarComponent,
    GraficoComponent
  ],
  exports: [
    NavbarComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
