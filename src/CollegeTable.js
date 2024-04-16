import React, { useState } from "react";

const CollegeTable = ({ colleges }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const handleAdditionalSort = (e) => {
    setSortBy(e.target.value);
    setSortOrder("asc");
  };

  const filteredColleges = colleges.filter((college) => {
    return college.Colleges.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedColleges = filteredColleges.sort((a, b) => {
    if (sortBy) {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    }
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by College Name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select onChange={handleAdditionalSort}>
        <option value="">Sort By</option>
        <option value="Rating">CollegeDunia Rating</option>
        <option value="Course_Fees">Fees</option>
      </select>
      <table border={1}>
        <thead>
          <tr>
            <th onClick={() => handleSortChange("Colleges")}>College Name</th>
            <th onClick={() => handleSortChange("Location")}>Location</th>
            <th onClick={() => handleSortChange("Placement")}>Placement</th>
            <th onClick={() => handleSortChange("Featured")}>Featured</th>
            <th onClick={() => handleSortChange("Rating")}>
              CollegeDunia Rating
            </th>
            <th onClick={() => handleSortChange("Course_Fees")}>Fees</th>
            <th onClick={() => handleSortChange("User_Reviews")}>
              User Review Rating
            </th>
            <th onClick={() => handleSortChange("Ranking")}>College Rank</th>
          </tr>
        </thead>
        <tbody>
          {sortedColleges.map((college, index) => (
            <tr key={index}>
              <td>{college.Colleges}</td>
              <td>{college.Location}</td>
              <td>{college.Placement}</td>
              <td>{college.Featured ? "Yes" : "No"}</td>
              <td>{college.Rating}</td>
              <td>{college.Course_Fees}</td>
              <td>{college.User_Reviews}</td>
              <td>{college.Ranking}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
