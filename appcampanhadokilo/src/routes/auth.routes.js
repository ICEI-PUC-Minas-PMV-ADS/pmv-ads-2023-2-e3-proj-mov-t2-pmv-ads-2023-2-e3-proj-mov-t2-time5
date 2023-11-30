import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro';
import Menu from '../pages/menu';
import Acesso from '../pages/acesso';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return(
        <Stack.Navigator initialRouteName='Comeco' screenOptions={{ headerShown: false }}>
            <Stack.Screen
            name='ECadastro'
            component={Cadastro}
            />
            <Stack.Screen
            name='Comeco'
            component={Menu}
            />
            <Stack.Screen
            name='Acesso'
            component={Acesso}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes;