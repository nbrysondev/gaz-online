import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { InfoComponent } from './components/messages/info/info.component';
import { PlanetMenuComponent } from './components/planet-menu/planet-menu.component';
import { ExplorePlanetComponent } from './components/explore-planet/explore-planet.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    MenuItemComponent,
    InfoComponent,
    PlanetMenuComponent,
    ExplorePlanetComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
