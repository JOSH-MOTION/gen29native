import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      {/* Greeting */}
      <Text className="text-2xl font-bold text-gray-800 mb-3">Hello Joshua 👋</Text>
      <Text className="text-gray-500 mb-4">What would you like to shop today?</Text>

      {/* Search Bar */}
      <View className="bg-gray-100 rounded-full px-4 py-2 mb-6 flex-row items-center">
        <TextInput
          placeholder="Search for products..."
          className="flex-1 text-gray-700"
        />
      </View>

      {/* Promo Banner */}
      <View className="mb-6">
        <Image
          source={require('../../assets/images/banner.jpg')} // your promo image
          className="w-full h-40 rounded-2xl"
          resizeMode="cover"
        />
      </View>

      {/* Categories */}
      <Text className="text-lg font-semibold text-gray-800 mb-2">Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {['Fruits', 'Drinks', 'Snacks', 'Bakery'].map((cat, index) => (
          <TouchableOpacity
            key={index}
            className="bg-green-100 rounded-xl px-4 py-2 mr-3"
          >
            <Text className="text-green-700 font-semibold">{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Products */}
      <Text className="text-lg font-semibold text-gray-800 mb-3">Featured Products</Text>
      <View className="flex-row flex-wrap justify-between">
        {[1, 2, 3, 4].map((item) => (
          <View
            key={item}
            className="w-[48%] bg-white rounded-xl shadow-sm p-3 mb-4"
          >
            <Image
              source={require('../../assets/images/fruits.png')} // sample product
              className="w-full h-28 rounded-md mb-2"
              resizeMode="cover"
            />
            <Text className="font-semibold text-gray-700">Fresh Mango</Text>
            <Text className="text-green-600 font-bold">$3.99</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
