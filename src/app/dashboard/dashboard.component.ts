import { Component, OnInit } from '@angular/core';
import { Guia } from '../guiam';
import { GuiaService } from '../guia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  guias: Guia[] = [];

  constructor(private guiaService: GuiaService) { }

  ngOnInit() {
    this.getGuias();
  }

  getGuias(): void {
    this.guiaService.getGuias()
      .subscribe(guias => this.guias = guias.slice(1, 5));
  }
}
