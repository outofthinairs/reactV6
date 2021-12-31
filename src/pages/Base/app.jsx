import React,{lazy} from 'react'
import {Routes,Route,HashRouter,BrowserRouter} from 'react-router-dom'
import styles  from './app.module.scss'
import AsyncComponent from '@components/AsyncComponent'
import AppHead  from './header'
const Settings = AsyncComponent(()=>import('@pages/Settings'))
const Home = AsyncComponent(()=>import('@pages/Home'))

const App = () =>{
	return <BrowserRouter>
		<div className={styles.App}>
			<AppHead/>
			<div className={styles.Main}>
				<div className={styles.left}></div>
				<div className={styles.content}>
					<Routes>
						{/*
							Route 属性
							caseSensitive： 写法：caseSensitive={false} 路由是否忽略大小写匹配
						*/}
						<Route path={"/"} element={<Home/> } />
						<Route path={"/settings"} element={<Settings/>} />
					</Routes>
				</div>
			</div>
		</div>
	</BrowserRouter>
}

export default App