import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet : any;
  allPets : any;
  err = ""; 
  constructor( private _http: HttpService, private _route: ActivatedRoute, private _router: Router ) { }
  
  ngOnInit() {
    this.newPet = { name: "", type: "", desc: "", skill1: "", skill2: "", skill3: "" }
  }

  sendallPets() {
    let observabele = this._http.getPets();
    observabele.subscribe(data => {
      console.log(" All the Pets", data)
      this.allPets = data
    })
  }

  onSubmit() {
    let observable = this._http.addPet(this.newPet);
    observable.subscribe(response => {
      if (response == "Pet validation failed: name: Pet name required") {
        this.err = "Pet name must have at least 3 characters, come you can do it! Shaggy, Scooby, etc...";
        this.refresh();
      } else if (response == "You failed your pet! Validations pet name must have at least 3 characters") {
        this.err = "Really, Pet name must have at least 3 characters";
        this.refresh();
      } else {
        console.log(response);
        this.newPet = response;
        this.goHome();
      }
    })
  }

  goHome() {
    this._router.navigate(['/home']);
  }

  refresh() {
    this._router.navigate(['/new']);
  }
}
