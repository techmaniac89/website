import React from 'react'

export default class Subelement extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title
        this.link = props.link
    }

    render() {
        return (
            <li>
                <a href={this.link}>
                    {this.title}
                </a>
            </li>
        );
    }
}