const ACTIVE_PROBLEM_STYLESHEET_ID = 'active-problem-stylesheet';

function ensureProblemStylesheet(stylesheetUrl) {
  let link = document.getElementById(ACTIVE_PROBLEM_STYLESHEET_ID);

  if (!link) {
    link = document.createElement('link');
    link.id = ACTIVE_PROBLEM_STYLESHEET_ID;
    link.rel = 'stylesheet';
    document.head.append(link);
  }

  if (link.href !== stylesheetUrl.href) {
    link.href = stylesheetUrl.href;
  }
}

export async function mountProblemScaffold(container, options) {
  const {
    baseUrl,
    htmlFile = './template.html',
    cssFile = './styles.css',
    onMount,
  } = options;
  const htmlUrl = new URL(htmlFile, baseUrl);
  const cssUrl = new URL(cssFile, baseUrl);

  ensureProblemStylesheet(cssUrl);

  const response = await fetch(htmlUrl);
  const markup = await response.text();

  container.innerHTML = markup;

  if (onMount) {
    onMount(container);
  }
}
