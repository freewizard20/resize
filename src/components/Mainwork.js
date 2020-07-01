import React, { Component } from "react";
import "./Mainwork.css";

export class Mainwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: false,
    };

    this.fileInputRef = React.createRef();
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.openFileDialog = this.openFileDialog.bind(this);
    // this.onDragLeave = this.onDragLeave.bind(this);
    // this.onDragOver = this.onDragOver.bind(this);
    // this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    document.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.setState({ highlight: true });
      document.body.style.pointerEvents = "none";
    });

    document.addEventListener("dragleave", (e) => {
      e.preventDefault();
      this.setState({ highlight: false });
    });

    document.addEventListener("drop", (e) => {
      e.preventDefault();
      this.onFilesAdded(e);
      this.setState({ highlight: false });
      document.body.style.pointerEvents = "auto";
    });

    document.addEventListener("mouseover", () => {
      if (!this.state.highlight) {
        document.body.style.pointerEvents = "auto";
      }
    });
  }

  // onDragOver(e) {
  //   e.preventDefault();
  //   this.setState({ highlight: true });
  // }

  // onDragLeave() {
  //   this.setState({ highlight: false });
  // }

  // onDrop(e) {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files;
  //   const array = this.fileListToArray(files);
  //   this.onFilesAdded(array);
  //   this.setState({ highlight: false });
  // }

  // DO WORK HERE
  onFilesAdded(e) {
    let array;
    if (e.dataTransfer === undefined) {
      const files = e.target.files;
      array = this.fileListToArray(files);
      console.log(array);
    } else {
      const files = e.dataTransfer.files;
      array = this.fileListToArray(files);
      console.log(array);
    }
  }

  fileListToArray(list) {
    const array = [];
    for (let i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  openFileDialog() {
    this.fileInputRef.current.click();
  }

  render() {
    return (
      <div className="card main-work">
        <div className={`whole ${this.state.highlight ? "whole-show" : ""}`}>
          여기에 파일을 올려 주세요
        </div>
        <div
          className={`dropzone-dummy ${
            this.state.highlight ? "Highlight" : ""
          }`}
        >
          <img alt="upload" className="Icon" src="./img/cloud.png" />
          <input
            ref={this.fileInputRef}
            className="FileInput"
            type="file"
            multiple
            onChange={this.onFilesAdded}
          />
          <span>여기에 파일을 올려 주세요.</span>
          <button className="upload-button" onClick={this.openFileDialog}>
            또는 파일 선택하기
          </button>
        </div>
      </div>
    );
  }
}

export default Mainwork;
