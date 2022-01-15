import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import Question from '../components/Question';
import Report from '../components/Report';
import questions from '../../data';
import { Levels } from '../utils/config'

// Taken from https://stackoverflow.com/a/19270021
function getRandomElementsFromArray(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandomElementsFromArray: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default (props) => {
  const { number, time, level } = props.route.params;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: `Quizz ${number} questions`,
    });
  });

  const filteredQuestions = questions.filter(question => level === Levels.ANY || level === question.level);

  const [selectedQuestions, _setSelectedQuestions] = useState(getRandomElementsFromArray(filteredQuestions, number));
  const [current, setCurrent] = useState(1);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [canMoveForward, setCanMoveForward] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const onSuccess = () => {
    setRightAnswersCount(rightAnswersCount + 1);
    setCanMoveForward(true)
  }

  const onFailure = () => {
    setCanMoveForward(true)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {!showReport && (
        <View style={styles.question}>
          <View style={styles.header}>
            <Text>Question {current}/{number}</Text>
            <Text>{rightAnswersCount} bonnes réponses</Text>
          </View>
          <Question
            question={selectedQuestions[current - 1]}
            onSuccess={onSuccess}
            onFailure={onFailure}
            time={time}
          />
        </View>
      )}
      {canMoveForward && (
        <Button title="Question suivante" onPress={() => {
          if (current === number) {
            setShowReport(true);
          }
          else {
            setCurrent(current + 1);
          }
          setCanMoveForward(false);
        }} />
      )}
      {showReport && (
        <Report rightAnswersCount={rightAnswersCount} quizzLength={number} navigation={props.navigation} />
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  question: {
    marginBottom: 20,
  },
});
