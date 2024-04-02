import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../tournament.service";
import {TournamentDTO} from "../rest";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-tournament-list',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './tournament-list.component.html',
})
export class TournamentListComponent implements OnInit {

  tournaments: TournamentDTO[] = [];
  loading = false;
  loadingMsg: string|null = null;

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit(): void {
    this.doFetch();
  }

  onClickRefresh() {
    this.doFetch();
  }

  doFetch() {
    this.loading = true;
    this.loadingMsg = 'Loading..';
    this.tournamentService.listTournaments().subscribe({
      next: data => {
        this.tournaments = data;
        this.loading = false;
        this.loadingMsg = null;
      }, error: err => {
        console.error('Failed to fetch tournaments ', err);
        this.loading = false;
        this.loadingMsg = 'Failed to get tournaments ' + err.message;
      }
    });
  }

  onClickAddPlayer() {
      // Code à exécuter lors du clic sur "Ajouter un joueur"
      // Par exemple, vous pouvez naviguer vers une nouvelle page ou afficher un formulaire modal pour ajouter un joueur
    }

    onClickClose() {
      // Code à exécuter lors du clic sur "Fermer"
      // Par exemple, vous pouvez fermer la fenêtre modale ou revenir à la page précédente
    }
}
