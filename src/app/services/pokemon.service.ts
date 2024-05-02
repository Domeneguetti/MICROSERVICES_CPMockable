import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = "http://demo4742780.mockable.io/"
  constructor(private http: HttpClient) { 

  }

  pokemon:Pokemon[] = [
    
  ]

  listar(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl) as Observable<Pokemon[]>;
    //Retorna a URL dos Pokemons
  }

}
