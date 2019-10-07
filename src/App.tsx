import * as React from 'react';

import Weekday from './components/Weekday';
import Period from './components/Period';
import Subject from './components/Subject';
import PeriodTable from './components/PeriodTable';

class App extends React.Component {
  render() {
    return(
      <div>
        <Weekday />
        <Period />
        <Subject />
        <PeriodTable />
      </div>
    )
  }
};

export default App;
