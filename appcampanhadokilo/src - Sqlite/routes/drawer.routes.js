import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import Login from '../pages/login';

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name='Menu'
            component={TabRoutes}
            options={{
                drawerIcon: ({color, size}) => <Feather
                 name="home" 
                 color={color} 
                 size={size} />,
                 drawerLabel: 'Campanha do Quilo'
            }}
            />
            <Drawer.Screen
            name='Doar'
            component={StackRoutes}
            options={{
                drawerIcon: ({color, size}) => <Feather
                 name="package" 
                 color={color} 
                 size={size} />,
                 drawerLabel: 'Doar'
            }}
            />

        </Drawer.Navigator>
    )
}

export default DrawerRoutes;