import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

const _layout = () => {
  return (
    <SafeAreaView className='flex-1 bg-white p-6'>
     <View>
      <Text className='font-black text-5xl text-center text-blue-800 mt-8'>Logo</Text>
     </View>
     <View className='mt-10 '>
      <Text className='text-2xl'>Login in to you account</Text>
     </View>
     <View className='mt-9'> 
      <TextInput placeholder='Email'  placeholderTextColor="#9CA3AF"  className='shadow-sm bg-white w-[23rem] p-4 rounded-md'></TextInput>
     </View>
     <View className='mt-9'> 
      <TextInput placeholder='Password' className='shadow-sm bg-white w-[23rem] rounded-lg p-4'></TextInput>
     </View>
    
      <TouchableOpacity className='mt-8 bg-blue-800 p-4 w-[23rem] rounded-lg'>
        <Text className=' text-center text-white text-2xl'>Signin</Text>
      </TouchableOpacity>
      <View>
        <Text className='text-center mt-5'>Don't have account?
          <Link href='/signup' className='text-blue-700'>Signup</Link>
          </Text>
      </View>
     
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({

})