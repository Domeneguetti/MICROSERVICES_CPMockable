import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { EstadosComponent } from './components/estados/estados.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PokemonComponent, HttpClientModule, NavbarComponent, EstadosComponent]
})

export class AppComponent {
  title = 'checkpoint2';
}
