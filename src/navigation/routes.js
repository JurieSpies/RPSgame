import Home from '../pages/home/Home.page';
import GameOn from '../pages/gameOn/GameOn.page';
import './routes.types';

/**
 * Routes for the applications stack navigation.
 * @type {RouteObject[]}
 */

// TO DISABLE BACK BUTTON ON TITLE FOR A PAGE USE showBackButton: false,
const routes = [
  {
    screen: 'Home',
    component: Home,
    // title: 'Home',
    // subTitle: 'Home',
  },
  {
    screen: 'GameOn',
    component: GameOn,
    title: 'Game On!',
    // subTitle: 'User Selection ',
  },
];

export default routes;
