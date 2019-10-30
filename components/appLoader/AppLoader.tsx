import React from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Text
} from 'react-native'

const AppLoader = ({appName}) => {
    return (
        <View>
            <Text style={styles.title}>{appName}</Text>
            <ActivityIndicator style={styles.spiner} size="large" color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    spiner: {
      marginTop: "20%"
    }
})
  

export default AppLoader