import { Component, OnInit } from '@angular/core';
import { HotspotsService } from '../providers/hotspots.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public hotSpot:any = [];
  public music_name:string; 
  private musicas:any = [];
  constructor(private serviceProvider: HotspotsService,
    private loadingController: LoadingController){

  }
  
  ngOnInit() {
    this.carregarHotSpot()
  }

  buscarPorNome(){
   
    this.serviceProvider.getMusicByName(this.music_name).subscribe(
      data => {
        let rs  = (data as any);
        if(this.music_name != ''){
          this.musicas = rs.response;
         
        }
         
      }, error =>{
        console.log(error);
      }
    );
  }

  async carregarHotSpot(param:string = 'hotspots.php?apikey='){
    const loading = await this.loadingController.create({
      message: 'Carregando filmes...'
    });

    await loading.present();
    this.serviceProvider.getHotSpot(param).subscribe(
      data => {
        let rs = (data as any);
        this.hotSpot = rs.hotspots;
        console.log(this.hotSpot);
        loading.dismiss();
      }, error => {
        console.log(error);
      }
    );
  }

  doRefresh(event) {
    this.carregarHotSpot();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

}
