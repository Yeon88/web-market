import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./showname.module.css";

class ShowName extends Component {
  state = {
    isSubmit: false,
    name: ''
  }
  handleChange = (e) => {
    if (e.target.value.length > 5) {
      alert('5글자까지 입력할수있습니다.');
      return;
    }
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
  handleClick= () => {
    if (this.state.name.length === 0) {
      alert('이름을 입력하세요! ');
      return;
    }
    this.setState({
        isSubmit: true
    })
  }
  clickUpdate= (e) => {
    this.setState({
      isSubmit: false,
      name: ''
  })
  }
  render() {
    return (
      <div>
        <div className={styles.menu} hidden = {this.state.isSubmit}>
          <Form.Control style={{ marginRight: '8px', marginLeft: '100px'}}
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"          
        />
        <Button style={{width:'100px'}} onClick={this.handleClick} variant="outline-primary">Submit</Button>
        </div>

        <div hidden = {!this.state.isSubmit}> 
          <span style={{ marginRight: '8px'}}>'{this.state.name}' 님!  환영합니다!</span>
          <Button onClick={this.clickUpdate} variant="outline-primary">Edit</Button>
        </div>
      </div>
    );
  }
}

export default ShowName;