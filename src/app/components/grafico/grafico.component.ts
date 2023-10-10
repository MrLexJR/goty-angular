import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnDestroy {
  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 300,
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 500,
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 150,
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 200,
  //   },
  // ];

  // intervalo;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Voos';

  colorScheme = 'nightLights';

  constructor() {
    // this.intervalo = setInterval(() => {
    //   const newResults = [...this.results];

    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults];
    // }, 1500);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }
}
