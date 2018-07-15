import React from "react";
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
@connect(
    state => state.user,
    { update }
)
class GeniusInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            desc:""
        }
    }
    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo} /> : null}
                {/* {this.props.redirectTo ? <Redirect to={this.props.redirectTto}> </Redirect>:null} */}
                <NavBar mode="dark">牛人完善信息页面</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    求职职位
                 </InputItem>
         
                <TextareaItem
                    rows={3}
                    autoHeight
                    title="个人简介"
                    onChange={(v) => this.onChange('desc', v)}>

                </TextareaItem>
                <Button type="primary"
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                >保存</Button>
            </div>

        )
    }
}
export default GeniusInfo