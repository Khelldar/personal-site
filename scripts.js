const jobs = [
  {
    title: "Lead Software Engineer & Architect",
    company: "Avero",
    dateRange: "2017 - 2020",
    details:
      "Business intelligence and productivity applications for the restaurant industry."
  },
  {
    title: "Software Engineer",
    company: "LogRhythm",
    dateRange: "2014 - 2017",
    details: "todo"
  },
  {
    title: "Software Engineer & Consultant",
    company: "Houndstooth Consultant",
    dateRange: "2012 - 2014",
    details: "todo"
  },
  {
    title: "Programmer",
    company: "Network Alliance",
    dateRange: "2012 - 2014",
    details: "todo"
  },
  {
    title: "Technology Consultant",
    company: "Parature",
    dateRange: "2010 - 2011",
    details: "todo"
  },
  {
    title: "Software Engineer",
    company: "UPS Logistics",
    dateRange: "2008 - 2009",
    details: "todo"
  }
];

const jobsContainer = document.getElementById("jobs");
jobs.map(getJobHTML).forEach(html => jobsContainer.appendChild(html));

function getJobHTML(job) {
  const { title, company, dateRange, details } = job;

  const div = document.createElement("div");
  div.className = "job";
  div.innerHTML = `
    <div class="job-title">${title}</div>
    <div class="job-company">${company}</div>
    <div class="job-date-range">${dateRange}</div>
    <div class="job-details">${details}</div>
    `;

  return div;
}
