import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';
import Acesso from '../pages/acesso';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen
            name='ECadastro'
            component={Cadastro}
            />
            <Stack.Screen
            name='Home'
            component={Home}
            />
            <Stack.Screen
            name='Acesso'
            component={Acesso}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes;