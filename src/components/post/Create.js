import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Filter from 'bad-words';  // ⇽--- 从bad-words模块导入默认对象
const filter = new Filter(); // ⇽--- 使用构造函数创建过滤器实例

class CreatePost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: '',
          valid: false,  // ⇽--- 在当前组件的state中创建一个简单的valid属性
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
      }

      handleSubmit() {
        if (!this.state.valid) {
           return;
        }
        const newPost = {  // ⇽--- 创建新帖子对象
            content: this.state.content,
        };
        this.props.onSubmit(newPost)  // ⇽--- 传给父组件新帖子
        this.setState(() => ({        // ⇽--- 清空输入框
            content: "",
        }));
      }

      handlePostChange(event) {
        const content = filter.clean(event.target.value);  // ⇽--- 将表单值传递给filter的.clean()方法并用返回值设置state
         this.setState(() => {
                return {
                    content,
                    valid: content.length <= 280  // ⇽--- 通过设置最大长度来确定帖子的有效性（这里的280只是为了演示，用户有时希望帖子可以更长一些）
                };
         });
      }
    
      render() {
        return (
          <div className="create-post">
                    <button onClick={this.handleSubmit}>Post</button>
                    <textarea
                        value={this.state.content}
                        onChange={this.handlePostChange}
                        placeholder="What's on your mind?"
                    />
          </div>
        );
      }
  }

  export default CreatePost