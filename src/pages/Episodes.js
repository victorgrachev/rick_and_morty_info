import React, { useEffect } from 'react';
import { Pagination } from '../components/Pagination';
import { Outlet, useNavigate } from 'react-router-dom';

export function Episodes() {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <Outlet />
        </div>
      </div>
      <div className="row">
        <div className="col s12 center-align">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
