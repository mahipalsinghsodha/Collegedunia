import React, { useState, useEffect } from "react";
import CollegeTable from "./CollegeTable";

const App = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch college data from JSON file or API
    fetch("/collegeData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>College Data</h1>
      <CollegeTable colleges={colleges} />
    </div>
  );
};

export default App;
