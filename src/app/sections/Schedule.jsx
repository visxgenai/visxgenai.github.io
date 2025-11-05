"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function Presentation(props) {
  const { 
    submissionId,
    presenter,
    type,
    presentMode,
    title,
    link,
    link_pdf,
    authers
  } = props;
  const displayedAuthers = authers ? authers : presenter;
  const connected_link = link ? link : link_pdf;
  const pdf_link = `https://visxgenai.github.io/subs-2025/${submissionId}/${submissionId}-doc.pdf`;
  return (
    <div className="mb-3">
      {/* {type === "challenge-winner" ? "🥇": 
      type === "challenge-runnerup" ? "🥈": 
      type === "challenge-honorable" ? "🎖": 
      type === "short-paper" ? "📝": 
      type === "challenge" ? "🏆": 
      ""} */}
        {/* <a 
          href={connected_link} 
          // className="text-blue-500 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* {" "} */}
          <span className="text-blue-400">
           {title}
           </span>
                     {/* {" "} */}
        {/* </a> */}
      <br />
        <span className="text-black-600">by {displayedAuthers}</span>
    <br />
      {pdf_link !== "#" ? 
        <a href={pdf_link} 
        className="text-sm text-gray-600 hover:underline mr-2"
        target="_blank" 
        rel="noopener noreferrer">[Camera-ready]
        </a> : 
      ""} 

      {link !== "#" ? 
        <a href={link} 
        className="text-sm text-gray-600 hover:underline"
        target="_blank" 
        rel="noopener noreferrer">[Generated Report]
        </a> : 
      ""}

    </div>
  );
}

function ScheduleRow({ time, event, details, presentations: rowPresentations, highlight, isHeader }) {
  const rowClass = highlight ? "bg-gray-100" : isHeader ? "bg-gray-300" : "";
  
  return (
    <tr className={rowClass}>
      <td className={`px-4 py-2 align-top ${isHeader ? "font-bold" : ""}`}>
        {time}
      </td>
      <td className={`px-4 py-2 ${isHeader ? "font-bold" : ""}`}>
        {event}
        {details && ` (${details})`}
        {rowPresentations && rowPresentations.length > 0 && (
          <div>
            <div className="mt-3">
              {rowPresentations.map((pres, idx) => (
                <Presentation key={idx} {...pres} />
              ))}
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}

function ScheduleTable({ children }) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="border border-gray-300 table-fixed">
        <colgroup>
          <col style={{ width: "180px", maxWidth: "180px" }} />
          <col style={{ width: "900px", maxWidth: "900px" }} />
        </colgroup>
        <tbody className="divide-y divide-gray-200">
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default function FullSchedule() {
  const [loading, setLoading] = useState(true);
  const [presentations, setPresentations] = useState({
    awards: [],
    morning: [],
    afternoon: []
  });

  useEffect(() => {
    // Load presenters from CSV
    Papa.parse("/visxgenai-2025-presentation.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false,
      complete: (results) => {
        // Group presentations by present-session
        const grouped = {
          awards: [],
          morning: [],
          afternoon: []
        };
        
        results.data.forEach(row => {
          const session = (row['present-session'] || '').trim().toLowerCase();
          
          const presentation = {
            submissionId: row.submissionId,
            title: row.title,
            authers: row.authers || "",
            link: row.link || "#",
            type: row.type,
            presentMode: row['present-mode'] || "",
            presenter: row.presenter || "",
          };
          if (session === 'award') {
            grouped.awards.push(presentation);
          } else if (session === 'morning') {
            grouped.morning.push(presentation);
          } else if (session === 'afternoon') {
            grouped.afternoon.push(presentation);
          }
        });
        
        setPresentations(grouped);
        setLoading(false);
      },
      error: (error) => {
        console.error("Error loading presenters:", error);
        setLoading(false);
      }
    });
  }, []);

  const scheduleData = [
    { time: "8:30am - 9:00am", event: "Arrival & Breakfast / Registration" },
    { time: "9:00am - 9:05am", event: "Welcome & Opening Remarks", highlight: true },
    { 
      time: "9:05am - 10:05am", 
      event: "Keynote by the invited speaker",
      details: "45 mins + 15 mins Q&A"
    },
    { 
      time: "10:05am - 10:30am", 
      event: "Challenge Awards. Winner and Runner up presentation",
      details: "each 7 mins talk + 3 mins Q&A",
      presentations: presentations.awards
    },
    { time: "10:30am - 11:00am", event: "Morning Coffee Break", highlight: true },
    { 
      time: "11:00am - 12:00pm", 
      event: "Short Paper / Challenge",
      details: "each 5 mins talk + 2mins Q&A",
      presentations: presentations.morning
    },
    { time: "12:00am - 12:30pm", event: "Poster Session and Networking" },
    { time: "12:30am - 2:00pm", event: "Lunch Break", highlight: true },
    { 
      time: "2:00am - 3:00pm", 
      event: "Short Paper / Challenge",
      details: "each 5 mins talk + 2mins Q&A",
      presentations: presentations.afternoon
    },
    { time: "3:00am - 3:30pm", event: "Poster Session and Networking" },
    { time: "3:30am - 4:00pm", event: "Afternoon Coffee Break", highlight: true },
    { 
      time: "4:00am - 5:00pm", 
      event: "Keynote by the invited speaker",
      details: "45 mins + 15 mins Q&A"
    },
    { time: "5:00am - 5:10pm", event: "Workshop summary" }
  ];

  return (
    <section id="schedule" className="section">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Schedule</h2>
      {loading ? (
        <div className="text-gray-600">Loading schedule...</div>
      ) : (
        <div className="overflow-x-auto mb-1 rounded-lg">
          <ScheduleTable>
            <ScheduleRow 
              time="All times in CET (UTC +1)" 
              event="Events" 
              isHeader 
              highlight 
            />
            {scheduleData.map((item, index) => (
              <ScheduleRow key={index} {...item} />
            ))}
          </ScheduleTable>
        </div>
      )}
    </section>
  );
}
