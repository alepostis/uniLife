import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ForosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Foros UniLife</Text>

      <View style={styles.card}>
        <Text style={styles.foro}>📚 Club de Lectura</Text>
        <Text style={styles.desc}>
          Comparte libros, recomendaciones y debates.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.foro}>💻 Programación Web</Text>
        <Text style={styles.desc}>
          PHP, React Native, Laravel y más.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.foro}>🎮 Videojuegos</Text>
        <Text style={styles.desc}>
          Encuentra compañeros para jugar.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.foro}>⚽ Deportes UTP</Text>
        <Text style={styles.desc}>
          Organiza partidos y torneos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7DB94',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B4079',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  foro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B4079',
  },

  desc: {
    marginTop: 5,
    color: '#555',
  },
});