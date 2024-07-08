import beachImage from '@/assets/meditation-images/beach.webp';
import AppGradient from '@/components/AppGradient';
import CustomBuntton from '@/components/CustomBuntton';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

const App = () => {
	const router = useRouter();

	return (
		<View className='flex-1'>
			<ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
				<AppGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
					<SafeAreaView className='flex-1 justify-between'>
						<View>
							<Text className='text-center text-white text-4xl font-bold'>Simple Meditation</Text>
							<Text className='text-center text-white text-2xl text-regular mt-3'>Simplifying Meditation for everyone</Text>
						</View>

						<View>
							<CustomBuntton onPress={() => router.push('/nature-meditation')} title={'Get started'} />
						</View>

						<StatusBar style='light' />
					</SafeAreaView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
};

export default App;
