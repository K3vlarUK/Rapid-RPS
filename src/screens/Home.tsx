import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.text}>Rapid Rock Paper Scissors</Text>
            <Button title={'Play'} onPress={() => alert('Howdy!!!')}/>
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
