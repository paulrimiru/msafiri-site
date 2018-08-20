import LandingPage from '../pages/LandingPage';
import App from '../App';

const routes = [
  { path: '/', component: App, exact: false },
  { path: '/', component: LandingPage, exact: true }
];

export default routes;
