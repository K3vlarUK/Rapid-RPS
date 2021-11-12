import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Play from './screens/Play';
import Settings from './screens/Settings';
import Contact from './screens/Contact';

const Stack = createNativeStackNavigator();

export interface AppStackProps {}

const AppStack: React.FC<AppStackProps> = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Play" component={Play} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )
}

export default AppStack;