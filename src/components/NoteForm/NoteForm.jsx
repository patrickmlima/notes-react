import React, { Component } from 'react';

import './style.css'

class NoteForm extends Component {
    render() {
        return (
            <form className='note-form'>
                <input 
                className='note-form_input'
                type="text"
                placeholder="Title" />

                <textarea
                rows={15}
                className='note-form_input'
                placeholder="Write your note..."
                />

                <button className='note-form_input note-form_submit'>
                    Create
                </button>
            </form>
        );
    }
}

export default NoteForm;
