import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-green-500 px-6">
      <Image
        source={require('../assets/images/mart.png')}
        className="w-28 h-28 rounded-full mb-6 border-2 border-white shadow-sm"
      />
      <Text className="text-3xl font-bold text-white mb-6">Welcome to Shopping Mall</Text>
      <Link href="/home" asChild>
  <TouchableOpacity className="bg-green-700 w-3/5 rounded-full py-4" activeOpacity={0.7}>
    <Text className="text-center text-white text-lg font-semibold">Get Started</Text>
  </TouchableOpacity>
</Link>
    </SafeAreaView>
  );
};

export default Index;