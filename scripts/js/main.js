// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

const toggleThemeSwitch = document.querySelector('#theme-toggle');
const root = document.documentElement;
const themeText = document.querySelector('.current-theme-text');

function toggleTheme() {
  const switchClass = toggleThemeSwitch.checked ? 'dark' : 'light';
  console.log(switchClass);
  root.className = switchClass;
  themeText.innerText = switchClass;
}

toggleThemeSwitch.addEventListener('click', toggleTheme);
