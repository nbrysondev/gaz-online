import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  private message: string;
  private image: string;

  constructor() { }

  public setContent(message: string, image: string) {

  }

  public getImage() {
    return this.image;
  }

  public getMessage() {
    return this.message;
  }

}
