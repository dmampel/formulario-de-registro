import { useEffect } from 'react';

export const useShortcut = (
  key: string,
  modifier: 'ctrl' | 'alt' | 'shift' | 'meta' | null,
  callback: (e: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let modifierMatch = true;
      if (modifier === 'ctrl') modifierMatch = e.ctrlKey;
      else if (modifier === 'alt') modifierMatch = e.altKey;
      else if (modifier === 'shift') modifierMatch = e.shiftKey;
      else if (modifier === 'meta') modifierMatch = e.metaKey;

      if (modifierMatch && e.key.toLowerCase() === key.toLowerCase()) {
        callback(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, modifier, callback]);
};
