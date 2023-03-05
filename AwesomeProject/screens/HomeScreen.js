import React from 'react';
import { Button, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Button 
                title="Detail"
                onPress={() => {
                    navigation.navigate('Detail')
                }}
            />
        </View>
    )
};
