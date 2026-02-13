import { visionPoints } from "../data/visionPoints";

const FounderVisionSection = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl md:text-4xl font-semibold mb-10">
          Long-Term Vision
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 border border-gray-800 rounded-lg"
            >
              <p className="text-gray-300 text-base md:text-lg">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FounderVisionSection;
