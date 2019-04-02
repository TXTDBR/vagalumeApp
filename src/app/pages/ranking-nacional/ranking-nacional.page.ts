import { Component, OnInit } from '@angular/core';
import { HotspotsService } from 'src/app/providers/hotspots.service';

@Component({
  selector: 'app-ranking-nacional',
  templateUrl: './ranking-nacional.page.html',
  styleUrls: ['./ranking-nacional.page.scss'],
})
export class RankingNacionalPage implements OnInit {

  public ranking:string;
  public nacional = [];
  constructor( private serviceProvier: HotspotsService) { }

  ngOnInit() {
    this.carregarRanking()
  }

  carregarRanking(){
    this.serviceProvier.getRanking(this.ranking).subscribe(
      data => {
        let rs = (data as any);
        
        this.nacional = rs.nacional;
       
        console.log(  this.nacional);
      }, error =>{
        console.log(error)
      }
    );
  }
}
