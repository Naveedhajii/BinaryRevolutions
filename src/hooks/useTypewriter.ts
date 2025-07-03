'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], wait = 3000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const current = wordIndex % words.length;
    const fullTxt = words[current];

    if (isDeleting) {
      setText(fullTxt.substring(0, text.length - 1));
      setTypingSpeed(75);
    } else {
      setText(fullTxt.substring(0, text.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && text === fullTxt) {
      setTimeout(() => setIsDeleting(true), wait);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex(wordIndex + 1);
    }

    const timer = setTimeout(() => {}, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, wordIndex, words, wait]);

  useEffect(() => {
    if (!isDeleting && text !== words[wordIndex % words.length]) {
      const timer = setTimeout(() => setText(words[wordIndex % words.length].substring(0, text.length + 1)), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && text !== '') {
      const timer = setTimeout(() => setText(words[wordIndex % words.length].substring(0, text.length - 1)), typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, typingSpeed, words, wordIndex]);

  return text;
}