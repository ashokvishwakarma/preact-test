import { h, render, Component } from 'preact';

import './style.scss';

class Main extends Component {
  render() {
    return (
      <div className="edge-chat">
        <div className="wrapper">
          <div className="trigger">
            <span>Messages</span>
          </div>
          <div className="panel">
            <div className="loader"></div>
            <ul className="user-list">
              <li>
                <div className="image">
                  <span className="initials">AV</span>
                </div>
                <p className="px18">Ashok Vishwakarma</p>
                <p><span>Today</span> Can we get started?</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const node = document.querySelector('edge-chat');

render(<Main></Main>, node);
