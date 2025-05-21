"use client";

import React from "react";

export default function Schedule() {
  return (
    <section id="schedule" className="section">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule</h2>
      <p className="text-gray-700 mb-4">Keynote speakers will be announced soon! </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          {/* <thead>
            <tr>
              <th
                colSpan={2}
                className="px-4 py-2 border-b border-gray-300 bg-gray-100 italic text-center"
              >
                During the workshop
              </th>
            </tr>
          </thead> */}
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 align-top font-bold">
                Vienna Time (UTC+2)<br />
                <span className="text-sm text-gray-600">(10 min)</span>
              </td>
              <td className="px-4 py-2 font-bold">
                Events
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                8:30 – 8:40 am<br />
                {/* <span className="text-sm text-gray-600">(10 min)</span> */}
              </td>
              <td className="px-4 py-2">
                Introduction of workshop organizers, participants, topics, and goals
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                8:40 – 9:30 am<br />
                {/* <span className="text-sm text-gray-600">(50 min)</span> */}
              </td>
              <td className="px-4 py-2">
                Keynote by the invited speaker (discussion and Q&A included)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                9:30 – 10:00 am<br />
                {/* <span className="text-sm text-gray-600">(30 min)</span> */}
              </td>
              <td className="px-4 py-2">
                Paper presentation: challenge winners, case studies  
                <br />
                <span className="text-sm text-gray-600">(3×10 min, Q&amp;A included)</span>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="py-2 text-center font-medium text-gray-700">
                30 min break
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                10:30 – 11:20 am<br />
                {/* <span className="text-sm text-gray-600">(50 min)</span> */}
              </td>
              <td className="px-4 py-2">
                Keynote by the invited speaker (discussion and Q&A included)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                11:20 – 11:50 am<br />
                {/* <span className="text-sm text-gray-600">(30 min)</span> */}
              </td>
              <td className="px-4 py-2">
                Paper presentation: design lessons, tools  
                <br />
                <span className="text-sm text-gray-600">(3×10 min, Q&A included)</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                11:50 am – 12:00 pm<br />
                {/* <span className="text-sm text-gray-600">(10 min)</span> */}
              </td>
              <td className="px-4 py-2">Workshop summary</td>
            </tr>
          </tbody>
          {/* <tfoot>
            <tr>
              <th
                colSpan={2}
                className="px-4 py-2 border-t border-gray-300 bg-gray-100 italic text-center"
              >
                After the workshop
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">within one week</td>
              <td className="px-4 py-2">
                Posting summary and records on website. Initiating follow-up activities.
              </td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </section>
  );
}
