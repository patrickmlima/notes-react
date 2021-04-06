import React, { Component } from 'react';

import './style.css'

class NoteForm extends Component {

    constructor(props) {
        super(props);

        const { createNote } = props;
        this._createNote = createNote
        this.title = '';
        this.text = ''
    }

    _handleTitleChange(event) {
        this.title = event.target.value;
    }

    _handleText(event) {
        this.text = event.target.value;
    }

    _submitNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this._createNote(this.title, this.text)
    }

    render() {
        return (
            <form className='note-form'
            onSubmit={this._submitNote.bind(this)}>
                <input 
                className='note-form_input'
                type="text"
                placeholder="Title"
                onChange={this._handleTitleChange.bind(this)} />

                <textarea
                rows={15}
                className='note-form_input'
                placeholder="Write your note..."
                onChange={this._handleText.bind(this)}
                />

                <button className='note-form_input note-form_submit'>
                    Create
                </button>
            </form>
        );
    }
}

export default NoteForm;
