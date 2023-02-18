import {FC} from 'react';

import '../css/BellFresh.css';

interface IBellFreshProps {
    totalItems?:number
}

export const BellFresh:FC<IBellFreshProps> = (props) => {
  return (
      <div className="Bell-fresh flex justify-between">
          <div className="Bell-fresh-left">
              <h4>Bell fresh</h4>
              <p>Fresh & healthy food recipe</p>
          </div>
          <div className="Bell-fresh-right flex justify-between">
              <div className="Bell-fresh-right-box">
                  <p className="Bell-fresh-right-box-title">{props.totalItems ?? 32}</p>
                  <p className="Bell-fresh-right-box-text">Total item</p>
              </div>
              <div className="Bell-fresh-right-box">
                  <p className="Bell-fresh-right-box-title">10</p>
                  <p className="Bell-fresh-right-box-text">Category</p>
              </div>
              <div className="Bell-fresh-right-box">
                  <p className="Bell-fresh-right-box-title">11</p>
                  <p className="Bell-fresh-right-box-text">New Meals</p>
              </div>
          </div>
      </div>
  );
}