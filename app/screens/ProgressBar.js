import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import data from "../../QuizData";

const ProgressBar = ({ progress }) => {
  const allQuestions = data;

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: "#EDA276" + "90",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "80%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#00000020",
    marginBottom: 10,
  },
});
export default ProgressBar;
