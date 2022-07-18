import React from 'react';
import { usePages } from '../hooks/usePages';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../route';

export function Pagination() {
  const count = usePages();
  const { numPage } = useParams();

  if (count <= 1) {
    return null;
  }

  return (
    <ul className="pagination">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <li
            key={`page-number-${index}`}
            className={
              Number(numPage) === index + 1
                ? 'active blue-grey darken-1'
                : 'waves-effect hoverable'
            }
          >
            <Link to={ROUTES.PAGE_EPISODES.getPath(index + 1)}>
              {index + 1}
            </Link>
          </li>
        ))}
    </ul>
  );
}
