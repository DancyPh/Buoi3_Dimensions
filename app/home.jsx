import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

export default function home() {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = ({ window }) => {
      setWindowDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    // Clean up khi component unmount
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chiều rộng: {windowDimensions.width}</Text>
      <Text style={styles.text}>Chiều cao: {windowDimensions.height}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
