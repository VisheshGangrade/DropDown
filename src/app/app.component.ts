import { Component } from '@angular/core';
import { Country } from './model/country';
import { State } from './model/state';
import { City } from './model/city';
import { CountrystatecityService } from './services/countrystatecity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-call-withkey';

constructor(private countrystatecityService: CountrystatecityService){}

  listcountry!: Country[]
  countrySelected!: string
  listState!: State[]
  selectedState!: string
  listCity!: City[]
  selectedCity!: string

ngOnInit(){
  this.fetchCountry();
}

private fetchCountry(){
  this.countrystatecityService.getCountry().subscribe(data=>{
  this.listcountry = data.result;
  console.log('Countries fetched', this.countrySelected)
  //console.log(this.countrystatecityService)
 
  })

}
  

onCountrySelected(result: any){
  //console.log(result);
  for(let obj of this.listcountry){
    if(obj.id==result){
      console.log(obj.name +" "+ obj.id);
    }
  }
  this.countrystatecityService.getStateOfSelectedCountry(result).subscribe(data=>{
    this.listState = data.result;
    console.log('States Retrieved', this.listState)
    
   
  })
}
onStateSelected(countryparam = this.countrySelected, stateparam = this.selectedState){
  for(let obj of this.listState){
    if(obj.id +''==this.selectedState){
      console.log(obj.name +" "+ obj.id);
    }
  }
this.countrystatecityService.getCitiesOfSelectedState(countryparam, stateparam).subscribe(data=>{
  this.listCity = data.result;
  console.log('Cities retrieved', this.listCity)
  })
}

  onCitySelected(result:any){
    for(let obj of this.listCity){
      if(obj.id +''==this.selectedCity){
        console.log(obj.name +" "+ obj.id);
      }
    }
    
  }
}
