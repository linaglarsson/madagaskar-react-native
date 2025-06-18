import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = 350;

interface CustomPageProps {
  gif: string;
}

export function CustomPage({ gif }: CustomPageProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: gif }}
        style={styles.background}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  background: {
    width,
    height: IMAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
