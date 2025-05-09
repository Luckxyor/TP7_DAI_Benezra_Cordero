import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View, ImageBackground, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.imageContainer}>
        <ImageBackground 
          source={{uri:'https://i.ytimg.com/vi/3h65dBk-f0s/maxresdefault.jpg'}}
          resizeMode='cover'
          style={styles.image}
        />
      </View>
      <Text>MARASI EL CARNICERO DEL CODIGO</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  Titulo:{
    fontSize: 20,

  }
});
