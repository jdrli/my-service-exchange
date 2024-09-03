import React from "react";

const TABLE_HEAD = [
  "Snum",
  "Service Name",
  "Default Date",
  "Default Period",
  "Service Rate",
  "Lead",
  "Auto Assign",
  "Publish"
];

const TABLE_ROWS = [
  { snum: "001", serviceName: "Cleaning", defaultDate: "23/04/18", defaultPeriod: "Monthly", serviceRate: "$50", lead: "John Doe", autoAssign: true, publish: false },
  { snum: "002", serviceName: "Maintenance", defaultDate: "23/04/18", defaultPeriod: "Weekly", serviceRate: "$100", lead: "Jane Smith", autoAssign: false, publish: true },
  { snum: "003", serviceName: "Consulting", defaultDate: "19/09/17", defaultPeriod: "Quarterly", serviceRate: "$200", lead: "Emily Johnson", autoAssign: true, publish: true },
  { snum: "004", serviceName: "Support", defaultDate: "24/12/08", defaultPeriod: "Yearly", serviceRate: "$150", lead: "Michael Brown", autoAssign: false, publish: false },
  { snum: "005", serviceName: "Development", defaultDate: "04/10/21", defaultPeriod: "Project-Based", serviceRate: "$500", lead: "Sarah Davis", autoAssign: true, publish: true },
];

export default function DefaultTable() {
  return (
    <div className="h-full w-full m-20">
      <table className="w-full min-w-max table-auto text-left border border-gray-200">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-gray-200 py-4 pl-4 pr-4 bg-gray-50 text-gray-600"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-4 pl-4" :  "border-b py-4 pl-4 border-gray-200";

            return (
              <tr key={row.snum}>
                <td className={classes}>{row.snum}</td>
                <td className={classes}>{row.serviceName}</td>
                <td className={classes}>{row.defaultDate}</td>
                <td className={classes}>{row.defaultPeriod}</td>
                <td className={classes}>{row.serviceRate}</td>
                <td className={classes}>{row.lead}</td>
                <td className={classes}>
                  <input
                    type="checkbox"
                    checked={row.autoAssign}
                    readOnly
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                </td>
                <td className={classes}>
                  <input
                    type="checkbox"
                    checked={row.publish}
                    readOnly
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
