import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CateoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals : {
        screen: CategoryMealScreen
    },
    MealDetails: MealDetailScreen
});

export default createAppContainer(MealsNavigator);