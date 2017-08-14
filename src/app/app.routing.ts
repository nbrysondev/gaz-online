import {Routes, RouterModule} from '@angular/router';
// Menu components
import {MainMenuComponent,CompetitorsMenuComponent, DifficultyMenuComponent, PlanetsMenuComponent,
        PlayersMenuComponent, ShipMenuComponent} from './components/menus';
// Core component
import {GameComponent, DepartComponent, GraphsComponent, HelpComponent, HyperspaceComponent,
        NewWeekComponent, IntroductionComponent, PlanetIntroComponent} from './components';
// Planet landing components
import {PlanetComponent, AdvertisingComponent, BankComponent, FuelComponent, InsuranceComponent,
        LenderLoanComponent, LoanComponent, MarketplaceComponent, PassengersComponent, StockMarketComponent,
        SupplyComponent, TaxesComponent, WagesComponent, WarehouseComponent} from './components/planet';
// Planet specific components
import {ExplorePlanetComponent, PlanetAboutComponent, PlanetNewsComponent,
        PlanetSpecialComponent, PlanetTimeComponent, PlanetWeatherComponent} from './components/explore-planet';
// Guards
import { GameGuard, PlanetGuard, NewGameGuard } from './guards';

const appRoutes: Routes = [
    {
      path: '',
      component:  MainMenuComponent
    },
    {
      path: 'new',
      canActivate: [NewGameGuard],
      children: [
        { path: '', redirectTo: 'select-difficulty', pathMatch: 'full' },
        {
          path: 'select-difficulty',
          component: DifficultyMenuComponent
        },
        {
          path: 'select-players',
          component: PlayersMenuComponent
        },
        {
          path: 'select-planets',
          component: PlanetsMenuComponent
        },
        {
          path: 'competitors',
          component: CompetitorsMenuComponent
        },
        {
          path: 'select-ship',
          component: ShipMenuComponent
        },
        {
          path: 'introduction',
          component: IntroductionComponent
        }
      ]
    },
    {
      path: 'game',
      component: GameComponent,
      canActivate: [GameGuard],
      data: { title: 'newgame' },
      children: [
          { path: '', redirectTo: 'new-week', pathMatch: 'full' },
          {
            path: 'new-week',
            component: NewWeekComponent
          },
          {
            path: 'planet-intro',
            component: PlanetIntroComponent
          },
          {
            path: 'graphs',
            component: GraphsComponent
          },
          {
            path: 'hyperspace',
            component: HyperspaceComponent
          },
          {
            path: 'planet',
            component: PlanetComponent,
            canActivate: [PlanetGuard],
            children: [
              {
                path: 'depart',
                component: DepartComponent
              },
              {
                path: 'fuel',
                component: FuelComponent
              },
              {
                path: 'stock-market',
                component: StockMarketComponent
              },
              {
                path: 'money',
                component: StockMarketComponent
              },
              {
                path: 'bank',
                component: BankComponent
              },
              {
                path: 'loan',
                component: LoanComponent,
              },
              {
                path: 'lender-loan',
                component: LenderLoanComponent
              },
              {
                path: 'marketplace',
                component: MarketplaceComponent
              },
              {
                path: 'supply',
                component: SupplyComponent
              },
              {
                path: 'warehouse',
                component: WarehouseComponent
              },
              {
                path: 'passengers',
                component: PassengersComponent
              },
              {
                path: 'advertising',
                component: AdvertisingComponent
              },
              {
                path: 'wages',
                component: WagesComponent
              },
              {
                path: 'taxes',
                component: TaxesComponent
              },
              {
                path: 'insurance',
                component: InsuranceComponent
              },
              {
                path: 'explore',
                component: ExplorePlanetComponent,
                children: [
                  {
                    path: 'special',
                    component: PlanetSpecialComponent
                  },
                  {
                    path: 'weather',
                    component: PlanetWeatherComponent
                  },
                  {
                    path: 'news',
                    component: PlanetNewsComponent
                  },
                  {
                    path: 'time',
                    component: PlanetTimeComponent
                  },
                  {
                    path: 'about',
                    component: PlanetAboutComponent
                  },
                ]
              },
            ]
          }
      ]
    },
    {
      path: 'load',
      component:  MainMenuComponent
    },
    {
      path: 'loadgroup',
      component:  MainMenuComponent
    },
    {
      path: 'about',
      component:  MainMenuComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);
