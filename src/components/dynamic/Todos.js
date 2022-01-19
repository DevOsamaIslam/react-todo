import { Component } from 'react'
import ThingsTodo from './ThingsTodo'

export default class Todos extends Component {

	render() {
		return this.props.todos.map(li => <ThingsTodo 
			key={li.id} 
			li={li} 
			finish={this.props.finish} 
			delete={this.props.delete}/>
		)
	}
}