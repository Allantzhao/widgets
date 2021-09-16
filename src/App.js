import React from 'react';
import Accordion from './Components/Accordion';

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
      <Accordion items={items}/>
    </div>
  );
}