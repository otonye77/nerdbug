import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
}

