// src/components/domain/Company/CompanyStatusBadge.jsx

const statusStyles = {
  Active: "bg-green-100 text-green-700",
  Scaling: "bg-blue-100 text-blue-700",
  Incubation: "bg-yellow-100 text-yellow-700",
};

const CompanyStatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default CompanyStatusBadge;
