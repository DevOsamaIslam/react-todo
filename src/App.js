import { Component } from 'react'
import './App.css'
import Todos from './components/dynamic/Todos'
import Title from './components/static/Title'
import Add from './components/dynamic/Add'
import { v4 } from 'uuid'
export default class App extends Component {
	state = {
		todos: [
			{
				id: v4(),
				title: 'Fix bugs',
				isFinished: false
			},
			{
				id: v4(),
				title: 'Do the dishes',
				isFinished: false
			},
			{
				id: v4(),
				title: 'Buy groceries',
				isFinished: false
			}
		]
	}
	finish = id => {
		this.setState({
			todos: this.state.todos.map(li => {
				if(li.id === id) li.isFinished = !li.isFinished
				return li
			})
		})
	}
	delete = id => {
		this.setState({
			todos: this.state.todos.filter(li => li.id !==id)
		})
	}
	add = item => {
		let todos = this.state.todos
		todos.push({
			id: v4(),
			title: item,
			isFinished: false
		})
		this.setState({
			todos
		})
	}
	render() {
		return (
			<div className="App">
				<Title />
				<Add add={this.add}/>
				<div className='todos'>
					<Todos todos={this.state.todos} finish={this.finish} delete={this.delete}/>
				</div>
			</div>
		)		
	}

}