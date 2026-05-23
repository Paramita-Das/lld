import { renderAutocomplete } from './problems/autocomplete/index.js';
import { renderCircleGame } from './problems/circle-game/index.js';
import { renderMemoryGame } from './problems/memory-game/index.js';
import { renderMultiSelectDropdown } from './problems/multi-select-dropdown/index.js';
import { renderOtpInput } from './problems/otp-input/index.js';
import { renderSnakeAndLadder } from './problems/snake-and-ladder/index.js';
import { renderStopwatch } from './problems/stopwatch/index.js';
import { renderVotingPoll } from './problems/voting-poll/index.js';

export const problemSections = [
  {
    id: 'done',
    title: 'Done',
    description: 'Available to open right now.',
    status: 'done',
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    description: 'Problems currently being implemented.',
    status: 'in-progress',
  },
  {
    id: 'planned',
    title: 'Planned',
    description: 'Queued for future vanilla JS practice.',
    status: 'planned',
  },
];

export const problems = [
  {
    id: 'autocomplete',
    title: 'Autocomplete',
    difficulty: 'Easy',
    status: 'done',
    summary: 'Search a local dataset with instant suggestions and click-to-fill behavior.',
    focusAreas: ['input handling', 'filtering', 'DOM updates'],
    render: renderAutocomplete,
  },
  {
    id: 'voting-poll',
    title: 'Voting Poll',
    difficulty: 'Easy',
    status: 'planned',
    summary: 'Track votes and visualize the distribution as a live bar chart.',
    focusAreas: ['event handling', 'derived state', 'DOM rendering'],
    render: renderVotingPoll,
  },
  {
    id: 'otp-input',
    title: 'OTP Input',
    difficulty: 'Medium',
    status: 'planned',
    summary: 'Manage focus, keyboard navigation, and paste behavior across inputs.',
    focusAreas: ['keyboard UX', 'focus control', 'state sync'],
    render: renderOtpInput,
  },
  {
    id: 'multi-select-dropdown',
    title: 'Multi Select Dropdown',
    difficulty: 'Medium',
    status: 'planned',
    summary: 'Select multiple values from a dropdown while reflecting current state.',
    focusAreas: ['toggle logic', 'list state', 'outside click handling'],
    render: renderMultiSelectDropdown,
  },
  {
    id: 'memory-game',
    title: 'Memory Game',
    difficulty: 'Medium',
    status: 'planned',
    summary: 'Match tiles while managing turn state, delays, and win conditions.',
    focusAreas: ['game loops', 'timers', 'derived board state'],
    render: renderMemoryGame,
  },
  {
    id: 'snake-and-ladder',
    title: 'Snake and Ladder',
    difficulty: 'Medium',
    status: 'planned',
    summary: 'Model board rules, dice rolls, and player movement with deterministic transitions.',
    focusAreas: ['state machine thinking', 'game rules', 'board rendering'],
    render: renderSnakeAndLadder,
  },
  {
    id: 'stopwatch',
    title: 'Stopwatch',
    difficulty: 'Easy',
    status: 'planned',
    summary: 'Implement a stopwatch with start, stop, and reset functionality.',
    focusAreas: ['state management', 'timing', 'UI updates'],
    render: renderStopwatch,
  },
  {
    id: 'circle-game',
    title: 'Circle Game',
    difficulty: 'Medium',
    status: 'planned',
    summary: 'Implement a circle game with click detection and scoring.',
    focusAreas: ['state management', 'event handling', 'UI updates'],
    render: renderCircleGame,
  },
];
