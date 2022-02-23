import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Display from './components/Display';

function App() {
  
  const tabArray = [
      {
        label: "Tab 1",
        content: "Content for Tab 1",
      },
      {
        label: "Tab 2",
        content: "Content for Tab 2",
      },
      {
        label: "Tab 3",
        content: "Content for Tab 3",
      },
  ];

  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <div className="App">
      <Tabs tabArray={tabArray} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Display tabContent={tabArray[activeTab].content} />
    </div>
  );
}

export default App;
