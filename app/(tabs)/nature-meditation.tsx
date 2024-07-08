import AppGradient from '@/components/AppGradient';
import React from 'react';
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native';

import { MEDITATION_DATA } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { router } from 'expo-router';

const NatureMeditation = () => {
	return (
		<View className='flex-1'>
			<AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
				<View className='mb-6'>
					<Text className='text-4xl mb-3 font-bold text-gray-50 text-left'>Welcome Staven</Text>
					<Text className='text-xl text-indigo-100 font-medium text-left'>Start your meditation practice</Text>
				</View>
				<View>
					<FlatList
						data={MEDITATION_DATA}
						className='mb-20'
						keyExtractor={item => item.id.toString()}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Pressable onPress={() => router.push(`meditate/${item.id}`)} className='h-48 my-3 rounded-lg overflow-hidden'>
								<ImageBackground source={MEDITATION_IMAGES[item.id - 1]} resizeMode='cover' className='flex-1 rounded-lg justify-center items-center'>
									<Text className='text-gray-100 font-bold text-3xl text-center'>{item.title}</Text>
								</ImageBackground>
							</Pressable>
						)}
					/>
				</View>
			</AppGradient>
		</View>
	);
};

export default NatureMeditation;
