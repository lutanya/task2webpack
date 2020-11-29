import React from "react";

import {Button} from './Button';

export function SearchPane(props) {
  return (
    <div className="search-pane">
      <ul>
        <li>
          <Button label="ALL" class="filter" />
        </li>
        <li>DOCUMENTARY</li>
        <li>COMEDY</li>
        <li>HORROR</li>
        <li>CRIME</li>
      </ul>
      <ul>
        <li>SORT BY</li>
        <li>RELEASE DATE</li>
      </ul>
    </div>
  );
}

