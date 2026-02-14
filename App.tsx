
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import FirstPage from 'components/FirstPage';

export default function App() {
  return (
    <>
      <SafeAreaProvider> 
         <FirstPage />
      <StatusBar style="auto" />
      </SafeAreaProvider>
     
    </>
  );
}
