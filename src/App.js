import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end js framework'
  },
  {
    title: 'Why use React?',
    content: 'Because its a favorite amongst front end developers!'
  },
  {
    title: 'How do you use React?',
    content: 'You use components'
  }
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
}