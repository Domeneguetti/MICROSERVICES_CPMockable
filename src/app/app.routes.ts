import { Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { EstadosComponent } from './components/estados/estados.component';

export const routes: Routes = [
    {path: '', component: PokemonComponent},
    {path: 'pokemons', component: PokemonComponent},
    {path: 'estadosbr', component: EstadosComponent},
];
