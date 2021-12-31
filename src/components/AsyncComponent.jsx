import React from 'react'
export default (loadComponent,placeholder = null) => {
	return class AsyncComponent extends React.Component{
		unmount = false
		constructor(){
			super()
			this.state={
				Com:null,
			}
		}
		async componentDidMount(){
			const {default:component} = await loadComponent()
			if(this.unmount)return;
			this.setState({
				Com:component
			})
		}
		componentWillUnmount(){
			this.unmount = true;
		}
		render(){
			const {Com} = this.state
			return(
				Com ? <Com {...this.props}/> : placeholder
			)
		}
	}
}