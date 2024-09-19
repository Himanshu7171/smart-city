import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/students";

class StudentService {
    getAllStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    addStudent(student) {
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    deleteStudent(id) {
        return axios.delete(`${STUDENT_API_BASE_URL}/${id}`);
    }
}

// Assign to a variable before exporting
const studentServiceInstance = new StudentService();

export default studentServiceInstance;

