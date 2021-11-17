import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Bienvenido</Text>
            <Image
                style={styles.Logo} 
                source={{
                uri:'https://images.jumpseller.com/store/computecnoar/store/logo/PClogo.png?0',
                }}
            />
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    Logo: {
        width: 350,
        height: 400,
    },
    bold:{
        fontWeight:'bold',
        fontSize: '50px',
    },
});
  