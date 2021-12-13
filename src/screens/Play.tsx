import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { gameOptions } from '../lib/values';

const Play = () => {
    const [playerValue, setPlayerValue] = useState<string | null>(null)
    const [aiValue, setAiValue] = useState<string | null>(null);
    const [winner, setWinner] = useState<string | null>(null);
    const playerOptions = Object.keys(gameOptions);

    const getRandomOption = () => {
        const randomOption = randomEnumValue(gameOptions)
        setAiValue(randomOption);
    }

    const randomEnumValue = (selectedEnum: any) => {
        const values = Object.keys(gameOptions);
        const enumKey = values[Math.floor(Math.random() * values.length)];
        return selectedEnum[enumKey];
    }

    async function getBothOptions(playersChoice: string) {
        setPlayerValue(playersChoice);
        getRandomOption();
    }

    const runAGame = (playersChoice: string) => {
        getBothOptions(playersChoice)
        .then(() => {
            // Put in a comparison switch statement
        })
    }
    

    return (
        <View>
            <View style={{display: 'flex', paddingHorizontal: 10, paddingVertical: 10}}>
                <Text style={{fontSize: 32, fontWeight:'bold'}}>Play Screen</Text>
            </View>
            <View style={{display: 'flex', paddingHorizontal: 10, paddingVertical: 20}}>
                <Text>Chose your option</Text>
                <View style={{display: 'flex', paddingHorizontal: 10, paddingVertical: 20}}>
                    {
                        playerOptions.map((option, index) => {
                            const capitalizedOption = option[0].toUpperCase() + option.substr(1).toLowerCase();
                            return (
                                <Button onPress={() => runAGame(capitalizedOption)} title={option} key={index} />
                            )
                        })
                    }
                </View>
            </View>
            <View style={{display: 'flex', paddingHorizontal: 10, paddingVertical: 20}}>
                <Text>You Chose: {playerValue}</Text>
                <Text>Computer Chose: {aiValue}</Text>
            </View>
        </View>
    )
}

export default Play

const styles = StyleSheet.create({})
