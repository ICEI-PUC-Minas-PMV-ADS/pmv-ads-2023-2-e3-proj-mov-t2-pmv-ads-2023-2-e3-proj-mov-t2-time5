import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Doacao from '../pages/doacao';
import Lista from '../pages/listaDoacoes';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName='ELista' screenOptions={{ headerShown: false }}>
            <Stack.Screen
            name='EDoacao'
            component={Doacao}
            />
            <Stack.Screen
            name='ELista'
            component={Lista}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;