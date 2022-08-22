import React from 'react';
import { StyleSheet, Text, View, Share } from 'react-native';
import { Button } from 'react-native-elements';

import { saveQuizResult } from '../utils/history';
import theme from '../utils/theme.js';
import ReportError from './questions/ReportError';

export default ({ navigation, rightAnswersCount, QuizLength, errors }) => {
  let message;
  if (rightAnswersCount === QuizLength) {
    message = 'Bravo !';
  } else if (rightAnswersCount / QuizLength > 0.5) {
    message = 'Not so bad, one more effort !';
  } else if (rightAnswersCount / QuizLength > 0.2) {
    message = 'There is work to be done';
  } else {
    message = "It's not great...";
  }

  const share = async () => {
    try {
      await Share.share({
        message: `I earned a ${rightAnswersCount} / ${QuizLength} on the Timeout Ultimate Rules Quiz`,
        title: 'WFDF 2021-2024 Rules of Ultimate',
      });
    } catch (error) {
      console.log('Error sharing result', error);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Bilan</Text>
      </View>
      <Text>
        {rightAnswersCount} bonnes réponses pour {QuizLength} questions
      </Text>
      <Text>Mon commentaire :</Text>
      <View style={styles.result}>
        <Text>{message}</Text>
      </View>
      <Button containerStyle={styles.buttonContainer} title="Share my result" onPress={share} type="outline" />
      <Button
        containerStyle={styles.buttonContainer}
        title="Back to Home"
        onPress={() => {
          saveQuizResult({ rightAnswersCount, QuizLength, createdAt: new Date() });
          navigation.navigate('HomeScreen');
        }}
      />
      {errors.length > 0 && (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Incorrect answer details</Text>
          </View>
          {errors.map((error, index) => (
            <ReportError key={index} question={error.question} checked={error.checked} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: theme.FONT_SIZE_XL,
  },
  result: {
    marginVertical: 8,
    marginLeft: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
