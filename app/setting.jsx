import React from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet, useWindowDimensions, Platform } from 'react-native';

export default function setting() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const platformText = Platform.select({
    ios: 'iOS',
    android: 'Android',
    default: Platform.OS === 'windows' || Platform.OS === 'win32' ? 'Windows' : 'Unknown Platform',
  });

  return (
    <View style={[styles.container, isLandscape && styles.landscapeContainer]}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/18144023/pexels-photo-18144023/free-photo-of-canh-d-ng-dang-lam-vi-c-nong-nghi-p-nong-phu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
        style={[styles.image, isLandscape && styles.landscapeImage]}
      />
      <TextInput
        placeholder="Nhập văn bản..."
        style={[styles.input, isLandscape && styles.landscapeInput]}
      />
      <Button title="Bấm vào đây" onPress={() => {}} />
      <Text style={styles.text}>Đang sử dụng: {platformText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landscapeContainer: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  landscapeImage: {
    width: 150,
    height: 150,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  landscapeInput: {
    width: '40%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
