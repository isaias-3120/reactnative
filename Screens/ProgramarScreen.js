import React from 'react'
import { StyleSheet, Text, View, Button,  } from 'react-native'



const ProgramarScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title= "JavaScript"
                onPress={()=>navigation.navigate('JavascriptScreen')}
            />
            <Button 
                title= "React"
                onPress={()=>navigation.navigate('ReactScreen')}
            />
        </View>
    )
}

export default ProgramarScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});