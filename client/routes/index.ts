import HomeScreen from '../screens/home';
import NotificationsScreen from '../screens/notifications';
import ProfileScreen from '../screens/profile';
import EditProfileScreen from '../screens/profile-edit';
import SearchScreen from '../screens/search';
import SearchResultsScreen from '../screens/search-results';
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
    name: 'Search Results',
    title: 'Search Results',
    component: SearchResultsScreen,
    icon: 'magnify',
    showInBottomNav: false,
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
  {
    name: 'Edit Profile',
    title: 'Edit Profile',
    component: EditProfileScreen,
    icon: 'cog',
    showInBottomNav: false,
  },
];
