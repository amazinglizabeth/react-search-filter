import React, { useState } from "react";
import { Users } from "./Users";
import Table from "./Table";
import "./App.css";

export default function CustomersInfo() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const filteredData = search(Users);
  const limitedData = filteredData.slice(0, 20);

  return (
    <div className="Info">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {limitedData.length > 0 ? (
        <Table data={limitedData} />
      ) : (
        <p className="error">No Users Found!</p>
      )}
    </div>
  );
}
