export default function Dates() {
  return (
    <section className="section" id="important-dates">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <p className="mb-4">
        All deadlines are in
        Anywhere time zone (UTC-12).
      </p>
      <ul className="space-y-1">
        <li className="text-gray-700">
          <span className="font-medium">May 30th, 2025:</span> Call for
          Participation
        </li>
        <li className="text-gray-700">
          <span className="font-medium">August <s>20th</s> <span style={{ color: 'red'}}>29th (Friday)</span>, 2025:</span>{" "}
          Submission Deadline
        </li>
        <li className="text-gray-700">
          <span className="font-medium">September <s>1st</s> <span style={{ color: 'red'}}>10th</span>, 2025:</span> Author
          Notification
        </li>
        <li className="text-gray-700">
          <span className="font-medium">October 1st, 2025:</span> Camera Ready
          Deadline
        </li>
        <li className="text-gray-700">
          <span className="font-medium">November 3rd (Monday), 2025:</span> Workshop
          Day
        </li>
      </ul>
    </section>
  );
}
