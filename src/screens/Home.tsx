import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

const Home: React.FC = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.text}>Rapid Rock Paper Scissors</Text>
            <Image style={{width: '90%', alignSelf: 'center'}} source={require('../../assets/icons/9-2-rock-png.png')}/>
            <View style={{display: 'flex', paddingHorizontal: 10, paddingVertical: 20}}>
                <Button title={'Play'} onPress={() => navigation.navigate('Play')}/>
                <Button title={'Settings'} onPress={() => navigation.navigate('Settings')}/>
                <Button title={'Contact'} onPress={() => navigation.navigate('Contact')}/>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }
})
