import React, { useEffect, useState } from "react";
import "../Css/Portfolio.css";
import { useSelector, useDispatch } from "react-redux";
import { setProjectData } from "../Component/Redux/PorfolioSlice";

const Portfolio = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.Portfolio.PortfolioData);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/Portfoliodata.json");
        const portfoliodata = await response.json();
        console.log("Portfolio data ....", portfoliodata);
        if (Array.isArray(portfoliodata)) {
          dispatch(setProjectData(portfoliodata));
        } else {
          console.error("Fetch portfolio data is not an array:", portfoliodata);
        }
      } catch (error) {
        console.log("Error fetching portfolio project data:", error);
      }
    };
    fetchPortfolioData();
  }, [dispatch]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.Title.toLowerCase().includes(
      searchText.toLowerCase()
    );
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <>
      <div className="container h-100">
        <h1 className=" h2 text-center">Portfolio Projects</h1>
        <div className="filter-container mt-0 mb-4 ">
          <input
            type="text"
            className="search-bar"
            placeholder="Search projects..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid-container">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <li>
                  <strong>Id:</strong> {project.id}
                </li>
                <li>
                  <strong>Title:</strong> {project.Title}
                </li>
                <li>
                  <strong>Category:</strong> {project.category}
                </li>
                <li>
                  <strong>Thumbnail:</strong>
                  <img src={project.thumbnail} alt={project.Title} />
                </li>
              </div>
            ))
          ) : (
            <p className="no-results">No projects found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
