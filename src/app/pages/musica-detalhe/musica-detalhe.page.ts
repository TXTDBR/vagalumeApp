import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotspotsService } from 'src/app/providers/hotspots.service';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-musica-detalhe',
  templateUrl: './musica-detalhe.page.html',
  styleUrls: ['./musica-detalhe.page.scss'],
})
export class MusicaDetalhePage implements OnInit {
  
  public musica:any = [];
  public id:any = 1;
  public artist = {};
  private original = "true";
  public vsMusica = [];

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
      (data:any) => {
        this.vsMusica = data.mus[0];
        if(this.original == "true"){
          this.musica  = this.vsMusica;
        }else if(this.original == "false"){
          this.musica = this.musica.translate[0];
        }
        console.log(this.musica);
        console.log(this.original);
      }, error =>{
        console.log(error)
      }
    );
  }


}
