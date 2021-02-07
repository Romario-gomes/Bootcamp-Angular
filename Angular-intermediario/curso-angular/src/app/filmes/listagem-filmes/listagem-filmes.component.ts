import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  filmes: Filme[] = [];
  readonly qtdPagina = 4;
  pagina = 0;
  
  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.listarFilmes();
    /* this.filmesService.listar().subscribe((filmes: Filme[]) => this.filmes = filmes); */
  }
  onScroll(): void{
    this.listarFilmes();
  }
  private listarFilmes(): void{
    this.pagina++;
    this.filmesService.listar(this.pagina, this.qtdPagina)
    .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }
}
