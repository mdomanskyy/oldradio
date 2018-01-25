import HomePage from "../components/home/HomePage";
import ArtistsPage from "../components/artists/ArtistsPage";
import logo from '../assets/oldradio.png';

const mainNavItems = [
  {path: '/', component:HomePage, name: 'Home', exact: true},
  {path: '/artists', component:ArtistsPage, name: 'Artists'}
];

export const navBrandItem = {path: '/', name: 'OldRadio', logo};


export default mainNavItems;
