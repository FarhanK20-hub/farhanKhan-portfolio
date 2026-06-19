import { useEffect, useState } from 'react';

export function useSecretCode(secretCode: string) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let input = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement || 
        e.target instanceof HTMLTextAreaElement
      ) return;

      // Only care about printable characters and spaces
      if (e.key.length === 1) {
        input += e.key.toLowerCase();
        
        // Keep input length manageable
        if (input.length > secretCode.length) {
          input = input.slice(-secretCode.length);
        }

        if (input === secretCode.toLowerCase()) {
          setSuccess(true);
          input = ''; // reset
          
          // Reset success state after a short delay so it can be triggered again
          setTimeout(() => setSuccess(false), 2000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [secretCode]);

  return success;
}
