import { Injectable } from '@angular/core';
import { Ship } from '../models';

@Injectable()
export class SoundService {

  private dir = '../../../assets/';
  private playing: HTMLAudioElement;
  private enabled: boolean;

  constructor() {
    this.enabled = true;
  }

  public play(filename: string) {
    if (this.enabled) {
      this.playing  = new Audio();
      this.playing.src = this.dir + filename;
      this.playing.load();
      this.playing.play();
    }
  }

  public playFile(filename: string) {
    this.play('general/sound/' + filename);
  }

  public playBoing() {
    this.play('general/sound/main-menu-select.ogg');
  }

  public playShipSound(ship: Ship) {
    this.play('ships/' + ship.slug + '/sound.ogg');
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
