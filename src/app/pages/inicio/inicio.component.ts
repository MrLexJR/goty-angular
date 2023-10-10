import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService
      .getGames()
      .pipe(
        map((resp: Game[]) =>
          resp.map(({ name, votos }) => ({ name, value: votos }))
        )
      )
      .subscribe((res) => {
        this.juegos = res;
      });
  }
}
