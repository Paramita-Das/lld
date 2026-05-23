import { problems, problemSections } from './registry.js';
import { clearElement, createElement } from './shared/dom.js';

const appRoot = document.querySelector('#app');
const defaultProblem = problems.find((problem) => problem.render) ?? problems[0] ?? null;
let activeProblemId = defaultProblem?.id ?? null;

function getProblemById(problemId) {
  return problems.find((problem) => problem.id === problemId) ?? null;
}

function renderHero() {
  const hero = createElement('section', 'hero-panel');
  const eyebrow = createElement('p', 'eyebrow', 'Vanilla JS Machine Coding Workspace');
  const title = createElement(
    'h1',
    'hero-title',
    'Run one JavaScript app and open each LLD problem from a shared hub.',
  );
  const copy = createElement(
    'p',
    'hero-copy',
    'This mirrors the React workflow, but keeps the implementation fully DOM-driven so you can practice fundamentals without a framework.',
  );
  const statGrid = createElement('div', 'hero-stats');

  const stats = [
    { label: 'Total problems', value: String(problems.length) },
    {
      label: 'Done',
      value: String(problems.filter((problem) => problem.status === 'done').length),
    },
    {
      label: 'Planned or active',
      value: String(problems.filter((problem) => problem.status !== 'done').length),
    },
  ];

  stats.forEach((stat) => {
    const card = createElement('div', 'stat-card');
    const value = createElement('span', 'stat-value', stat.value);
    const label = createElement('span', 'stat-label', stat.label);

    card.append(value, label);
    statGrid.append(card);
  });

  hero.append(eyebrow, title, copy, statGrid);
  return hero;
}

function renderProblemButton(problem, sidebarList) {
  const button = createElement('button', 'problem-card');
  const header = createElement('div', 'problem-card-header');
  const title = createElement('h3', '', problem.title);
  const difficulty = createElement('span', 'difficulty-badge', problem.difficulty);
  const summary = createElement('p', '', problem.summary);

  if (problem.id === activeProblemId) {
    button.classList.add('problem-card-active');
  }

  header.append(title, difficulty);
  button.append(header, summary);
  button.type = 'button';
  button.addEventListener('click', () => {
    activeProblemId = problem.id;
    renderWorkspace(appRoot);
  });

  sidebarList.append(button);
}

function renderSidebar() {
  const sidebar = createElement('aside', 'problem-list-panel');
  const heading = createElement('div', 'panel-heading');
  const title = createElement('h2', '', 'Problem Catalog');
  const copy = createElement('p', '', 'Open one problem at a time from this index.');
  const index = createElement('div', 'problem-index');

  heading.append(title, copy);
  sidebar.append(heading, index);

  problemSections.forEach((section) => {
    const matchingProblems = problems.filter((problem) => problem.status === section.status);
    const group = createElement('section', 'problem-group');
    const groupHeader = createElement('div', 'problem-group-header');
    const titleRow = createElement('div', 'problem-group-title-row');
    const groupTitle = createElement('h3', '', section.title);
    const count = createElement('span', `status-pill status-${section.status}`, String(matchingProblems.length));
    const description = createElement('p', '', section.description);
    const list = createElement('div', 'problem-list');

    titleRow.append(groupTitle, count);
    groupHeader.append(titleRow, description);
    group.append(groupHeader, list);

    matchingProblems.forEach((problem) => renderProblemButton(problem, list));
    index.append(group);
  });

  return sidebar;
}

function renderPreview(activeProblem) {
  const preview = createElement('section', 'preview-panel');

  if (!activeProblem) {
    const empty = createElement('div', 'empty-state');
    const title = createElement('h2', '', 'No problem selected');
    const copy = createElement('p', '', 'Choose a problem from the index to begin.');
    empty.append(title, copy);
    preview.append(empty);
    return preview;
  }

  const heading = createElement('div', 'panel-heading');
  const headingCopy = createElement('div', '');
  const eyebrow = createElement('p', 'eyebrow', 'Selected Problem');
  const title = createElement('h2', '', activeProblem.title);
  const difficulty = createElement('span', 'difficulty-badge', activeProblem.difficulty);
  const summary = createElement('p', 'problem-summary', activeProblem.summary);
  const focusList = createElement('div', 'focus-list');
  const sandbox = createElement('div', 'problem-sandbox');

  headingCopy.append(eyebrow, title);
  heading.append(headingCopy, difficulty);

  activeProblem.focusAreas.forEach((area) => {
    focusList.append(createElement('span', 'focus-chip', area));
  });

  if (activeProblem.render) {
    activeProblem.render(sandbox);
  } else {
    const empty = createElement('div', 'empty-state');
    const emptyTitle = createElement('h3', '', 'Problem scaffold pending');
    const emptyCopy = createElement(
      'p',
      '',
      'Keep the metadata here, then add the implementation when you start the next practice round.',
    );
    empty.append(emptyTitle, emptyCopy);
    sandbox.append(empty);
  }

  preview.append(heading, summary, focusList, sandbox);
  return preview;
}

function renderWorkspace(container) {
  clearElement(container);

  const activeProblem = getProblemById(activeProblemId);
  const appShell = createElement('main', 'app-shell');
  const workspace = createElement('section', 'workspace-grid');
  const previewPanel = renderPreview(activeProblem);
  const sidebar = renderSidebar();

  workspace.append(sidebar, previewPanel);
  appShell.append(renderHero(), workspace);
  container.append(appShell);
}

renderWorkspace(appRoot);
