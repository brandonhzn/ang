import { Component, OnInit } from '@angular/core';
import { Guia } from '../guiam';
import { GUIAS } from '../mock-guias';
import { GuiaService } from '../guia.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {
  guia: Guia = {
    id: 1,
    name: '',
    telefono: '2'
  };
  guias: Guia[];
  selectedGuia: Guia;
  constructor(private guiaService: GuiaService) { }

  ngOnInit() {
    this.getGuias();
  }
  onSelect(guia: Guia): void {
    this.selectedGuia = guia;
  }

  getGuias(): void {
    this.guiaService.getGuias()
        .subscribe(guias => this.guias = guias);
  }
}

