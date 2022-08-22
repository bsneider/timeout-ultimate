import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'Quiz_result';

export const saveQuizResult = async (result) => {
  try {
    const existingResults = await loadQuizResults();
    const newResults = JSON.stringify([...(existingResults || []), result]);
    await AsyncStorage.setItem(STORAGE_KEY, newResults);
  } catch (e) {
    console.log('saving error', e);
  }
};

export const loadQuizResults = async () => {
  try {
    const jsonResults = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonResults != null ? JSON.parse(jsonResults) : [];
  } catch (e) {
    console.log('error reading value', e);
  }
};
