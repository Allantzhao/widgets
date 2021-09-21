import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

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
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
          label="select a color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}