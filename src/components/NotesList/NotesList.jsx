import React, { Component } from 'react';

import NoteCard from '../NoteCard';
import './style.css'

class NotesList extends Component {
    render() {
        return (
            <ul className='notes-list'>
                {
                    Array.of('Trabalho', 'Trabalho', 'Estudos')
                        .map((category, index) => (
                            <li className='notes-list_item' key={index}>
                                <div>{category}</div>
                                <NoteCard />
                            </li>
                        ))
                }
            </ul>
        );
    }
}

export default NotesList;
