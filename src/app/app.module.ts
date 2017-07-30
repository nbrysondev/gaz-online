import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { FormsModule } from '@angular/forms';
import { routing }        from './app.routing';
import { GlobalErrorHandler } from './exceptions/global-error-handler';

import { AppComponent } from './app.component';
// Menu components
import {MainMenuComponent,CompetitorsMenuComponent, DifficultyMenuComponent, PlanetsMenuComponent,
        PlayersMenuComponent, ShipMenuComponent} from './components/menus';
// UI
import {MenuItemComponent} from './components/menu-item/menu-item.component';
// Core component
import {GameComponent, DepartComponent, GraphsComponent, HelpComponent, HyperspaceComponent,
       NewGameComponent, NewWeekComponent} from './components';
// Planet landing components
import {PlanetComponent, AdvertisingComponent, BankComponent, FuelComponent, InsuranceComponent,
        LenderLoanComponent, LoanComponent, MarketplaceComponent, PassengersComponent, StockMarketComponent,
        SupplyComponent, TaxesComponent, WagesComponent, WarehouseComponent} from './components/planet';
// Planet specific components
import {ExplorePlanetComponent, PlanetAboutComponent, PlanetNewsComponent,
        PlanetSpecialComponent, PlanetTimeComponent, PlanetWeatherComponent} from './components/explore-planet';
// Guards
import {GameGuard, PlanetGuard} from './guards';

// Services
import {ContentService, SoundService} from './services';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    ExplorePlanetComponent,
    HelpComponent,
    MainMenuComponent,
    DifficultyMenuComponent,
    PlayersMenuComponent,
    PlanetsMenuComponent,
    CompetitorsMenuComponent,
    ShipMenuComponent,
    GameComponent,
    NewWeekComponent,
    GraphsComponent,
    HyperspaceComponent,
    PlanetComponent,
    DepartComponent,
    FuelComponent,
    StockMarketComponent,
    BankComponent,
    LoanComponent,
    LenderLoanComponent,
    MarketplaceComponent,
    SupplyComponent,
    WarehouseComponent,
    PassengersComponent,
    AdvertisingComponent,
    WagesComponent,
    TaxesComponent,
    InsuranceComponent,
    PlanetSpecialComponent,
    PlanetWeatherComponent,
    PlanetNewsComponent,
    PlanetTimeComponent,
    PlanetAboutComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    routing
  ],
  providers: [
    ContentService,
    SoundService,
    GameGuard, 
    PlanetGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
