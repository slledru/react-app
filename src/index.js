import React from 'react';
import ReactDOM from 'react-dom';
import Game from './tictactoc/game';
import './index.css'

// ========================================

ReactDOM.render(<ul>
  <li class="root">
    <Game/>
  </li>
  <li class="root">
    <Game/>
  </li>
</ul>, document.getElementById('root'));
