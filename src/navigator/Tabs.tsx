import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import SearchScreen from '../screens/SearchScreen';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    // backgroundColor: 'tra',
                    borderWidth: 0,
                    elevation: 0,
                    opacity: 0.8,
                    height: Platform.OS === 'ios' ? 0 : 55,
                    position: 'absolute',
                },
                tabBarLabelStyle: { marginBottom: Platform.OS === 'ios' ? 0 : 5 },
                tabBarActiveTintColor: '#5856D6',
            }}>
            <Tab.Screen
                name="Home"
                component={Navigator}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => <Icon name="list-outline" color={color} size={25} />,
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => (
                        <Icon name="search-outline" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
