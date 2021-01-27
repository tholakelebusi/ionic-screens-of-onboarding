import { Component,OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public onbordslide=[];
  @ViewChild('mainslides',{static:true}) slides: IonSlides;
  // @ViewChild('mySlider', { static: true }) slides: IonSlides;
  constructor() {}
ngOnInit(){
this.onbordslide=[
{
  title:'Book Lover',
  img:'pic1',
  description:'Best books of all time - Read Novels',
},
{
  title:'Book Lover',
  img:'pic2',
  description:'Always have a book on desk.'
},
{
  title:'Book Lover',
  img:'pic3',
  description:'Benefits of Reading Books:'+
  ' *Strengthens the brain. '+
  ' *Reduces stress.',
}
];
}




goBack()
{
  this.slides.slidePrev();

}

goNext()
{
  this.slides.slideNext();
 
}
}
