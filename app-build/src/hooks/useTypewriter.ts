import { useState, useEffect } from 'react';

export function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIdx];

    if (isDeleting) {
      if (text === '') {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }, 350); // Pause before typing next word
      } else {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, 38);
      }
    } else {
      if (text === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1900); // Pause after typing full word
      } else {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, 75);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx, words]);

  return text;
}
