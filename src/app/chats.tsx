import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ChatsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mensajes</Text>

      <View style={styles.chatCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
          <View style={styles.onlineDot} />
        </View>

        <View style={styles.chatInfo}>
          <View style={styles.topRow}>
            <Text style={styles.name}>Anita</Text>
            <Text style={styles.time}>10:42 AM</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.message} numberOfLines={1}>
              ¿Ya terminaste la tarea de bases de datos?
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.chatCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>

        <View style={styles.chatInfo}>
          <View style={styles.topRow}>
            <Text style={styles.name}>Carlosss</Text>
            <Text style={styles.time}>Ayer</Text>
          </View>

          <Text style={styles.message}>
            Mañana nos vemos para Programación Web 👨‍💻
          </Text>
        </View>
      </View>

      <View style={styles.chatCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>M</Text>
          <View style={styles.onlineDot} />
        </View>

        <View style={styles.chatInfo}>
          <View style={styles.topRow}>
            <Text style={styles.name}>Maria </Text>
            <Text style={styles.time}>8:15 PM</Text>
          </View>

          <Text style={styles.message}>
            ¿Te unirás al grupo de estudio para cálculo?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F1",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1B4079",
    marginBottom: 20,
  },

  chatCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 14,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 4,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#1B4079",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  onlineDot: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: "#4CD964",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  chatInfo: {
    flex: 1,
    marginLeft: 15,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1B4079",
  },

  time: {
    fontSize: 12,
    color: "#999",
  },

  message: {
    flex: 1,
    fontSize: 14,
    color: "#666",
  },

  badge: {
    backgroundColor: "#20C997",
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});