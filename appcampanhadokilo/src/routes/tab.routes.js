import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/home';
import SobreNos from '../pages/sobreNos';
import Cadastro from '../pages/cadastro';

const Tab = createBottomTabNavigator();

function TabRoutes() {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
            name='home'
            component={Home}
            options={{
                tabBarIcon: ({color, size}) => <Feather
                 name='home' 
                 color={color} 
                 size={size}
                 />,
                 tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen
            name='sobreNos'
            component={SobreNos}
            options={{
                tabBarIcon: ({color, size}) => <Feather
                 name='users' 
                 color={color} 
                 size={size}
                 />,
                 tabBarLabel: 'Quem somos'                 
                }}            
            />
        </Tab.Navigator>
    )
}

export default TabRoutes;