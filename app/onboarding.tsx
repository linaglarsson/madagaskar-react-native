import { CustomPage } from '@/components/CustomPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const ONBOARDED_KEY = 'onboarded';

export default function OnboardingScreen() {
  const router = useRouter();

  const finishOnboarding = async () => {
    await AsyncStorage.setItem(ONBOARDED_KEY, 'true');
    router.replace('/login');
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <CustomPage gif="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUydmVpa2RsYms3NDRuajc5YzN4OWl4cmFwcjY3MGJtZWVueXRxYWRydCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JwY6QzGUKRlHa/source.gif" />,
          title: 'Välkommen!',
          subtitle: 'Upptäck Madagaskar!',
        },
        {
          backgroundColor: '#fdeb93',
          image: <CustomPage gif="https://i.pinimg.com/originals/d4/c4/ef/d4c4ef0153a82a1c6bdc5534057c1150.gif" />,
          title: 'Fakta',
          subtitle: 'Lär dig mer om Madagaskar.',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <CustomPage gif="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazkwNXMwOTR1ZDZqMXF5M2Jha2Zvcjh3YnJrb3h3cHl0OGxubmg2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v03VoAnKZiyxW/giphy.gif" />,
          title: 'Lets go!',
          subtitle: 'Skapa ett konto eller logga in!',
        },
      ]}
      onSkip={finishOnboarding}
      onDone={finishOnboarding}
    />
  );
}