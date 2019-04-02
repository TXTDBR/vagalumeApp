import { Component, OnInit } from '@angular/core';
import { HotspotsService } from 'src/app/providers/hotspots.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking-nacional',
  templateUrl: './ranking-nacional.page.html',
  styleUrls: ['./ranking-nacional.page.scss'],
})
export class RankingNacionalPage implements OnInit {

  public tipoRanking:string = "internacional";
  public ranking = [];
  constructor( private serviceProvier: HotspotsService, 
    private route: ActivatedRoute ) {
      console.log(this.route.snapshot.paramMap.get('tipo'))
     }

  ngOnInit() {
    this.carregarRanking()
  }

  carregarRanking(){
    this.serviceProvier.getRanking(this.tipoRanking).subscribe(
      data => {
        let rs = (data as any);
        
        this.ranking = rs.nacional;
       
        console.log(  this.ranking);
      }, error =>{
        console.log(error)
      }
    );
  }
}
