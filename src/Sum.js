import React from 'react'

export class Sum extends React.Component {
    render() {
        const sum = (a,b) => {
            return a + b;
        }
        return <h2>{sum(5,6)}</h2>
    }
}

