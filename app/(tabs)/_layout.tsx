import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { Image, ImageBackground, Text, View } from 'react-native'
import { icons } from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px]
        min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon}
          tintColor="#151312"
          className="text-secondary text-base font-semibold ml-2"
        />
        <Text> {title}</Text>
      </ImageBackground>
    )
  }
  return (
    <View  className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icon} tintColor="#A8B5DB"
        />
    </View>
  )
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 56,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderColor: '#A8B5DB',


        }
      }}>
          <Tabs.Screen 
          name="index"
          options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  focused={focused}
                  icon={icons.home}
                  title="Home"
                />
              )
              }}
      />
       <Tabs.Screen 
          name="search"
          options={{
              title: 'search',
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  focused={focused}
                  icon={icons.search}
                  title="Search"
                />
              )
              }}
      />
      <Tabs.Screen 
          name="saved"
          options={{
              title: 'saved',
            headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  focused={focused}
                  icon={icons.save}
                  title="Saved"
              />
              )
              }}
      />
      <Tabs.Screen 
          name="profile"
          options={{
              title: 'Profile',
            headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  focused={focused}
                  icon={icons.person}
                  title="Profile"
              />
              )
              }}
      />
    </Tabs>
  )
}

export default _layout