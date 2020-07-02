import React, { Component, forwardRef } from "react";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
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
      // console.log(files);
      array = this.fileListToArray(files);
      // console.log(array);
    } else {
      const files = e.dataTransfer.files;
      // console.log(files);
      array = this.fileListToArray(files);
      // console.log(array);
    }
    // let fr = new FileReader();
    // fr.onload = function () {
    //   document.getElementById('outimage').src = fr.result;
    // }
    // fr.readAsDataURL(array[0]);
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
        <div className="details">
          <div className="details-left">
            <div className="details-text">
              <span clssName="details-dimension">1620 x 1320</span>
              <span className="details-name">캡처.png</span>
            </div>
            <div className="details-thumbnail-wrapper">
              <img className="details-thumbnail" src="" />
            </div>
          </div>
          <div className="details-middle">
            <ArrowRightAltIcon style={{ color: "#75daff", fontSize: 58, margin: "0px auto" }} />
          </div>
          <div className="details-right">
            <div className="details-change-wrapper">
              <input type="number" name="widthChange" className="details-change" id="widthChange" style={{ marginRight: "5px" }} />
              <span style={{ fontSize: "18px" }}>x</span>
              <input type="number" name="heightChange" className="details-change" id="heightChange" style={{ marginLeft: "5px" }} />
            </div>
            <button className="details-button">비율 고정하기</button><br />
            <button className="details-button details-download">다운로드</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainwork;
