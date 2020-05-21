import React, { PureComponent } from 'react'

class PC extends PureComponent {
    render() {
        console.log('Pc')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PC
