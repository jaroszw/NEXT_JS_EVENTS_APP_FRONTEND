import React from 'react';
import Link from 'next/link';
import { PER_PAGE } from '../config/index';

export default function Pagination({ total, page }) {
  // IN CASE OF MAKING TILES - map the array and make tiles with links with index to push to params
  // const rest = total % PER_PAGE;
  // const paginationLinks = Array.from({ length: Math.ceil(total / PER_PAGE) });
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div>
      {page > 1 && (
        <Link href={`events?page=${page - 1}`}>
          <a className="btn-secondary">Prev</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`events?page=${page + 1}`}>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
      {/*{paginationLinks.map((_, idx) => (
        <div className="pagination-tile">
          <Link href={`events?page=${idx + 1}`}>
            <a>{idx + 1}</a>
          </Link>
        </div>
      ))}*/}
    </div>
  );
}
