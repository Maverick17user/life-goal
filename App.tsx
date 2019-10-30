import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoader from './components/appLoader/AppLoader'
import AppMenu from './components/appMenu/AppMenu'

export default function App() {
    const [loading, setLoadingStatus] = useState(true)

    setTimeout(() => setLoadingStatus(false) , 3000)

    return (
        <View style={styles.container}>
        {
            loading 
            ? <AppLoader appName="Todo app"/> 
            : <AppMenu />
        } 
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
