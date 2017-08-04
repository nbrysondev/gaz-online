import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  private dir = "../../../assets/sound/";
  private playing: HTMLAudioElement;
  private enabled: boolean;

  constructor() { 
    this.enabled = true;
  }

  public play(filename: string) {
    if (this.enabled) {
      this.playing  = new Audio();
      this.playing.src = this.dir+filename;
      this.playing.load();
      this.playing.play();
    }
  }

  public stop() {
    if (this.playing) {
      this.playing.pause();
      this.playing = null;
    }
  }

  public isEnabled() {
    return this.enabled;
  }

  public toggleSound() {
    this.enabled = !this.enabled;
  }
}
