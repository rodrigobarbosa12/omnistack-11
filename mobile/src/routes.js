import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../src/pages/Detail';
import Incidents from '../src/pages/Incidents';

const AppStak = createStackNavigator();
/**
 * headerShown Remove o cabeçalho
 */
const Routes = () => (
    <NavigationContainer>
        <AppStak.Navigator screenOptions={{ headerShown: false }}>
            <AppStak.Screen name="incidents" component={Incidents}/>
            <AppStak.Screen name="detail" component={Detail}/>
        </AppStak.Navigator>
    </NavigationContainer>
);

export default Routes;
