import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/routes/auth.routes';

function App() {
  return (
    <NavigationContainer>
    <AuthRoutes />
    </NavigationContainer>
);
}

export default App;