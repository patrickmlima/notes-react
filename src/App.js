import React, { Component } from 'react';

import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './assets/index.css';
import './assets/App.css';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    console.log(`New note created: ${title} - ${text}`);
    const newNote = { title, text };
    const updatedNotes = [...this.state.notes, newNote];
    this.setState({ notes: updatedNotes });
  }
  render() {
    return (
      <section>
        <NoteForm createNote={this.createNote.bind(this)} />
        <NotesList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
