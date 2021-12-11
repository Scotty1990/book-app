// import React, { Component } from 'react'
// import DataContext from './DataContext'

// class DataProvider extends Component {
//     constructor(props) {
//         super(props)
//         this.updateState = this.updateState.bind(this)
//         this.state = {
//             x: 0,
//             y: 0,
//             update: this.updateState
//         }
//     }

//     updateState(values) {
//         this.setState(values)
//     }

//     render() {
//         return (
//             <DataContext.Provider value={this.state}>
//                 {this.props.children}
//             </DataContext.Provider>
//         )
//     }
// }

// export default DataProvider