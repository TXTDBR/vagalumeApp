import { Component, OnInit } from '@angular/core';
import { HotspotsService } from '../providers/hotspots.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public hotSpot:any = []; 
//  private dateUs:any = [];
  constructor(private serviceProvider: HotspotsService){

  }
  
  ngOnInit() {
    this.carregarHotSpot()
  }

  carregarHotSpot(param:string = 'hotspots.php?apikey='){
    this.serviceProvider.getHotSpot(param).subscribe(
      data => {
        let rs = (data as any);
        this.hotSpot = rs.hotspots;
        console.log(this.hotSpot);
      }, error => {
        console.log(error);
      }
    );
  }

}
