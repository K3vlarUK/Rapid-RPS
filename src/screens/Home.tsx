import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.text}>Rapid Rock Paper Scissors</Text>
            <Image style={{width: '20%'}} source={require('../../assets/icons/9-2-rock-png.png')}/>
            <Button title={'Play'} onPress={() => alert('Howdy!!!')}/>
            <Button title={'Settings'} onPress={() => alert('Howdy!!!')}/>
            <Button title={'Contact'} onPress={() => alert('Howdy!!!')}/>
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
