import HomePage from "../components/home/HomePage";
import ArtistsPage from "../components/artists/ArtistsPage";
import ArtistInfoPage from "../components/artists/ArtistInfoPage";
import logo from '../assets/images/oldradio.png';

const mainNavItems = [
  {path: '/', component:HomePage, name: 'Home', exact: true},
  {path: '/artists', component:ArtistsPage, name: 'Artists', exact: true},
  {path: '/artists/:id', component:ArtistInfoPage, name: 'Artist Info', hideInNav: true, exact: true}
];

export const visibleNavItems= () => {
  return mainNavItems.filter((item) => !item.hideInNav);
};

export const navBrandItem = {path: '/', name: 'OldRadio', logo};


export default mainNavItems;
