import React, { Component } from 'react';
import styles from './App.scss';
import * as classNames from "classnames/bind";
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
        <div className={cx("App")}>
            <form>

                <button>찾아보기</button>
                <input type="file" accept=".hwp, .pdf, .docx"/>
            </form>
        </div>
    );
  }
}

export default App;
