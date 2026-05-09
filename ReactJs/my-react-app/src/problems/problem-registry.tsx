import { useState } from 'react';
import Autocomplete from '../components/autocomplete/autocomplete';
import MultiSelectDropdown from '../components/multi-select-dropdown/multi-select-dropdown';
import OtpInput from '../components/otp-input/otp-input';
import VotingPoll from '../components/voting-poll/voting-poll';
import fruits from '../mocks/fruits.json';
import type { PracticeProblem } from '../types/problem';
import Stopwatch from '../components/stopwatch/stopwatch';

const fruitNames = fruits.map((fruit) => fruit.name);

function MultiSelectDropdownDemo() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <MultiSelectDropdown
      options={fruitNames}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  );
}

export const practiceProblems: PracticeProblem[] = [
  {
    id: 'autocomplete',
    title: 'Autocomplete',
    status: 'Ready',
    difficulty: 'Easy',
    summary: 'Search a local dataset with instant feedback and item selection.',
    focusAreas: ['input handling', 'filtering', 'suggestion rendering'],
    component: () => <Autocomplete data={fruits} />,
  },
  {
    id: 'voting-poll',
    title: 'Voting Poll',
    status: 'Ready',
    difficulty: 'Easy',
    summary: 'Track votes and visualize the distribution as a live bar chart.',
    focusAreas: ['state updates', 'percentages', 'data visualization'],
    component: VotingPoll,
  },
  {
    id: 'otp-input',
    title: 'OTP Input',
    status: 'Ready',
    difficulty: 'Medium',
    summary: 'Manage focus, keyboard navigation, and paste behavior across inputs.',
    focusAreas: ['focus management', 'keyboard UX', 'controlled inputs'],
    component: () => <OtpInput otpLength={4} />,
  },
  {
    id: 'multi-select-dropdown',
    title: 'Multi Select Dropdown',
    status: 'Ready',
    difficulty: 'Medium',
    summary: 'Select multiple values from a dropdown while reflecting current state.',
    focusAreas: ['list state', 'selection logic', 'toggle UI'],
    component: MultiSelectDropdownDemo,
  },
  {
    id: 'memory-game',
    title: 'Memory Game',
    status: 'In Progress',
    difficulty: 'Medium',
    summary: 'Match pairs while coordinating timers, board state, and turn logic.',
    focusAreas: ['game state', 'timing', 'derived UI state'],
  },
  {
    id: 'snake-and-ladder',
    title: 'Snake and Ladder',
    status: 'Planned',
    difficulty: 'Medium',
    summary: 'Model board rules, dice rolls, and player movement with deterministic transitions.',
    focusAreas: ['state machine thinking', 'game rules', 'board rendering'],
  },
   {
    id: 'stopwatch',
    title: 'Stopwatch',
    status: 'Ready',
    difficulty: 'Easy',
    summary: 'Implement a stopwatch with start, stop, and reset functionality.',
    focusAreas: ['state management', 'timing', 'UI updates'],
        component: () => <Stopwatch />,
  },
];
