import React from 'react';
import { ExternalLink, Leaf, Wind, Sun } from 'lucide-react';

interface OffsetResource {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
}

const resources: OffsetResource[] = [
  {
    title: "Grow-Trees.com",
    description: "Plant trees across India to offset your carbon footprint. One tree absorbs about 20kg of CO2 annually.",
    link: "https://www.grow-trees.com/",
    icon: Leaf
  },
  {
    title: "Sustainable Green Initiative",
    description: "Support tree plantation and rural development projects across India.",
    link: "https://www.sgi.foundation/",
    icon: Sun
  },
  {
    title: "Carbon Clean",
    description: "Invest in verified carbon reduction projects across India.",
    link: "https://www.carbonclean.com/",
    icon: Wind
  }
];

export default function OffsetResources() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Offset Your Carbon Footprint</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                <resource.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                {resource.title}
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-green-600" />
              </h3>
            </div>
            <p className="text-gray-600 text-sm">{resource.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}