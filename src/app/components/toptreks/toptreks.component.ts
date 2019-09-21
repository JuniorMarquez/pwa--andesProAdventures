import { Component, OnInit ,Inject} from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-toptreks',
  templateUrl: './toptreks.component.html',
  styleUrls: ['./toptreks.component.css']
})
export class ToptreksComponent implements OnInit {

 title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };


  constructor(private dataApi: DataApiService) { }

public tixs:TixInterface;
 getAllTixs(){
//      this.dataApi.getAllTixs().subscribe(tixs => console.log(tixs));
        this.dataApi
        .getAllTixs()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    }


  ngOnInit() {
  	 this.getAllTixs();
   		//this.filter();
  		//$.getScript('assets/js/collage.js');
		//$.getScript('assets/js/custom.js');
		//this._ps.imagesG=[];
		//this.product=[]	;	
  }

}
