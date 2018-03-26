import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allPets: any;
  editPet: any;
  id: any;
 

  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _appcomponent: AppComponent, 
    private _router: Router ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params['id'])
      this.id = params['id'];   /* stored the id*/
      this.singlePet(this.id) 
  })}


  sendallPets() {
    let observable = this._http.getPets();
    observable.subscribe(data => {
      console.log(" All Pets in Edit", data)
      // console.log(data);
      // this will parse through the data
      this.allPets = data

      // console.log(this.allPets)
    })
  }

  updateSubmit() {
    let observable = this._http.updateById(this.editPet._id, this.editPet)
    observable.subscribe(pets => {
      this.sendallPets();
      this.goDetails();
    });
  }
  /* in charge of getting one,*/
  singlePet(id) {
    let observable = this._http.getPetsById(id);
    observable.subscribe(pets => {
      console.log("Showing One Pet.", pets)
      this.editPet = pets;
    })}

    goDetails() {
      this._router.navigate(['/details/', this.editPet._id]);
    }

    clickLikes() {

    }
}
