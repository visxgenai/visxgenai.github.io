export default function Organizers() {
  const organizers = [
    { name: 'Zhu-Tian Chen', affiliation: 'University of Minnesota' },
    { name: 'Shivam Raval', affiliation: 'Harvard University' },
    { name: 'Enrico Bertini', affiliation: 'Northeastern University' },
    { name: 'Trevor DePodesta', affiliation: 'Harvard University' },
    { name: 'Niklas Elmqvist', affiliation: 'Aarhus University' },
    { name: 'Nam Wook Kim', affiliation: 'Boston College' },
    { name: 'Qianwen Wang', affiliation: 'University of Minnesota' },
    { name: 'Yun Wang', affiliation: 'Microsoft Research' },
    { name: 'Emily Reif', affiliation: 'Google Research & University of Washington' },
    { name: 'Pranav Rajan', affiliation: 'KTH Royal Institute of Technology' },
    { name: 'Renata G. Raidou', affiliation: 'TU Wien' },
    { name: 'Olivia Seow', affiliation: 'Harvard University' },
    { name: 'Catherine Yeh', affiliation: 'Harvard University' },
    { name: 'Pan Hao', affiliation: 'University of Minnesota' },
    { name: 'Divyanshu Tiwari', affiliation: 'University of Minnesota' },
    { name: 'James Yang', affiliation: 'University of Minnesota' },
  ];

  return (
    <section className="section" id="organizers">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Organizers</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {organizers.map((org) => (
          <li key={org.name} className="flex flex-col sm:flex-row sm:space-x-4">
            <span className="font-semibold">{org.name}</span>
            <span className="text-gray-500">{org.affiliation}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}