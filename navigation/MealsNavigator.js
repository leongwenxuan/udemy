import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CateoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: { 
        screen: CategoriesScreen,
        navigationOptions: {
        }
    },
    CategoryMeals : {
        screen: CategoryMealScreen
    },
    MealDetails: MealDetailScreen
},  {
    defaultNavigationOptions: {
        headerStyle: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'A Screen'
        }
    }
}); 

export default createAppContainer(MealsNavigator);