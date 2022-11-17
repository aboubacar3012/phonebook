import React from "react";

const Filter = ({ search, setSearch }) => {
  return (
    <p>
      filter show with <input value={search} onChange={({ target }) => setSearch(target.value)} type="text" />
    </p>
  );
};

export default Filter;
