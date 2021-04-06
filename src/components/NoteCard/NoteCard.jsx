import React, { Component } from 'react';
import './style.css';

class NoteCard extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const { title, text } = this.props;
        return (
            <section className='card-note'>
                <header className='card-note-header'>
                    <h3 className='card-note-title'>
                        {title}
                    </h3>
                </header>
                <p className='card-note-text'>
                    {text}
                </p>
            </section>
        );
    }
}

export default NoteCard;
