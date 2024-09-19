import React from "react";
import StudentComponent from "./Studentcomponent";
const Student = () => {
    return (
        <div>
            <h2>Student Module</h2>
            <p>Information related to students goes here.</p>

            {/* StudentComponent will display the list of students */}
            <StudentComponent />
        </div>
    );
};

export default Student;
