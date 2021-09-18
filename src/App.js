import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'Red'
  },
  {
    label: 'The Color Green',
    value: 'Green'
  },
  {
    label: 'A Shade of Blue',
    value: 'Blue'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
}