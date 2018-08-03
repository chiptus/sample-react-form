let localState = null;

export function getLocalState() {
  if (localState) {
    return localState;
  }
  localState = getLocalStateFromStorage();
  return localState;
}

export function nextStep() {
  saveKey('step', localState.step + 1);
}

export function saveEmail(email) {
  saveKey('email', email);
}

export function savePassword(password) {
  saveKey('password', password);
}

export function saveTimezone(tz) {
  saveKey('timezone', tz);
}

export function saveKey(key, value) {
  localState[key] = value;
  saveLocalState();
}

function saveLocalState() {
  localStorage.appState = JSON.stringify(localState);
}

function getLocalStateFromStorage() {
  const localStateString = localStorage.appState;
  return parse(localStateString);
}

function parse(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    return {
      email: '',
      password: '',
      timezone: '',
      step: 1,
    };
  }
}
