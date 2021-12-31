import React,{useState} from 'react'
import { Button,Table} from 'element-react'
import {observer} from 'mobx-react'
import * as Rtd from 'react-router-dom'
import * as Rt from 'react-router'

const Home = (props) =>{
	console.log(Rtd,"react-router-dom")
	console.log(Rt,"react-router")
	const params = Rtd.useParams();
	console.log(params)
	
	
	const navigate = Rtd.useNavigate();
	
	let [columns,setColumn] = useState([
      {
        label: "日期",
        prop: "date",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "地址",
        prop: "address"
      },{
        label: "编辑",
        prop: "edit",
		render:()=>{
			return <div>
				<Button type="primary">查看</Button>
				<Button type="danger">删除</Button>
				<Button type="warning">修改</Button>
			</div>
		}
      }
    ])
	let [data,setData] = useState([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }])
	
	
	function toPage(uri){
		navigate(uri)
	}
	return(<div>
		<header style={{height:100}}>
			<div>函数组件跳转 :</div>
			<Rtd.Link to="/settings">Link标签跳转</Rtd.Link>&emsp;
			<a onClick={()=>toPage('/settings')}>navigate跳转</a>
		</header>
		<div>
			<Table
			  style={{width: '100%'}}
			  columns={columns}
			  data={data}
			  stripe={true}
			/>
		</div>
	</div>)
}

export default observer(Home)