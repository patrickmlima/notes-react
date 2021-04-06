import React, { Component } from 'react';

import NoteCard from '../NoteCard';
import './style.css'

class NotesList extends Component {
    // eslint-disable-next-line 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='notes-list'>
                {
                    this.props.notes.map((note, index) => (
                        <li className='notes-list_item' key={index}>
                            <NoteCard title={note.title} text={note.text} />
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default NotesList;
