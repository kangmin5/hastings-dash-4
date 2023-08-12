import { SetStateAction, useState } from 'react';

// ** https://codefrontend.com/local-storage-javascript-react/
// ** https://stackblitz.com/edit/react-ts-x4nwoj?file=useStoredState.ts,storage.ts&ref=code-frontend
function useStoredState<T>(key: string, defaultValue?: T | (() => T)) {
  // 👇 Load stored state into regular react component state
  const [state, setState] = useState<T>(  () : any => {
    const storedState = localStorage.getItem(key);

    if (storedState) {
      // 🚩 Data is stored as string so need to parse
      return JSON.parse(storedState) as T;
    }

    // No stored state - load default value.
    // It could be a function initializer or plain value.
    return defaultValue instanceof Function ? defaultValue() : defaultValue;
  });

  // 👇 Keeps the exact same interface as setState - value or setter function.
  const setValue = (value: SetStateAction<T>) => {
    const valueToStore = value instanceof Function ? value(state) : value;
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setState(valueToStore);
  };

  // as const tells TypeScript you want tuple type, not array.
  return [state, setValue] as const;
}

export default useStoredState;
