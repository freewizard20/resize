import React, { Component, forwardRef } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Mainwork.css";

export class Mainwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlight: false,
      originalWidth: 0,
      originalHeight: 0,
      name: "",
      loaded: false,
      changeWidth: "",
      changeHeight: "",
      fixedRatio: false,
    };

    this.fileInputRef = React.createRef();
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.openFileDialog = this.openFileDialog.bind(this);
    this.handleFixed = this.handleFixed.bind(this);
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
    let fr = new FileReader();
    fr.onload = () => {
      this.setState(() => {
        return {
          loaded: true,
        };
      });
      let img = document.getElementById("thumbnail1");
      img.src = fr.result;
      let outputname = this.shorten(array[0].name);
      img.onload = () => {
        this.setState(() => {
          return {
            name: outputname,
            originalHeight: img.naturalHeight,
            originalWidth: img.naturalWidth,
            changeHeight: "",
            changeWidth: ""
          };
        });
      };
    };
    fr.readAsDataURL(array[0]);
  }

  shorten(given) {
    if (given.length < 12) {
      return given;
    }
    let extension = given.substr(given.length - 4);
    let name = given.substring(0, 7);
    return name + ".." + extension;
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

  handleChangeWidth = ({ target }) => {
    this.setState({
      changeWidth: target.value,
      changeHeight: this.state.fixedRatio
        ? Math.round(
          target.value *
          (this.state.originalHeight / this.state.originalWidth)
        ) === 0
          ? ""
          : Math.round(
            target.value *
            (this.state.originalHeight / this.state.originalWidth)
          )
        : this.state.changeHeight,
    });
  };

  handleChangeHeight = ({ target }) => {
    this.setState({
      changeHeight: target.value,
      changeWidth: this.state.fixedRatio
        ? Math.round(
          (target.value * this.state.originalWidth) /
          this.state.originalHeight
        ) === 0
          ? ""
          : Math.round(
            (target.value * this.state.originalWidth) /
            this.state.originalHeight
          )
        : this.state.changeWidth,
    });
  };

  handleFixed() {
    if (this.state.fixedRatio) {
      this.setState({ fixedRatio: false });
    } else {
      this.setState({ fixedRatio: true });
    }
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
        {this.state.loaded ? (
          <div className="details">
            <div className="details-left">
              <div className="details-text">
                <span className="details-dimension">
                  {this.state.originalWidth} x {this.state.originalHeight}
                </span>
                <span className="details-name">{this.state.name}</span>
              </div>
              <div className="details-thumbnail-wrapper">
                <img id="thumbnail1" className="details-thumbnail" src="" />
              </div>
            </div>
            <div className="details-middle">
              <ArrowRightAltIcon
                style={{ color: "#75daff", fontSize: 58, margin: "0px auto" }}
              />
            </div>
            <div className="details-right">
              <div className="details-change-wrapper">
                <input
                  type="number"
                  name="widthChange"
                  className="details-change"
                  id="widthChange"
                  value={this.state.changeWidth}
                  onChange={this.handleChangeWidth}
                />
                <span id="middle-x">x</span>
                <input
                  type="number"
                  name="heightChange"
                  className="details-change"
                  id="heightChange"
                  value={this.state.changeHeight}
                  onChange={this.handleChangeHeight}
                />
              </div>
              <button
                className={`details-button ${
                  this.state.fixedRatio ? "details-button-clicked" : ""
                  }`}
                onClick={this.handleFixed}
              >
                비율 고정하기
              </button>
              <br />
              <button className="details-button details-download">
                다운로드
              </button>
            </div>
          </div>
        ) : (
            <></>
          )}
      </div>
    );
  }
}

export default Mainwork;
