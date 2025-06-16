import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AuthLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (user) {
    return <Redirect href="/(tabs)" />
  }

  console.log(user, isLoading)
  
  return <Stack />;
}