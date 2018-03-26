import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  
  constructor( private _http: HttpClient) { 
    this.getPets();
  }
  getPets() {
    // let tempObservable = this._http.get('/pets');
    // tempObservable.subscribe( data => console.log("Come get your Pets", data));
    // return tempObservable;
    return this._http.get('/pets')
  }

  getPetsById(id) {
    // id was inside the above function.
    let observable = this._http.get('/pets/' + id);
    return this._http.get('/pets/' + id);
  }

  sendallPets() {
    let observable = this.getPets();
    observable.subscribe(data => console.log("All Pets!", data));
  }

  addPet(newPet) {
    // posting data to our route.
    return this._http.post('/pets', newPet)
  }

  updateById(id, editPet) {
    return this._http.post('/pets/edit/' + id, editPet)
  }

  deleteById(id) {
    console.log(" Service delete by id. " + id)
    return this._http.delete("/pets/" + id)
  }
} 
