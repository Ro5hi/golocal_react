import React, { Component } from 'react'
import Resizer from 'react-image-file-resizer'
import { connect } from  'react-redux'

    class NewPost extends Component {
        constructor(props) {
            super(props);
            const description = this.getDescription.value;
            this.fileChangedHandler = this.fileChangedHandler.bind(this);
            const postData = {
                id: post(), image, description
            }
            this.props.dispatch({
                type: 'NEW_POST',
                postData});
                this.fileChangedHandler.value = '';
                this.getDescription.value = '';
            }
            fileChangedHandler(event) {
            e.preventtDefault();
            var fileInput = false 
            if(event.target.files[0]) {
                fileInput = true 
            }
            if(fileInput) {
                Resizer.imageFileResizer(
                    event.target.files[0],
                    350, 350, 'JPG', 100, 0,
                    uri => {
                        console.log(uri)
                    },
                    'imgblob', 350, 350
                );
            }
        }

        render() {
            return (
                <div className="Image">
                    <h1>New Post</h1>
                        <form>
                            <input type="file" onchange={this.fileChangedHandler} />
                            <input required type="text" ref={(input)=>this.getDescription = input} placeholder="Description" /><br /><br />
                            <button>Submit Post</button>
                        </form>
                </div>
            )
        }
    }

    export default connect()(NewPost)