import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
    { 
      path: '', 
      component:  MainMenuComponent
    },
    { 
      path: 'new', 
      component:  MainMenuComponent,
      children: [
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
          component: CompetitorsComponent
        },
        {
          path: 'select-ship',
          component: ShipMenuComponent
        },
      ]
    },
    {
      path: 'game'
      component: GameComponent,
      canActivate: [GameGuard],
      data: { title: 'newgame' },
      children: [
          { 
            path: 'new-week', 
            component: NewWeekComponent
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
                component: ExploreComponent,
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
