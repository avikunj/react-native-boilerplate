import HomeScreen from '../screens/home';
import NotificationsScreen from '../screens/notifications';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import SettingsScreen from '../screens/settings';

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
    component: NotificationsScreen,
    icon: 'bell',
    showInBottomNav: true,
  },
  {
    name: 'Search',
    title: 'Search',
    component: SearchScreen,
    icon: 'magnify',
    showInBottomNav: true,
  },
  {
    name: 'Profile',
    title: 'Profile',
    component: ProfileScreen,
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
