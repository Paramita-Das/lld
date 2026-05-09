import { useState } from 'react';
import './App.css';
import { practiceProblems } from './problems/problem-registry';

const problemSections = [
  { title: 'Done', status: 'Ready' as const },
  { title: 'In Progress', status: 'In Progress' as const },
  { title: 'Planned', status: 'Planned' as const },
];

function App() {
  const defaultProblemId = practiceProblems.find(
    (problem) => problem.status === 'Ready' && problem.component,
  )?.id;
  const [activeProblemId, setActiveProblemId] = useState<string | null>(defaultProblemId ?? null);

  const activeProblem = practiceProblems.find((problem) => problem.id === activeProblemId) ?? null;

  const ActiveComponent = activeProblem?.component;

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">React Machine Coding Workspace</p>
        <h1>Practice LLD problems like a growing problem set, not a demo page.</h1>
        <p className="hero-copy">
          Each problem stays independently explorable, while the home screen gives you a quick
          overview of what is ready, in progress, or planned next.
        </p>
        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-value">{practiceProblems.length}</span>
            <span className="stat-label">Total problems</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">
              {practiceProblems.filter((problem) => problem.status === 'Ready').length}
            </span>
            <span className="stat-label">Ready to run</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">
              {practiceProblems.filter((problem) => problem.status !== 'Ready').length}
            </span>
            <span className="stat-label">Pipeline ideas</span>
          </div>
        </div>
      </section>

      <section className="workspace-grid">
        <aside className="problem-list-panel">
          <div className="panel-heading">
            <h2>Problem Catalog</h2>
            <p>Use this as your practice queue and launchpad.</p>
          </div>
          <div className="problem-index">
            {problemSections.map((section) => {
              const problems = practiceProblems.filter(
                (problem) => problem.status === section.status,
              );

              return (
                <section key={section.status} className="problem-group">
                  <div className="problem-group-header">
                    <div className="problem-group-title-row">
                      <h3>{section.title}</h3>
                      <span
                        className={`status-pill status-${section.status
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {problems.length}
                      </span>
                    </div>
                    <p>{section.status === 'Ready' ? 'Available to open now.' : `Problems marked ${section.status.toLowerCase()}.`}</p>
                  </div>

                  <div className="problem-list">
                    {problems.map((problem) => {
                      const isActive = problem.id === activeProblemId;

                      return (
                        <button
                          key={problem.id}
                          className={`problem-card${isActive ? ' problem-card-active' : ''}`}
                          onClick={() => setActiveProblemId(problem.id)}
                          type="button"
                        >
                          <div className="problem-card-header">
                            <h3>{problem.title}</h3>
                            <span className="difficulty-badge">{problem.difficulty}</span>
                          </div>
                          <p>{problem.summary}</p>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </aside>

        <section className="preview-panel">
          {activeProblem ? (
            <>
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Selected Problem</p>
                  <h2>{activeProblem.title}</h2>
                </div>
                <span className="difficulty-badge">{activeProblem.difficulty}</span>
              </div>

              <p className="problem-summary">{activeProblem.summary}</p>

              <div className="focus-list">
                {activeProblem.focusAreas.map((area) => (
                  <span key={area} className="focus-chip">
                    {area}
                  </span>
                ))}
              </div>

              <div className="problem-sandbox">
                {ActiveComponent ? (
                  <ActiveComponent />
                ) : (
                  <div className="empty-state">
                    <h3>Problem scaffold pending</h3>
                    <p>
                      Keep the metadata here, then add the implementation when you start the next
                      practice round.
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <h2>No problem selected</h2>
              <p>Choose a problem from the catalog to start practicing.</p>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
