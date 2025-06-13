import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthLayout() {
  const { user } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (user) {
        router.replace('/(tabs)');
    }
  }, [user]);
  
  return <Stack />;
}