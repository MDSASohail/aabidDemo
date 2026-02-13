// src/components/domain/Company/CompanyCard.jsx

import CompanyStatusBadge from "./CompanyStatusBadge";

const CompanyCard = ({ company }) => {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition flex flex-col justify-between">
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{company.name}</h3>
          <CompanyStatusBadge status={company.status} />
        </div>

        <p className="text-sm text-gray-500 mb-2">
          {company.sector}
        </p>

        <p className="text-gray-700 text-sm leading-relaxed">
          {company.description}
        </p>
      </div>

      <div className="mt-6">
        <a
          href={company.website}
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          Visit Website →
        </a>
      </div>

    </article>
  );
};

export default CompanyCard;
