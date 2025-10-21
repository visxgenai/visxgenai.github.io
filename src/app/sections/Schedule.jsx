"use client";

import React from "react";

export function Schedule() {
    return (
      <section id="schedule" className="section">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule</h2>
      <p className="text-gray-700 mb-4 italic font-semibold">Details TBA soon! </p>
      <div className="overflow-x-auto mb-10 rounded-lg">
        <table
        className="border border-gray-300 table-fixed"
        style={{ maxWidth: "700px", width: "100%" }}
        >
        <colgroup>
          <col style={{ width: "220px", maxWidth: "220px" }} />
          <col style={{ maxWidth: "400px" }} />
        </colgroup>
        <tbody className="divide-y divide-gray-200">
          <tr className="bg-gray-100">
          <td className="px-4 py-2 align-top font-bold truncate">
            Vienna Time (UTC+2)
            <br />
            {/* <span className="text-sm text-gray-600">(10 min)</span> */}
          </td>
          <td className="px-4 py-2 font-bold">Events</td>
          </tr>
          <tr>
          <td className="px-4 py-2 align-top">
            9:00 am - 12:30pm
            <br />
            {/* <span className="text-sm text-gray-600">(10 min)</span> */}
          </td>
          <td className="px-4 py-2">
            Morning Session
          </td>
          </tr>
          <tr>
          <td className="px-4 py-2 align-top">
            12:30 pm – 2:00 pm
            <br />
            {/* <span className="text-sm text-gray-600">(50 min)</span> */}
          </td>
          <td className="px-4 py-2">
            Lunch Break
          </td>
          </tr>
          <tr>
          <td className="px-4 py-2 align-top">
            2:00 pm - 5:30 pm
            <br />
            {/* <span className="text-sm text-gray-600">(30 min)</span> */}
          </td>
          <td className="px-4 py-2">
            Afternoon Session
          </td>
          </tr>
        </tbody>
        </table>
      </div>
      </section>
    )
}

export default function FullSchedule() {
  return (
    <section id="schedule" className="section">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule</h2>
  <div className="overflow-x-auto mb-10 rounded-lg">

        <p>Detailed presentation order will be announced soon!</p>

        <table className="border border-gray-300 table-fixed" style={{ maxWidth: "860px", width: "100%" }}>
          <colgroup>
            <col style={{ width: "250px", maxWidth: "250px" }} />
          </colgroup>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-gray-300">
              <td className="px-4 py-2 align-top font-bold">
                Vienna Time (UTC+2)
              </td>
              <td className="px-4 py-2 font-bold">Events</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">
                8:30 – 9:00 am
              </td>
              <td className="px-4 py-2">
                Arrival & Breakfast / Registration
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">9:00 – 9:05 am</td>
              <td className="px-4 py-2">Welcome & Opening Remarks</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">9:05 – 10:05 am</td>
              <td className="px-4 py-2">
                Keynote by the invited speaker
                <br />
                <span className="text-sm text-gray-600">
                  (45 mins + 15 mins Q&A)
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">10:05 – 10:30 am</td>
              <td className="px-4 py-2">
                Challenge awards.
                Winner and Runner up presentation
                <br />
                <span className="text-sm text-gray-600">
                  (each 7 mins talks + 3 mins Q&amp;A)
                </span>
              </td>
            </tr>

            <tr className="bg-gray-100">
              <td className="px-4 py-2 align-top">10:30 – 11:00 am</td>
              <td className="px-4 py-2">Morning Coffee Break</td>
            </tr>

            <tr>
              <td className="px-4 py-2 align-top">11:00 - 12:00 pm</td>
              <td className="px-4 py-2">
                9 presentations (paper / challenge honorable mentions)
                <br />
                <span className="text-sm text-gray-600">
                  (each 5 mins talk + 2mins Q&amp;A)
                </span>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 align-top">12:00 – 12:30 pm</td>
              <td className="px-4 py-2">Poster Session and Networking</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="px-4 py-2 align-top">12:30 – 2:00 pm</td>
              <td className="px-4 py-2">Lunch Break</td>
            </tr>

            <tr>
              <td className="px-4 py-2 align-top">2:00 – 3:00 pm</td>
              <td className="px-4 py-2">
                9 presentations (paper / challenge honorable mentions)
                  <br />
                <span className="text-sm text-gray-600">
                  (each 5 mins talk + 2mins Q&amp;A)
                </span>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 align-top">3:00 - 3:30pm</td>
              <td className="px-4 py-2">Poster Session and Networking</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="px-4 py-2 align-top">3:30 – 4:00 pm</td>
              <td className="px-4 py-2">Afternoon Coffee Break</td>
            </tr>

            <tr>
              <td className="px-4 py-2 align-top">4:00 – 5:00 pm</td>
              <td className="px-4 py-2">
                Keynote by the invited speaker
                <br />
                <span className="text-sm text-gray-600">
                  (45 mins + 15 mins Q&A)
                </span>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2 align-top">5:00 – 5:10 pm</td>
              <td className="px-4 py-2">Workshop summary</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  );
}
