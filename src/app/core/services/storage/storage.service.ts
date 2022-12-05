import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage;

  constructor(private storage: Storage) { }

  get storageInstance() {
    return this._storage ? Promise.resolve(this._storage) :
      this.storage.defineDriver(CordovaSQLiteDriver)
        .then(() => this.storage.create())
        .then((instance) => {
          this._storage = instance;
          return instance;
        });
  }

  set(key: string, value: any) {
    return this.storageInstance
      .then((_) => _.set(key, JSON.stringify(value)))
      .then(() => value);
  }

  get(key: string) {
    return this.storageInstance
      .then((_) => _.get(key))
      .then((value) => JSON.parse(value));
  }

  remove(key: string) {
    return this.storageInstance.then((_) => _.remove(key));
  }

  clear() {
    return this.storageInstance.then((_) => _.clear());
  }

}

