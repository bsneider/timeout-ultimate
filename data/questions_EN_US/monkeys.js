/*
  Questions taken from an online quiz by the Monkeys (Grenoble Ultimate)
  https://www.ultimate-grenoble.com/quizz-regles-dultimate/

  Email from Pierre:
  > Aucun problème, tu prends les questions que tu veux dans le Quizz, c'est libre de tout droits d'auteur 😉
*/

import { Levels, Categories } from '../../src/utils/config';

export default [
  {
    category: Categories.PULL,
    question: 'After touching the ground, the pull rolls on the ground. I have the right to stop it..',
    image: undefined,
    answerChoices: {
      a: "only if I'm on defense",
      b: 'only if I am on offense',
      c: 'whether I am on offense or defense',
      d: "i don't have the right to stop it",
    },
    correctAnswers: ['c'],
    explanation: 'Once the disc hits the ground, anyone can try to stop it.',
    rules: ['7.7.', '8.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      'A pass goes out of bounds and is touched by a defender before the disc hits the ground. Where should that player set up his pivot foot?',
    image: undefined,
    answerChoices: {
      a: 'At the place where the disc is released',
      b: 'At the location closest to the catch (including areas)',
      c: 'At the location in the core area closest to the catch (not including areas)',
    },
    correctAnswers: ['c'],
    explanation:
      'A defender is always considered in-play, so the disc is considered to have left the playing area when the defender touches it. We must therefore resume as close as possible to this point.This fact of play is deepened in WFDF Rules of ultimate 2013 – Interpretations, paragraph 11.3.',
    rules: ['11.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question:
      "I'm an attacker. If I jump from the outside of the field, catch the disc in the air and fall back inside the field, is it a turnover?",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'The attacker keeps his status (here out of bounds) as long as he is in the air. As soon as he touches the disc while out of bounds, the disc is also out of bounds and it is a turnover.',
    rules: ['11.3.', '11.6.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'I am allowed a maximum of 3 steps to stop after catching the disc',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'The attacker must reduce his speed as quickly as possible; the rules do not specify a step limit. However, fast play is permitted and supervised.',
    rules: ['18.2.2.', '18.2.2.1.', '18.2.2.1.1.', '18.2.2.1.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      'Play is stopped and must resume with a check. The thrower attempts a pass before the check but it is not completed. What happens?',
    image: undefined,
    answerChoices: {
      a: 'There is turnover in all cases.',
      b: 'The disc returns to the thrower and play resumes with a check unless all players involved feel that the lack of a check did not affect the outcome of the action.',
      c: 'The disc returns to the thrower and play resumes with a check adding (2) to the count',
      d: 'The disc returns to the thrower unless it is a drop',
    },
    correctAnswers: ['b'],
    explanation:
      'A player may call a check violation if an opponent attempts a pass without a proper check as per 10.6; after such a violation call, the pass does not count regardless of whether it is caught or not and possession reverts to the thrower (unless the players involved from both teams agree that the incident did not affect the outcome of the action, that outcome stands).',
    rules: ['10.7.', '10.7.1.', '16.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question: 'What should I call if I am injured?',
    image: undefined,
    answerChoices: {
      a: 'Injury',
      b: 'Technical',
      c: 'Ouch',
      d: 'Freeze',
    },
    correctAnswers: ['a'],
    explanation: "The 'injury' call is used to stop play in the event of an injury.",
    rules: ['19.1.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: "When a 'travel' is called, while the thrower resets, the scorer can continue the count.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'The defender should indicate to the thrower where she should establish the pivot point and wait until they are correctly positioned to resume the count.',
    rules: ['18.2.6.', '18.2.6.2.', '18.6.2.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.PULL,
    question: "While waiting for the opposing team's pull, an offensive player must :",
    image: undefined,
    answerChoices: {
      a: 'be in the end zone without changing positions with another player (aka hold the line)',
      b: 'have one foot on the goal line without changing positions with another player',
      c: 'be in his end zone and move if he wants to',
      d: 'have one foot on the end line and move if they wish',
    },
    correctAnswers: ['b'],
    explanation: 'This allows the defenders to see who is in front of them!',
    rules: ['7.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.RECEIVER,
    question:
      'I lean on a teammate to win a duel on offense. I catch the disc and fall back into the endzone. My opponent complains about the boost I received. What happens?',
    image: undefined,
    answerChoices: {
      a: 'It is a point',
      b: 'The disc returns to the thrower and the count resumes with a maximum of (6)',
      c: 'It is a turnover',
      d: 'The disc returns to the thrower and the count resumes at (1)',
    },
    correctAnswers: ['c'],
    explanation: 'This is a turnover where the disc was caught.',
    rules: ['12.10.', '13.2.', '13.2.6.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      "I am defending the disc carrier. I commit a 'straddle' called by the disc carrier. 'Straddle – a line between a defensive player’s feet comes within one disc diameter of the thrower’s pivot point.'",
    image: undefined,
    answerChoices: {
      a: 'I continue to count without the game stopping, starting with the last number completely pronounced minus (1)',
      b: 'I start counting again from (1) without the game stopping',
      c: 'The game stops and resumes with the last number fully pronounced minus (1)',
      d: 'The game stops and resumes with a check with a count of (1)',
    },
    correctAnswers: ['a'],
    explanation:
      'The game does not stop for a marking infraction. Before resuming the count, I must correct my position.',
    rules: ['18.1.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.COUNT,
    question:
      "I am marking the disc carrier. A 'pick' is called when I have just counted '8'. What do I need to do to get the count back?",
    image: undefined,
    answerChoices: {
      a: 'Stall 6',
      b: 'Stalling 7',
      c: 'Stalling 8',
      d: 'Stalling 9',
    },
    correctAnswers: ['a'],
    explanation: 'After a pick, the count resumes at a maximum of 6.',
    rules: ['9.5.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      "The game is stopped. Before the 'check' is made, a player may ask for a few seconds to tie their shoes again.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'This is only possible if the game is already stopped.',
    rules: ['10.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      "I'm on offense and I run after a huck. My defender trips me and I fall. I call 'Foul' and my defender accepts. I retain possession of the disc and the play resumes at (1) with a check where I should have caught the disc.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'Play resumes at the location of the foul, not where the disc would have been caught.',
    rules: ['17.2.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: 'A pick is called by the team on defense. It is not contested. What happens?',
    image: undefined,
    answerChoices: {
      a: 'If the last number fully pronounced is (4), I resume the count by stalling 4',
      b: 'If the last number fully pronounced is (6), I resume the count by stalling 7',
      c: 'If the last number fully pronounced is (8), I resume the count by stalling 7',
      d: 'If the last number fully pronounced is (5), I resume the count by stalling 6',
    },
    correctAnswers: ['d'],
    explanation:
      "After a violation (including pick) the count resumes where it was, with a maximum of 6. Answer A is wrong because resuming at 4 means 'stalling 5'",
    rules: ['9.5.4.', '9.6.', '9.6.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'If a defending player touches the disc and then the arm (and only the arm) of the attacker on a catch, it is still a foul by the defender.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Contact on the arms after the defense must be avoided but is not a foul (excluding strip and dangerous play)',
    rules: ['17.2.1.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'I am a cutter on offense. Before catching the disc, I foul my defender (offensive foul). I do not contest the foul.',
    image: undefined,
    answerChoices: {
      a: 'The disc returns to the thrower and the count resumes with a maximum of 8',
      b: 'It is a turnover',
      c: 'I keep the disk but the count starts at 3',
      d: 'The disc returns to the thrower with a 1 count',
    },
    correctAnswers: ['b'],
    explanation: 'An accepted offensive foul on a catch results in a turnover.',
    rules: ['13.2.', '13.2.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      'Player A is chasing the disc and is followed by Player B. Player A deliberately slows down to ensure that she has the disc without Player B being able to defend it. Player B collides with player A.',
    image: undefined,
    answerChoices: {
      a: 'There is a foul by player B',
      b: 'Both players are at foul',
      c: 'There is a foul by player A',
      d: 'There is no foul',
    },
    correctAnswers: ['a'],
    explanation:
      'Here player A gives B the opportunity to adjust her stride to avoid the collision by slowing down, so it is player B who commits a foul.',
    rules: ['12.7.', '12.7.1.', '12.7.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.SPIRIT,
    question:
      'I am on the sideline. On a game action leading to a call, I have the right to give my opinion if the players involved ask me.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      "On the other hand, I have to keep my mouth shut if I'm not asked, except to point out to a teammate that he or she has made an unwarranted call.",
    rules: ['1.10.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      'On an uncontested defensive foul in the attacked endzone, both players must return to the endzone entry line before checking.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'They must make the check at the point of the foul, then the attacker must return to the zone entry line to establish their pivot foot.',
    rules: ['17.2.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question:
      "I am a marker on the disc carrier. A 'pick' is called when I just counted '4'. What do I need to do to get the count back?",
    image: undefined,
    answerChoices: {
      a: 'Stall 2',
      b: 'Stall 3',
      c: 'Stalling 4',
      d: 'Stalling 5',
    },
    correctAnswers: ['d'],
    explanation:
      'The count picks up where it stopped, with a maximum of 6 following a pick. I just said 4, so now I have to say 5.',
    rules: ['9.5.4.', '9.6.', '9.6.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question:
      "I am on offense. I call 'foul' on the throw. It is not challenged, however my pass is caught. What happens?",
    image: undefined,
    answerChoices: {
      a: "The game continues if the thrower calls 'play on'",
      b: "The game continues even if the thrower does not call 'play on' and the defense has stopped",
      c: 'Play stops, possession of the disc is returned to the thrower and play resumes at (1) with a check',
      d: 'Play stops, possession remains with the receiver and play resumes at (1) with a check',
    },
    correctAnswers: ['a'],
    explanation: `La réponse se trouve dans:
"-rules of ultimate", paragraphe 16.2.4
-official annotations 16.6`,
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'I am defending the disc carrier. I commit a straddle called by the disc carrier.',
    image: undefined,
    answerChoices: {
      a: 'I continue to count without the game stopping, starting with the last number completely pronounced minus (1)',
      b: 'The game stops and resumes with a check with a count of (1)',
      c: 'The game stops and resumes with the last number fully pronounced minus (1)',
      d: 'I start counting again from (1) without the game stopping',
    },
    correctAnswers: ['a'],
    explanation: 'Play is stopped only if the scoring infraction is challenged.',
    rules: ['18.1.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TURNOVERS,
    question: 'I am allowed to catch my own pass if a teammate has touched it in the meantime.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['13.2.', '13.2.5.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CONTINUATION,
    question: 'After an uncontested stall-out, play must resume with a check',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation:
      'Play is stopped by the stall-out, and play must always resume with a check when stopped during a point.',
    rules: ['13.2.', '13.2.2.', '10.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.SPIRIT,
    question: 'Non-players on the sideline are never allowed to give their opinion on a game action.',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'Non-players on the sideline can give feedback if and only if they have been asked by someone involved in the call.',
    rules: ['1.10.', '1.10.1.', '1.10.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      "I'm on offense and on a reception, I purposely juggle the disc to gain ground. What should the defense call?",
    image: undefined,
    answerChoices: {
      a: 'Travel',
      b: 'Foul',
      c: 'Violation',
      d: "Nothing, it's allowed",
    },
    correctAnswers: ['a'],
    explanation: 'The answer can be found in the rules of ultimate, paragraph 18.2.5.6',
    rules: ['18.2.5.', '18.2.5.5.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question:
      'I am on offense. On a catch, I intentionally deflect the disc (without catching it) to a teammate in the end zone. What should the defense call?',
    image: undefined,
    answerChoices: {
      a: 'Travel',
      b: 'Foul',
      c: 'Violation',
      d: 'Nothing, it is allowed. There is a point',
    },
    correctAnswers: ['d'],
    explanation: 'The answer can be found in the official annotations, paragraph 18.12',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.FOULS,
    question: "I carry the disc. I call 'contact'. The marker does not contest. What happens?",
    image: undefined,
    answerChoices: {
      a: 'The marker resumes the count with the last fully pronounced number minus (1) without stopping the game',
      b: 'The game stops and the count resumes at (1)',
      c: 'The marker resumes the count at (1) without the game stopping',
      d: 'The game stops and the count resumes where it was with a maximum of (6)',
    },
    correctAnswers: ['c'],
    explanation:
      "The 'contact' infraction allows the count to be reduced to 1 after a marker foul, without stopping the game.",
    rules: ['17.6.1.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.PULL,
    question: 'I am on offense. On the pull from the opposing team, my team calls an offside. What happens?',
    image: undefined,
    answerChoices: {
      a: "My team takes possession at my team's brick point and play resumes with a check.",
      b: 'My team chooses whether to take possession of the disc where it is or at the brick point and play resumes without a check.',
      c: "My team waits for the disc to hit the ground, takes possession at my team's brick point and play resumes without a check.",
      d: 'This first call acts as a first warning and the game continues',
    },
    correctAnswers: ['c'],
    explanation: 'The correct answer can be found in Rules of ultimate, Appendix V4.0 paragraph 7.5.',
    rules: ['7.5.', '7.5.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.INFRACTIONS_VIOLATIONS,
    question: 'Can a pick be called by a striker?',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'The answer can be found in the official annotations, paragraph 18.15',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FOULS,
    question:
      "I am on offense and I run to catch a long pass. My defender trips me and I fall. Even though I think there is no way I could have caught the disc (too long a pass), I still have to call 'foul' and hold my call.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'The correct answer can be found in Interpretations - Rules of ultimate, paragraph 17.4.',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question: "I call a timeout with the count at (8). My team is out of timeouts. What's going on?",
    image: undefined,
    answerChoices: {
      a: 'It is a turnover',
      b: 'The game resumes with a check and Stalling 6',
      c: 'The game resumes with a check and Stalling 9',
      d: 'The game resumes with a check and Stalling 8',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['20.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.FIELD,
    question: "I'm on offense without the disc. I'm allowed to go out of bounds and come in at a different place",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: 'The answer can be found in rules of ultimate, official annotations, paragraph 11.5',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: 'How does the count start again after a contested stall-out?',
    image: undefined,
    answerChoices: {
      a: 'Stall 6',
      b: 'Stalling 7',
      c: 'Stalling 9',
      d: 'Stalling 8',
    },
    correctAnswers: ['d'],
    explanation: '',
    rules: ['9.5.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.STOPPAGE,
    question:
      "I twist my ankle on my own during a point. I call 'Injury' and the game stops. My team has one more timeout. What are the options?",
    image: undefined,
    answerChoices: {
      a: 'I am substituted and the opposing team can change a player if they wish',
      b: 'My team gets a timeout but no timeout is taken and I stay on the field',
      c: 'I am substituted but the opposing team cannot change a player if they wish to do so',
      d: 'I stay on the field without my team taking a timeout',
    },
    correctAnswers: ['a', 'b'],
    explanation: 'The rule is completed by the annotations, paragraph 19.1.',
    rules: ['19.1.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.CONTINUATION,
    question: 'After an uncontested pick, the account resumes:',
    image: undefined,
    answerChoices: {
      a: 'where it was at the time of the pick MINUS 2 with a maximum of (6)',
      b: 'where it was at the time of the pickup with a maximum of (6)',
      c: 'where it was at the time of the pickup with a maximum of (8)',
      d: 'where it was at the time of the pick with a maximum of (9)',
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: ['9.5.4.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TIMEOUT,
    question:
      "There's a turnover off the court. I have to wait until I have established my pivot foot to call a timeout.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation: 'The answer can be found in the official annotations, paragraph 20.1',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.DIFFICULT,
  },
  {
    category: Categories.STOPPAGE,
    question: 'During a point a player has her shoelace undone. Can the game be stopped for this reason?',
    image: undefined,
    answerChoices: {
      a: 'No, this is not a valid reason',
      b: "Yes, it doesn't matter if this player is an attacker or a defender",
      c: 'Yes, but only if the opponent agrees',
      d: 'Yes, but only if this player is a striker',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['10.3.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.CHECK,
    question:
      "A turnover occurs in the defended endzone, the thrower returns to the line. In order to play, she must wait for her marker to 'check' the disc.",
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['b'],
    explanation:
      'If the turnover occurred without a call that stopped the game, no check is needed. The correct answer can be found in the annotations, paragraph 10.1.',
    rules: undefined,
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.TEAMS,
    question: 'In outdoor play, how many players, at least, must a team field in order to play the point?',
    image: undefined,
    answerChoices: {
      a: '4',
      b: '5',
      c: '6',
      d: '7',
    },
    correctAnswers: ['b'],
    explanation: 'If there are less than 5 players, the team cannot play the point.',
    rules: ['5.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.MIDDLE,
  },
  {
    category: Categories.OUT,
    question: 'The outer lines of the field out of bounds (out)',
    image: undefined,
    answerChoices: {
      a: 'True',
      b: 'False',
    },
    correctAnswers: ['a'],
    explanation: '',
    rules: ['11.1.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.EASY,
  },
  {
    category: Categories.COUNT,
    question: 'To be able to count, a defender must be at..',
    image: undefined,
    answerChoices: {
      a: "less than 5 meters from the thrower's pivot point",
      b: "less than 3 meters from the thrower's pivot point",
      c: "less than 1 meter from the thrower's pivot point",
      d: 'the distance he wants as long as the disc holder can hear the count',
    },
    correctAnswers: ['b'],
    explanation: '',
    rules: ['9.3.', '9.3.2.'],
    source: 'Monkeys - Pierre Gruau',
    level: Levels.EASY,
  },
];
