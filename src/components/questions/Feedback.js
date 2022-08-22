import React from 'react';
import { Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../utils/theme.js';

export const FeedbackButton = ({ question, style }) => {
  const feedbackAlert = () => {
    Alert.alert(
      'Report',
      'If a question is unclear or not in accordance with the Rules, please let us know',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Message', onPress: sendEmailAsync },
      ],
      { cancelable: true },
    );
  };

  const sendEmailAsync = () => {
    MailComposer.composeAsync({
      recipients: ['ultimatetimeout+englishversion@gmail.com'],
      subject: 'A question is unclear about Timeout Ultimate',
      body: `

> Question concerning : ${question.question}


      `,
    });
  };

  return (
    <Button
      type="clear"
      containerStyle={style}
      icon={<MaterialCommunityIcons name="alert-octagon-outline" size={theme.FONT_SIZE_ICON} color="#666666" />}
      onPress={feedbackAlert}
    />
  );
};

export default FeedbackButton;
