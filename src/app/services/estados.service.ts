import { Injectable } from '@angular/core';
import { Estados } from '../interfaces/Estados';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private pokemonUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
  constructor(private http: HttpClient) { 

  }

  pokemon:Estados[] = [
    
  ]

  listar(): Observable<Estados[]> {
    return this.http.get<Estados[]>(this.pokemonUrl) as Observable<Estados[]>;
    //Retorna a URL dos Estados
  }
  
}
