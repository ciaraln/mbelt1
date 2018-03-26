import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allPets: any;
  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router){} 

  ngOnInit() {
    this.sendallPets();
  }

  sendallPets() {
    let observable = this._http.getPets();
    observable.subscribe(data => {
      // console.log(" All pets", data)
      // console.log(data);
      // this will parse through the data
      this.allPets = data

      console.log("all the pets: ", this.allPets)
    })
  }


  // onClickDelete(id) {
  //   console.log(id)
  //   let observable = this._http.deleteById(id)
  //   observable.subscribe(data => {
  //     console.log(data, "is deleted.");
  //     this.sendallPets()
  //   })
  // }

}
