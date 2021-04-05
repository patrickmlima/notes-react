import React, { Component } from 'react';

import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './assets/index.css';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <section>
        <NoteForm />
        <NotesList />
      </section>
    );
  }
}

export default App;
