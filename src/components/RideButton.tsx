import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

interface RideButtonProps {
  title: string;
  onPress: () => void;
}

const RideButton: React.FC<RideButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default RideButton;
