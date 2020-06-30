import React, { Component } from 'react'
import './Mainwork.css'

export class Mainwork extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.fileInputRef = React.createRef();
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }

    onFilesAdded(e) {
        const files = e.target.files;
        const array = this.fileListToArray(files);
        console.log(array);
    }

    fileListToArray(list) {
        const array = [];
        for (let i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }


    render() {
        return (
            <div className="card main-work" >
                <div className="whole"></div>
                <div className="dropzone-dummy">
                    <img alt="upload" className="Icon" src="./img/cloud.png" />
                    <input ref={this.fileInputRef} className="FileInput" type="file" multiple onChange={this.onFilesAdded} />
                    <span>여기에 파일을 놓아 주세요.</span>
                    <button class="upload-button">또는 파일 선택하기</button>
                </div>
            </div >
        )
    }
}

export default Mainwork
