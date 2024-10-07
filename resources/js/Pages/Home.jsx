import React from "react";
import StudentsList from "./StudentsList";

const Home = ({ students }) => {
    console.log(students);
    return (
        <div className="max-w-5xl mx-auto mt-5">
            <h1 className="text-2xl font-bold text-black text-center">
                Student Management
            </h1>
            <table className="table-auto w-full text-left mt-5">
                <thead className="border-b-2 border-gray-200">
                    <tr>
                        <th className="py-2 px-4 bg-gray-300 text-sm text-gray-600">
                            Name
                        </th>
                        <th className="py-2 px-4 bg-gray-300 text-sm text-gray-600">
                            Class
                        </th>
                        <th className="py-2 px-4 bg-gray-300 text-sm text-gray-600">
                            Address
                        </th>
                        <th className="py-2 px-4 bg-gray-300 text-sm text-gray-600">
                            Email
                        </th>
                        <th className="py-2 px-4 bg-gray-300 text-sm text-gray-600">
                            Password
                        </th>
                        <th className="py-2 px-4 bg-gray-300 text-sm text-gray-600">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <StudentsList student={student} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
