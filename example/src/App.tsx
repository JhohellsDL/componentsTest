import { View, StyleSheet } from 'react-native';
import { RideButton } from 'components_test';

export default function App() {
  return (
    <View style={styles.container}>
      <RideButton title="asdf" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
