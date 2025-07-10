'use client';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';
export const products = [
  {
    title: 'Fundamentals of Music',
    link: 'https://www.musictheory.net/lessons/10',
    thumbnail:
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Major & Minor Scales',
    link: 'https://www.musictheory.net/lessons/21',
    thumbnail:
      'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Chord Progressions',
    link: 'https://www.teoria.com/en/tutorials/functions/',
    thumbnail:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Intervals in Music',
    link: 'https://www.musictheory.net/lessons/30',
    thumbnail:
      'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Circle of Fifths',
    link: 'https://www.musictheory.net/lessons/30',
    thumbnail:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Time Signatures',
    link: 'https://www.musictheory.net/lessons/13',
    thumbnail:
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Key Signatures',
    link: 'https://www.musictheory.net/lessons/25',
    thumbnail:
      'https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Rhythm & Meter',
    link: 'https://www.earmaster.com/music-theory-online/course/lesson-3-what-is-rhythm.html',
    thumbnail:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Modes in Music',
    link: 'https://www.musictheory.net/lessons/61',
    thumbnail:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Cadences & Phrases',
    link: 'https://www.musictheoryacademy.com/understanding-music/cadences/',
    thumbnail:
      'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Melody & Harmony',
    link: 'https://www.musictheory.net/lessons/40',
    thumbnail:
      'https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Musical Notation',
    link: 'https://www.musicnotes.com/blog/2016/12/01/how-to-read-sheet-music/',
    thumbnail:
      'https://images.unsplash.com/photo-1506394522035-27bd6d51f29d?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Ear Training',
    link: 'https://www.tonedear.com/',
    thumbnail:
      'https://images.unsplash.com/photo-1601582585705-7393c2a9d6be?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Form in Music',
    link: 'https://www.musictheoryacademy.com/understanding-music/musical-form/',
    thumbnail:
      'https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Dynamics & Expression',
    link: 'https://www.musictheory.net/lessons/79',
    thumbnail:
      'https://images.unsplash.com/photo-1502334200185-45dc7a180f4d?auto=format&fit=crop&w=500&q=60',
  },
];
  
  
  

function page() {
    return <HeroParallax products={products} />;
}

export default page;
