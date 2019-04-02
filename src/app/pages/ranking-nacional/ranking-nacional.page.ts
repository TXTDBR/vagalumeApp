import { Component, OnInit } from '@angular/core';
import { HotspotsService } from 'src/app/providers/hotspots.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-ranking-nacional',
  templateUrl: './ranking-nacional.page.html',
  styleUrls: ['./ranking-nacional.page.scss'],
})
export class RankingNacionalPage implements OnInit {

  public tipoRanking:string;
  public ranking:any = [];
 
  constructor( private serviceProvier: HotspotsService, 
    private route: ActivatedRoute ) {
      this.tipoRanking = this.route.snapshot.paramMap.get('tipo');
     }

  ngOnInit() {
    this.carregarRanking()
  }

  carregarRanking(){
    this.serviceProvier.getRanking(this.tipoRanking).subscribe(
      (data:any) => {
        if(this.tipoRanking == 'internacional')
        this.ranking = data.art.day.internacional;
        else if(this.tipoRanking == 'nacional'){
          this.ranking = data.art.day.nacional;
        }
        console.log(this.ranking);
      }, error =>{
        console.log(error)
      }
    );
  }
}
