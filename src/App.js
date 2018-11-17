import React, { Component } from 'react';
import styles from './App.scss';
import * as classNames from "classnames/bind";
const cx = classNames.bind(styles);

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectorFiles) {
        console.log(selectorFiles);
    }

    render() {
    return (
        <div className={cx("App")}>

            <div>
                <div><h1>디바이스 선택</h1></div>
                <p>
                    <input type="checkbox"/>
                    <label>Arduino UNO R3</label> <br/>
                    <input type="checkbox"/>
                    <label>Arduino UNO R3</label> <br/>
                    <input type="checkbox"/>
                    <label>Arduino UNO R3</label>
                </p>
            </div>

            <form>
                <div><h1>펌웨어 선택</h1></div>
                <button>펌웨어 선택</button>
                <input type="file" accept=".ino, .txt" onChange={(e) => this.handleChange(e.target.files)}/>
                <label>{}</label>

                <div>
                    <table>
                        <thead>
                        <td>일시</td>
                        <td>내용</td>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2018. 11. 15</td>
                            <td>asdf.ino</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button type="submit">펌웨어 업로드</button>
                </div>
            </form>
        </div>
    );
  }
}

export default App;
