import accepted from '../assets/handSignals/accepted.png';
import contest from '../assets/handSignals/contest.png';
import disc_down from '../assets/handSignals/disc_down.png';
import disc_up from '../assets/handSignals/disc_up.png';
import foul from '../assets/handSignals/foul.png';
import gender_ratio_men from '../assets/handSignals/gender_ratio_men.png';
import gender_ratio_women from '../assets/handSignals/gender_ratio_women.png';
import goal from '../assets/handSignals/goal.png';
import in_out from '../assets/handSignals/in_out.png';
import marking_infraction from '../assets/handSignals/marking_infraction.png';
import match_point from '../assets/handSignals/match_point.png';
import offside from '../assets/handSignals/offside.png';
import pick from '../assets/handSignals/pick.png';
import play_has_stopped from '../assets/handSignals/play_has_stopped.png';
import retracted from '../assets/handSignals/retracted.png';
import spirit_stoppage from '../assets/handSignals/spirit_stoppage.png';
import stoppage from '../assets/handSignals/stoppage.png';
import timeOut from '../assets/handSignals/time-out.png';
import timing_violation from '../assets/handSignals/timing_violation.png';
import travel from '../assets/handSignals/travel.png';
import turnover from '../assets/handSignals/turnover.png';
import violation from '../assets/handSignals/violation.png';
import who_made_the_call from '../assets/handSignals/who_made_the_call.png';

import { Levels, Categories } from '../src/utils/config';

export default [
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: accepted,
    answerChoices: {
      a: 'Accepté',
      b: 'Rétracté',
      c: 'Infraction de marque',
      d: "J'ai besoin de réfléchir",
    },
    correctAnswers: ['a'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: contest,
    answerChoices: {
      a: 'Contesté',
      b: 'Infraction de marque',
      c: 'Faute',
      d: 'Turnover',
    },
    correctAnswers: ['a'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: disc_down,
    answerChoices: {
      a: 'Turnover',
      b: 'Disc Down',
      c: 'Travel',
      d: 'Point',
    },
    correctAnswers: ['b'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: disc_up,
    answerChoices: {
      a: 'Qui a fait le call',
      b: 'Disc Up',
      c: 'Point',
      d: 'Stoppage',
    },
    correctAnswers: ['b'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: foul,
    answerChoices: {
      a: 'Contesté',
      b: 'Offside',
      c: 'Faute',
      d: 'Pick',
    },
    correctAnswers: ['c'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: gender_ratio_men,
    answerChoices: {
      a: 'Gender ratio femmes',
      b: 'Stoppage',
      c: 'Gender ratio hommees',
      d: 'Pick',
    },
    correctAnswers: ['c'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.MIDDLE,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: gender_ratio_women,
    answerChoices: {
      a: 'Infraction de marque',
      b: 'Stoppage',
      c: 'Gender ratio hommes',
      d: 'Gender ratio femmes',
    },
    correctAnswers: ['d'],
    explanation: "Attention, la seule différence avec le geste d'infraction de marque est : les mains sont poings fermées.",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: goal,
    answerChoices: {
      a: 'Match point',
      b: 'Violation',
      c: 'Pick',
      d: 'Point',
    },
    correctAnswers: ['d'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: in_out,
    answerChoices: {
      a: 'In ou Out',
      b: 'Qui a fait le call',
      c: 'Infraction de marque',
      d: 'Turnover',
    },
    correctAnswers: ['a'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: marking_infraction,
    answerChoices: {
      a: 'Infraction de marque',
      b: 'Violation',
      c: 'Gender ratio femmes',
      d: 'Stall out',
    },
    correctAnswers: ['a'],
    explanation: "Attention, la seule différence avec le geste de gender ratio Femmes de marque est : les mains sont poings ouvertes.",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.MIDDLE,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: match_point,
    answerChoices: {
      a: 'Faute',
      b: 'Point',
      c: 'Offside',
      d: 'Stall Out',
    },
    correctAnswers: ['b'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.MIDDLE,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: offside,
    answerChoices: {
      a: 'Faute',
      b: 'Offside',
      c: 'Turnover',
      d: 'Contesté',
    },
    correctAnswers: ['b'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: pick,
    answerChoices: {
      a: 'Violation',
      b: 'Point',
      c: 'Pick',
      d: 'Infraction de marque',
    },
    correctAnswers: ['c'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: play_has_stopped,
    answerChoices: {
      a: 'Travel',
      b: 'Violation',
      c: 'Le jeu est arrêté',
      d: 'Qui a fait le call',
    },
    correctAnswers: ['c'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.MIDDLE,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: retracted,
    answerChoices: {
      a: 'Faute',
      b: 'Travel',
      c: 'Accepté',
      d: 'Retracté',
    },
    correctAnswers: ['d'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: spirit_stoppage,
    answerChoices: {
      a: 'Time-out',
      b: 'Travel',
      c: 'Faute',
      d: 'Spirit Stoppage',
    },
    correctAnswers: ['d'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: stoppage,
    answerChoices: {
      a: 'Stoppage',
      b: 'Gender ratio femmes',
      c: 'Gender ratio hommes',
      d: 'Stall Out',
    },
    correctAnswers: ['a'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.MIDDLE,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: timeOut,
    answerChoices: {
      a: 'Time-out',
      b: 'Faute',
      c: 'Spirit stoppage',
      d: 'Travel',
    },
    correctAnswers: ['a'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: timing_violation,
    answerChoices: {
      a: 'Offside',
      b: 'Stall Out',
      c: 'Stoppage',
      d: 'Pick',
    },
    correctAnswers: ['b'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: travel,
    answerChoices: {
      a: 'Rétracté',
      b: 'Travel',
      c: 'Accepté',
      d: 'Pick',
    },
    correctAnswers: ['b'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: turnover,
    answerChoices: {
      a: 'Disc up',
      b: 'Contesté',
      c: 'Turnover',
      d: 'Disc down',
    },
    correctAnswers: ['c'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: violation,
    answerChoices: {
      a: 'Point',
      b: 'Offside',
      c: 'Violation',
      d: 'Pick',
    },
    correctAnswers: ['c'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.EASY,
  },
  {
    category: Categories.HAND_SIGNALS,
    question: "Que signifie ce geste ?",
    image: who_made_the_call,
    answerChoices: {
      a: 'In ou Out',
      b: 'Faute',
      c: 'Point',
      d: 'Qui a fait le call',
    },
    correctAnswers: ['d'],
    explanation: "",
    source: "Hand Signals - Raphy Candelier",
    level: Levels.MIDDLE,
  },
];