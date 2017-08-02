import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  private dir = "../../../assets/sound/";
  private playing: HTMLAudioElement;

  constructor() { }

  public play(filename: string) {
    this.playing  = new Audio();
    this.playing.src = this.dir+filename;
    this.playing.load();
    this.playing.play();
  }

  public stop() {
    if (this.playing) {
      this.playing.pause();
      this.playing = null;
    }
  }
}
