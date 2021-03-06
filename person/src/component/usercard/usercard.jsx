import React from 'react'
import PropTypes from 'prop-types'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { withRouter} from 'react-router-dom'
@withRouter
class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    handleClick(v){ 
        // console.log(v);
        this.props.history.push(`/chat/${v._id}`)
        // console.log(this.props)
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return(
            <WingBlank>
                <WhiteSpace />
                {this.props.userlist && this.props.userlist.map((v, i) => (
                    v.avatar ? (
                        <Card key={i} 
                        onClick={()=>this.handleClick(v)}
                        >
                            <Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Header>
                            <Body>
                                {v.type == 'boss' ? <div>
                                    公司: {v.company}
                                </div> : null}
                                {v.desc.split('\n').map(d => {
                                    return <div key={d}>{d}</div>
                                })}
                            </Body>
                            {v.type=='boss'?<div>
                               薪资: {v.money}
                            </div>:null}
                        </Card>) : null))}

            </WingBlank>
        )
    }
}
export default UserCard