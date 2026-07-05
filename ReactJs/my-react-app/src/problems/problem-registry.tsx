import { useState } from 'react';
import Autocomplete from '../components/autocomplete/autocomplete';
import MultiSelectDropdown from '../components/multi-select-dropdown/multi-select-dropdown';
import OtpInput from '../components/otp-input/otp-input';
import VotingPoll from '../components/voting-poll/voting-poll';
import fruits from '../mocks/fruits.json';
import type { PracticeProblem } from '../types/problem';
import Stopwatch from '../components/stopwatch/stopwatch';
import CircleGame from '../components/circle-game/circle-game';
import Pagination from '../components/pagination/pagination';
import FileExplorer from '../components/file-explorer/file-explorer';
import ToDoList from '../components/to-do-list/to-do-list';
import TabForm from '../components/tab-form/tab-form';
import MultiAccordion from '../components/accordion/multi-accordion';
import Chat from '../components/chat-app/chat-app';
import Carousel from '../components/carousel/carousel';

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
  {
    id: 'circle-game',
    title: 'Circle Game',
    status: 'Ready',
    difficulty: 'Medium',
    summary: 'Implement a circle game with click detection and scoring.',
    focusAreas: ['state management', 'event handling', 'UI updates'],
    component: () => <CircleGame />,
  },
  {
    id: 'pagination',
    title: 'Pagination',
    status: 'Ready',
    difficulty: 'Medium',
    summary: 'Build a pagination component with page navigation and item slicing.',
    focusAreas: ['state management', 'page calculation', 'UI updates'],
    component: () => <Pagination />,
  },
   {
    id: 'file-explorer',
    title: 'File Explorer',
    status: 'In Progress',
    difficulty: 'Medium',
    summary: 'Navigate and manage files in a virtual file system.',
    focusAreas: ['file management', 'UI layout', 'drag and drop'],
    component: () => <FileExplorer />,
  },
   {
    id: 'to-do-list',
    title: 'To Do List',
    status: 'Ready',
    difficulty: 'Medium',
    summary: 'Manage tasks with features like adding, removing, and editing items.',
    focusAreas: ['state management', 'CRUD operations', 'UI updates'],
    component: () => <ToDoList />,
  },
   {
    id: 'tabs',
    title: 'Tabs',
    status: 'In Progress',
    difficulty: 'Medium',
    summary: 'Implement a tabbed interface for organizing content.',
    focusAreas: ['state management', 'UI layout', 'accessibility'],
    component: () => <TabForm />,
  },
   {
    id: 'accordion',
    title: 'Accordion',
    status: 'In Progress',
    difficulty: 'Medium',
    summary: 'Implement a accordion interface for showing content.',
    focusAreas: ['state management', 'UI layout', 'Lifting Up State'],
    component: () => <MultiAccordion />,
  },
   {
    id: 'chat',
    title: 'Chat',
    status: 'In Progress',
    difficulty: 'Medium',
    summary: 'Implement a chat interface for real-time messaging.',
    focusAreas: ['state management', 'UI layout', 'Lifting Up State'],
    component: () => <Chat />,
  },
   {
    id: 'carousel',
    title: 'Carousel',
    status: 'In Progress',
    difficulty: 'Easy',
    summary: 'Implement a carousel component for displaying images.',
    focusAreas: ['state management', 'UI layout', 'Lifting Up State'],
    component: () => <Carousel />,
  },
];
