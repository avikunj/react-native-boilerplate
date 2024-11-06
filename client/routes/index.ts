import { HomeScreen, SettingsScreen } from "../components/bottomNavigation";

export const routes = [
    {
        name:"Home",
        title:"Home",
        component:HomeScreen,
        icon:"home"
    },
    {
        name:"Alerts",
        title:"Alerts",
        component:HomeScreen,
        icon:"bell"
    },
    {
        name:"Search",
        title:"Search",
        component:HomeScreen,
        icon:"magnify"
    },
    {
        name:"Profile",
        title:"Profile",
        component:HomeScreen,
        icon:"account"
    },
    {
        name:"Settings",
        title:"Settings",
        component:SettingsScreen,
        icon:"cog"
    },
]