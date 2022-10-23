import React from "react";
import "../styles/jobapplication.scss"

const JobApplication = () => {
    return (
        <div id="jobapplication">
            <form class="apply">
            <h2> Application form</h2>
            <label>Name</label>
            <input type="text" placeholder="Your Name" required/>
            <br />
            <label>Surname</label>
            <input type="text" placeholder="Your Surname" required />
            <br />
            <label>Email</label>
            <input type="text" placeholder="Your Surname" required />
            <br />
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Surname" required />
            <br />
            <label>Resume</label>
            <input type="file" placeholder="Attach your resume" required />
            <div class="btn-group">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}
export default JobApplication;