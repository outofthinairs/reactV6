import React from 'react'
import styles from './app.module.scss'
import {observer} from 'mobx-react'

@observer
class AppHead extends React.PureComponent{
	constructor(props){
		super(props)
	}
	render(){
		return (<div className={styles.Head}>
			
		</div>)
	}
}
export default AppHead