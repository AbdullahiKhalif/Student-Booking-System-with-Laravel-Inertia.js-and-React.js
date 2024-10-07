import { Link, useForm } from "@inertiajs/react";
import React from "react";

const StudentsList = ({ student }) => {
    const { delete: destory } = useForm();

    function handleDeleteStudent(event) {
        event.preventDefault();
        if (confirm(`Are you sure you want to delete ${student.stdName}?!`))
            destory(`/students/${student.id}`);
    }
    return (
        <tr className="border-b-2 border-gray-200">
            <td className="py-4 px-4 text-sm">{student.stdName}</td>
            <td className="py-4 px-4 text-sm">{student.class}</td>
            <td className="py-4 px-4 text-sm">{student.address}</td>
            <td className="py-4 px-4 text-sm">{student.email}</td>
            <td className="py-4 px-4 text-sm">{student.password}</td>
            <div className="flex items-center space-x-2 text-center">
                <Link
                    href={`students/${student.id}/edit`}
                    className="p-2 bg-green-600 text-white font-semibold rounded-md w-20  mt-1"
                >
                    Edit
                </Link>
                <form onSubmit={handleDeleteStudent}>
                    <button className="p-2 bg-red-500 text-white font-semibold rounded-md w-20 mt-1">
                        Delete
                    </button>
                </form>
            </div>
        </tr>
    );
};

export default StudentsList;
