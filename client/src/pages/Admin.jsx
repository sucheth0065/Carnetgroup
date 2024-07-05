import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios
      .get("/userform")
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="h-screen mt-32">
      <h1 className="text-center mb-4 text-4xl">User requirements</h1>
      <div className="flex flex-row justify-center items-center border-gray-300">
        <table>
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Room Type</th>
              <th className="py-2 px-4 border-b">Style</th>
              <th className="py-2 px-4 border-b">Budget</th>
              <th className="py-2 px-4 border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr key={form._id} className="border-b">
                <td className="py-2 px-4">{form.name}</td>
                <td className="py-2 px-4">{form.email}</td>
                <td className="py-2 px-4">{form.phone}</td>
                <td className="py-2 px-4">{form.roomType}</td>
                <td className="py-2 px-4">{form.stylePreference}</td>
                <td className="py-2 px-4">{form.budget}</td>
                <td className="py-2 px-4">{form.additionalComments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
