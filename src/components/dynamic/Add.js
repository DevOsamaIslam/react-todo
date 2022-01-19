import { Component } from 'react'

export default class Add extends Component {
	state = {
		task: ''
	}

	render() {
		return (
			<div className='addnew'>
				<input type='text' name='newItem' onChange={e => this.setState({task: e.target.value})}/>
				<button onClick={this.props.add.bind(this, this.state.task)}>Create!</button>
			</div>
		)
	}
}