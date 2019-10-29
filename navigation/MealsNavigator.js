import { createStackNavigator } from 'react-navigation';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CateoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';

createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals : CategoryMealScreen,
    MealDetails: MealDetailScreen
});