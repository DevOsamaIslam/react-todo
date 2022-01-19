import { Component } from 'react'

export default class ThingsTodo extends Component {
	styles = () => {
		let style = {}
		style.textDecoration = this.props.li.isFinished ? 'line-through' : 'none'
		return style
	}
	

	render() {
		let li = this.props.li
		return (
			<div className='item' style={this.styles()}>
				<input 
					type='checkbox' 
					checked={li.isFinished}
					onChange={this.props.finish.bind(this, li.id)}/>
				<span>{li.title}</span>
				<button onClick={this.props.delete.bind(this, li.id)}>X</button>
			</div>
		)
	}
}