import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  private dir = "../../../assets/sound/";

  constructor() { }

  public play(sound: string) {
    let audio = new Audio();
    audio.src = this.dir+sound;
    audio.load();
    audio.play();
  }

}
