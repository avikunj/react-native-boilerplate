import {HomeScreen, SettingsScreen} from '../components/bottomNavigation';

export const routes = [
  {
    name: 'Home',
    title: 'Home',
    component: HomeScreen,
    icon: 'home',
    showInBottomNav: true,
  },
  {
    name: 'Alerts',
    title: 'Alerts',
    component: HomeScreen,
    icon: 'bell',
    showInBottomNav: true,
  },
  {
    name: 'Search',
    title: 'Search',
    component: HomeScreen,
    icon: 'magnify',
    showInBottomNav: true,
  },
  {
    name: 'Profile',
    title: 'Profile',
    component: HomeScreen,
    icon: 'account',
    showInBottomNav: true,
  },
  {
    name: 'Settings',
    title: 'Settings',
    component: SettingsScreen,
    icon: 'cog',
    showInBottomNav: true,
  },
];
