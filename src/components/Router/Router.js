import React, {useState} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet} from 'react-native';

import HomeScreen from "../../screens/HomeScreen";
import Stations from "../../screens/Stations";
import Saved from "../../screens/Saved";
import Configs from "../../screens/Configs";
import AddPrice from "../../screens/AddPrice";
import { UserContext } from "../../screens/UserContext";
import { useRoute } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const Router = () => {
    const route = useRoute()

    return(
        <UserContext.Provider value={route.params.profile}>
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                position: 'absolute',
                backgroundColor: '#62D9AD',
                height: 70,
                borderTopWidth: 0,
                borderRadius: 4,
            }
        }}>
            <Tab.Screen     
             name="Local"
             component={HomeScreen} 
             options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('../../../assets/icons/local.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('../../../assets/icons/local.png')}
                    />
                }
                }} />


            <Tab.Screen 
            name="Posto" 
            component={Stations}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('../../../assets/icons/posto.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('../../../assets/icons/posto.png')}
                    />
                }
                }}
            />

            <Tab.Screen 
            name="Mais" 
            component={AddPrice} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('../../../assets/icons/mais.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('../../../assets/icons/mais.png')}
                    />
                }
                }}
            
            />
            
            <Tab.Screen 
            name="Salvo" 
            component={Saved} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused}) => {
                    if (focused) {
                        return <View><Image
                        style={styles.icon}
                        source={require('../../../assets/icons/salvo.png')}/>
                        <View style={styles.line} />
                        </View>
                    }

                    return <Image
                    style={styles.iconF}
                    source={require('../../../assets/icons/salvo.png')}
                    />
                }
                }}
            
            />

 
                <Tab.Screen 
                name="Configs" 
                component={Configs}
                options={{
                    headerShown: false,
                    tabBarStyle:{display: 'none',},
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <View><Image
                            style={styles.icon}
                            source={require('../../../assets/icons/config.png')}/>
                            <View style={styles.line} />
                            </View>
                        }

                        return <Image
                        style={styles.iconF}
                        source={require('../../../assets/icons/config.png')}
                        />
                    }
                    }}
                
                />
        </Tab.Navigator>
        </UserContext.Provider>
    );
  }

const styles = StyleSheet.create({
    line:{ 
        height: 1,
        backgroundColor: '#ffff',
        marginTop: 4,
        width: 45,
        
    },
    icon:{
        height: 45,
        width: 45,
    },

    iconF:{
        height: 40,
        width: 40, 
        opacity: 0.7,
    },
});

export default Router