import { useForm } from "@inertiajs/react";
import React from "react";

const Edit = ({student}) => {
    const { data, setData, put, errors, processing } = useForm({
        stdName: student.stdName,
        class: student.class,
        address: student.address,
        email: student.email,
        password: student.password,
    });
    console.log(useForm())
    function handleSubmit(event) {
        event.preventDefault();
        put(`/students/${student.id}`);
    }
    return (
        <div className="w-1/2 mx-auto mt-4">
            <div className="flex justify-center">
                {errors && <div className="spinner-border text-green-500"></div>}
            </div>
            <h2 className="text-center text-2xl font-bold">
                Update Student Info
            </h2>

            <form className="flex flex-col space-y-2 p-1 mt-2" onSubmit={handleSubmit}>
                {/* Form to edit a new student */}
                <input
                    type="text"
                    placeholder="Student Name"
                    className="w-full shadow-sm border-0 rounded-md p-3 mb-3 focus:border-0 border-green-500"
                    value={data.stdName}
                    onChange={(e) => setData("stdName", e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Student Class"
                    className="w-full shadow-sm border-0 rounded-md p-3 mb-3 focus:border-0 border-green-500"
                    value={data.class}
                    onChange={(e) => setData("class", e.target.value)}
                />
                 <input
                    type="text"
                    placeholder="Student Address"
                    className="w-full shadow-sm border-0 rounded-md p-3 mb-3 focus:border-0 border-green-500"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Student Email"
                    className="w-full shadow-sm border-0 rounded-md p-3 mb-3 focus:border-0 border-green-500"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Ennter Password"
                    className="w-full shadow-sm border-0 rounded-md p-3 mb-3 focus:border-0 border-green-500"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full p-3 rounded-md font-semibold bg-blue-500 cursor-pointer text-white hover:bg-blue-600"

                    disabled={processing}
                >
                    Update Student
                </button>
            </form>
            {/* Form to edit a new post */}
            <form></form>
        </div>
    );
};

export default Edit;
