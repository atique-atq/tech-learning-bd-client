import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ courseDetails }) => {
    const { title, details, img_url, course_id } = courseDetails;
    return (
        <div className='col-lg-6  mx-lg-0 px-lg-4 my-3 mx-md-3 col-md-11 px-md-3 mx-sm-0'>
            <div className="card card-height" >
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <div style={{ height: '12em' }} className="text-center p-0 m-0">
                        <img src={img_url} className="h-75 h-md-100 w-75 w-md-100" alt="course relevant"></img>
                    </div>
                    <p className="card-text card-details pt-sm-1 pt-lg-3 fs-6">{details.slice(0, 175) + '...'}</p>
                    <Link to={`/course/${course_id}`} className="btn btn-primary m-1"> View Details</Link >
                </div >
            </div >
        </div >
    );
};

export default Course;