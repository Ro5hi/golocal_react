// import React, { Component } from 'react'
// import Resizer from 'react-image-file-resizer'

//     class ImageUploader extends Component {
//         constructor(props) {
//             super(props);
//             this.fileChangedHandler = this.fileChangedHandler.bind(this);
//         }

//         fileChangedHandler(event) {
//             var fileInput = false 
//             if(event.target.files[0]) {
//                 fileInput = true 
//             }
//             if(fileInput) {
//                 Resizer.imageFileResizer(
//                     event.target.files[0],
//                     125,
//                     125,
//                     'JPG',
//                     100,
//                     0,
//                     uri => {
//                         console.log(uri)
//                     },
//                     'blob',
//                     125,
//                     125
//                 );
//             }
//         }

//         render() {
//             return (
//                 <div className="Image">
//                     <input type="file" onchange={this.fileChangedHandler} />
//                 </div>
//             )
//         }
//     }

//     export default ImageUploader 