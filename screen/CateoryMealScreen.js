import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View>
            <Text style = {styles.screen}>
                The Categories Meal Screen Screen!
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

export default CategoryMealScreen