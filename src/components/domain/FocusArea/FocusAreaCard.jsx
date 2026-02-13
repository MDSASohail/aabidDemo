// src/components/domain/FocusArea/FocusAreaCard.jsx

const FocusAreaCard = ({ area }) => {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition">
      <h3 className="text-lg font-semibold mb-3">
        {area.title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        {area.description}
      </p>
    </article>
  );
};

export default FocusAreaCard;
