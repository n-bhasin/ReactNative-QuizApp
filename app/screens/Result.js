import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 50 }}>Your Score</Text>

        <View style={styles.textWrapper}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.score}> / 3</Text>
        </View>
        {/* Retry Quiz button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome");
          }}
          style={styles.btnReset}
        >
          <Text style={styles.btnText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38588b",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    backgroundColor: "#38588b",
    width: "90%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  score: {
    fontSize: 100,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnReset: {
    backgroundColor: "#333",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "50%",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    letterSpacing: 1,
  },
});
export default Result;
