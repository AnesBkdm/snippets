import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Navbar from './components/system/Navbar';
import Player from './components/audio/Player';

import Collection from './components/screens/collection/Collection';
import Wallet from './components/screens/wallet/Wallet';
import Profile from './components/screens/profile/Profile';

const Tabs = createBottomTabNavigator();

export default function App() {
const [ navSelect, setNavSelect ] = useState("collection");

return (

<Tabs.Navigator>
<Tabs.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
<Tabs.Screen name="Collection" component={Collection} options={{ headerShown: false }} />
<Tabs.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
</Tabs.Navigator>



);
}