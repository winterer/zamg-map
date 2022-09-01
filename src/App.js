import dayjs from 'dayjs';
import React from 'react';
import './App.css';
import ZamgView from './ZamgView';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: dayjs()
    }
  }

  handleDateChange(date) {
    this.setState({ date })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.date.format('DD.MM.YYYY HH:mm')}</h1>
        <header className="App-header">
          <ZamgView onDateChange={(e) => this.handleDateChange(e)} />
        </header>
      </div>
    );
  }
}

export default App;
