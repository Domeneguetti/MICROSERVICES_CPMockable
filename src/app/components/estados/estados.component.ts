import { Component } from '@angular/core';
import { Estados } from '../../interfaces/Estados';
import { EstadosService } from '../../services/estados.service';

@Component({
  selector: 'app-estados',
  standalone: true,
  imports: [],
  templateUrl: './estados.component.html',
  styleUrl: './estados.component.css'
})
export class EstadosComponent {
  estados:Estados[] = [];

  constructor(private estadosService:EstadosService) {  }

  listar():void {
    this.estadosService.listar().subscribe((listEstados) => (this.estados = listEstados));
  }

  ngOnInit():void {
    this.listar();
  }

}
