import { Text, View, Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show splash screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-green-600">
        <Image
          source={require('../assets/images/mart.png')}
          className="w-32 h-32 rounded-full"
        />
        <Text className="text-white text-xl font-bold mt-4">Shopping Mall</Text>
        <ActivityIndicator size="large" color="#ffffff" className="mt-6" />
      </View>
    );
  }


  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-blue-600 px-6">
      <Image
        source={require('../assets/images/mart.png')}
        className="w-28 h-28 rounded-full mb-6 border-2 border-white shadow-sm"
      />
      <Text className="text-3xl font-bold text-white mb-6 text-center">
        Welcome to Shopping Mall
      </Text>

      <Link href="/signin" asChild>
        <TouchableOpacity className="bg-blue-800 w-3/5 rounded-full py-4" activeOpacity={0.7}>
          <Text className="text-center text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

export default Index;
