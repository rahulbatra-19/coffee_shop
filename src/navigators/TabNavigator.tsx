import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, CartScreen, OrderHistoryScreen, FavouritesScreen } from '../screens'
import React from 'react'
import { StyleSheet } from 'react-native';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import Customicon from '../components/Customicon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
                <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
            )
        }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Customicon name='home' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                
            )}}></Tab.Screen>
            <Tab.Screen name='Cart' component={CartScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Customicon name='cart' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                
            )}}></Tab.Screen>
            <Tab.Screen name='Favourite' component={FavouritesScreen}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Customicon name='like' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                
            )}}></Tab.Screen>
            <Tab.Screen name='History' component={OrderHistoryScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Customicon name='bell' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
                
            )}}></Tab.Screen>

      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    }, BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
})

export default TabNavigator