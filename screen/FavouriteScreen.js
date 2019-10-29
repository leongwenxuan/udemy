import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FavouriteScreen = props => {
    return (
        <View>
            <Text style = {styles.screen}>
                The Favourite Screen!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouriteScreen