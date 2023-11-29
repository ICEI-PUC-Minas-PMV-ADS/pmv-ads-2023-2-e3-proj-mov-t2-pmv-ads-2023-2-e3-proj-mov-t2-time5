import { NavigationContainer } from '@react-navigation/native';
//import AuthRoutes from './src/routes/auth.routes';
import Route from './src/routes/routes';
import UserProvider from './src/contexts/UserContext';

function App() {
  return (
    <UserProvider>
    <NavigationContainer>
    <Route />
    </NavigationContainer>
    </UserProvider>
);
}

export default App;