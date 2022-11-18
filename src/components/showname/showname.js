import React, { Component } from 'react';

class ShowName extends Component {
  state = {
    isSubmit: false,
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //입력값을 받아옴
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: ''
    })
  }
  handleClick= (e) => {
    this.setState({
        isSubmit: true
    })
  }
  clickUpdate= (e) => {
    this.setState({
      isSubmit: false
  })
  }
  render() {
    return (
      <div style={{width: '100px'}}>
        <div hidden = {this.state.isSubmit}>
          <input style={{display: 'inline'}}
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <button onClick={this.handleClick}>등록</button>
        </div>

        <div hidden = {!this.state.isSubmit}> 
          <span style={{ marginRight: '8px'}}>{this.state.name} 아아아아</span>
          <button onClick={this.clickUpdate}>수정</button>
        </div>
      </div>
    );
  }
}

export default ShowName;