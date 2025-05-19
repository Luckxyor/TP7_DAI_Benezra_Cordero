import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Image, ImageBackground, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [mensaje, setMensaje] = useState('');

  const mensajeContactar = () => {
    if(mensaje===''){
      alert('No escribiste nada');
    }
    else{
      alert('Mensaje enviado: ' + mensaje);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ImageBackground 
        style={styles.background}
      >
          <View style={styles.card}>
            <Image 
              source={{uri:'https://pbs.twimg.com/profile_images/1872747345017778176/w2qU4ihm_400x400.jpg'}}
              style={styles.profileImage}
            />
            <Text style={styles.nombre}>Maestro Splinter</Text>
            <Text style={styles.titulo}>Desarrollador Frontend</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu comentario..."
              onChangeText={setMensaje}
            />
            <TouchableOpacity style={styles.botonContactar} onPress={mensajeContactar}>
              <Text style={styles.textoBoton}>Contactar</Text>
            </TouchableOpacity>
            <Pressable style={({ pressed }) => [
                styles.botonPerfil,
                pressed && styles.botonPerfilPresionado
              ]}>
              <Text style={styles.textoBotonPerfil}>Ver Perfil</Text>
            </Pressable>
          </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
  },
  card: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 16,
    marginBottom: 18,
  },
  input: {
    width: '100%',
    backgroundColor: '#fafbfc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  botonContactar: {
    backgroundColor: '#0cf',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botonPerfil: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0cf',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 0,
    transitionDuration: '150ms',
  },
  botonPerfilPresionado: {
    backgroundColor: '#e0f7fa',
  },
  textoBotonPerfil: {
    color: '#0cf',
    fontWeight: 'bold',
    fontSize: 16,
  },
});