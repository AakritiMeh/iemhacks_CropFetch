import React from 'react'
import '../css/circle.css'

export default function Circles() {
    let progress = 70
  return (  
    <div className="flex-wrapper">
        <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart orange">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray={`100, 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">People Helped</text>
    </svg>
  </div>
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart green">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray={`${progress}, 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">Accuracy:{progress}%</text>
    </svg>
  </div>
  <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart blue">
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray={`100, 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">Technologies Used</text>
    </svg>
  </div>
</div>
  )
}
