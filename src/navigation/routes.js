import Home from '../pages/home/Home.page';
import Settings from '../pages/settingsPage/Settings.page';
import './routes.types';

/**
 * Routes for the applications stack navigation.
 * @type {RouteObject[]}
 */

// TO DISABLE BACK BUTTON ON TITLE FOR A PAGE USE showBackButton: false,
const routes = [
  //PAGE WITH TABS EXAMPLE
  {
    screen: 'Home',
    showBackButton: false,
    tabs: [
      {
        screen: 'Home',
        component: Home,
        iconFamily: 'Feather',
        iconName: 'home',
      },
      {
        screen: 'Settings',
        component: Settings,
        showBackButton: false,
        iconFamily: 'Feather',
        iconName: 'map',
      },
    ],
  },
  // {
  //   screen: 'Home',
  //   component: Home,
  //   title: 'Home',
  //   subTitle: 'Home',
  // },
  {
    screen: 'Settings',
    component: Settings,
    title: 'User Selection',
    subTitle: 'User Selection title',
  },
];

export default routes;
