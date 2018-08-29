import { Component, OnInit, Input } from '@angular/core';
import { Guia } from '../guiam';
import { GuiaService } from '../guia.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-guia-detail',
  templateUrl: './guia-detail.component.html',
  styleUrls: ['./guia-detail.component.css']
})
export class GuiaDetailComponent implements OnInit {
  @Input() guia: Guia;
  constructor(  private route: ActivatedRoute,
    private guiaService: GuiaService,
    private location: Location) { }

  ngOnInit() {
    /*this.getGuia();*/
  }
  /*getGuia(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.guiaService.getGuia(id);
      .subscribe(guia => this.guia = guia);
  }*/
}
