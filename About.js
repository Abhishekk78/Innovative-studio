import React, { useEffect } from "react";
import "../Css/About.css";
import Image1 from "C:/Users/abhis/OneDrive/Desktop/Innovative Studio/innovative-studio/src/Component/Image/8.jpg";
import Image2 from "C:/Users/abhis/OneDrive/Desktop/Innovative Studio/innovative-studio/src/Component/Image/9.jpg";
import Image3 from "C:/Users/abhis/OneDrive/Desktop/Innovative Studio/innovative-studio/src/Component/Image/10.jpg";
import { setTeamData } from "../Component/Redux/TeamSlice";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const teamMembers = useSelector((state) => state.team.teamData);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("/Teamdata.json");
        const data = await response.json();
        console.log("fetch data ...", data);
        if (Array.isArray(data)) {
          dispatch(setTeamData(data));
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, [dispatch]);

  return (
    <>
      <div className="container d-flex mt-0">
        <h1 className="h1">Vision Misson Services</h1>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-spacebetween">
            <div className="card h-100 ">
              <img
                src={Image1}
                className="card-img-top img-fluid"
                alt="Our Vision"
              />
              <div className="card-body">
                <p className="card-text">
                  A company's vision is a concise and inspiring statement that
                  defines its long-term aspirations and the impact it aims to
                  make in the world...
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4  d-flex justify-content-spacebetween">
            <div className="card h-100">
              <img
                src={Image2}
                className="card-img-top img-fluid"
                alt="Our Mission"
              />
              <div className="card-body">
                <p className="card-text">
                  A company's mission is a concise statement that outlines its
                  purpose, the key activities it engages in...
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4  d-flex justify-content-spacebetween">
            <div className="card h-100">
              <img
                src={Image3}
                className="card-img-top img-fluid"
                alt="Our Services"
              />
              <div className="card-body">
                <p className="card-text">
                  A company services description outlines the core offerings
                  provided by a business to meet the needs of its customers...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center mb-4 mt-5 h3">Team Members</h3>
      <div className="container ">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td data-label="ID">{member.id}</td>
                  <td data-label="Name">{member.name}</td>
                  <td data-label="Role">{member.role}</td>
                  <td data-label="Email">{member.email}</td>
                  <td data-label="Phone">{member.phone}</td>
                  <td data-label="Department">{member.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
