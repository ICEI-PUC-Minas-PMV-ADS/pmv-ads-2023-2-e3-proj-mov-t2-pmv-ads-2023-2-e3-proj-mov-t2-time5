import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro';
import ELogin from '../pages/login';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return(
        <Stack.Navigator initialRouteName='ELogin' screenOptions={{ headerShown: false }}>
            <Stack.Screen
            name='ECadastro'
            component={Cadastro}
            />
            <Stack.Screen
            name='ELogin'
            component={ELogin}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes;