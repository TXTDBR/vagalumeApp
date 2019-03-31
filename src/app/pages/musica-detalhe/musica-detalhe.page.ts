import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotspotsService } from 'src/app/providers/hotspots.service';

@Component({
  selector: 'app-musica-detalhe',
  templateUrl: './musica-detalhe.page.html',
  styleUrls: ['./musica-detalhe.page.scss'],
})
export class MusicaDetalhePage implements OnInit {
  
  public musica:any;
  public id:any = 1;
  public artist = {};
  public musicaTraduzida = {};

  constructor(private route: ActivatedRoute,
   private serviceProvier: HotspotsService,
   private router: Router) { 
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.carregarDetalhes();
  }

  carregarDetalhes(){
    this.serviceProvier.getMusicById(this.id).subscribe(
      data => {
        let rs = (data as any);
        this.artist = rs.art;
        this.musica = rs.mus;
        this.musicaTraduzida = this.musica;
        console.log();
      }, error =>{
        console.log(error)
      }
    );
  }


}
