import React from 'react';
import './Taskbar.css';
import Clock from './Clock/Clock';
import StartButton from './StartButton/StartButton';

export default function Taskbar() {
  return (
    <div className="taskbar">
      <div className="button-column">
        <StartButton />
      </div>
      <div className="timer-column">
        <Clock />
      </div>
    </div>
  );
}
