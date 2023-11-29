import { NavigationContainer } from '@react-navigation/native';
import Drawer from './drawer.routes';
import AuthRoutes from './auth.routes';

function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    )
};

export default Routes;