'use strict';

const root = document.documentElement;
const themeButton = document.querySelector('.theme-button');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let chosenTheme = null;
try { chosenTheme = localStorage.getItem('mcl-theme'); } catch {}
if (chosenTheme !== 'light' && chosenTheme !== 'dark') chosenTheme = null;

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.textContent = dark ? 'Light theme' : 'Dark theme';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#131b17' : '#f7f9f8';
}

applyTheme(chosenTheme || (systemTheme.matches ? 'dark' : 'light'));
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(chosenTheme);
  try { localStorage.setItem('mcl-theme', chosenTheme); } catch {}
});
systemTheme.addEventListener('change', event => {
  if (!chosenTheme) applyTheme(event.matches ? 'dark' : 'light');
});

const filters = document.querySelector('.filters');
const projects = Array.from(document.querySelectorAll('.project'));
const projectCount = document.querySelector('#project-count');
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const category = button.dataset.filter;
  filters.querySelectorAll('button').forEach(item => {
    item.setAttribute('aria-pressed', String(item === button));
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) count++;
  });
  projectCount.textContent = `${count} projects shown`;
});
