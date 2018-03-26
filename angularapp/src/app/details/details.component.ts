import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  allPets: any;
  onePet: any;
  id: any;
  likes = 0;

  constructor( 
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => { console.log(params['id'])
      this.id = params['id'];   /* stored the id*/
      this.singlePet(this.id)
  })}

  sendallPets(){
    let observable = this._http.getPets();
    observable.subscribe(data => {
      console.log(" All Pets", data)
      console.log(data);
      // this will parse through the data
      this.allPets = data

      // console.log(this.allPets)
    })
  }

  onClickupdate(pets) {
    // this.onePet = pets
    console.log(this.onePet)
  }

  updateSubmit() {
    let observable = this._http.updateById(this.onePet._id, this.onePet)
    observable.subscribe(pets => {
      this.sendallPets();
    });
  }

  
  singlePet(id) {
    let observable = this._http.getPetsById(id);
    observable.subscribe(data => {
      console.log("Showing One Pet.", data)
      this.onePet = data;
    })}

  onClickDelete(id) {
    console.log(id)
    let observable = this._http.deleteById(id)
    observable.subscribe(data => {
      // console.log(data, "is deleted.");
      this.sendallPets();
      this.goHome();
    })}
    
  goHome() {
    this._router.navigate(['/home']);
  }

  clickLikes() {
    this.onePet.likes = 1;
    console.log('Pet liked, now how can we get them to adopt.', this.onePet.likes);
    return this.onePet.likes;
  }
}
