import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Scale } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Silné zázemí HV Group",
      desc: "Díky strategickému partnerství s HV Group Vám přinášíme podmínky a produkty, na které jednotlivec běžně nedosáhne."
    },
    {
      icon: Scale,
      title: "100% Nezávislost",
      desc: "Nekopeme za jednu pojišťovnu. Srovnáváme celý trh a vybíráme to, co je skutečně výhodné pro Vás, ne pro banku."
    },
    {
      icon: HeartHandshake,
      title: "Osobní bankéř",
      desc: "Zapomeňte na neosobní call centra. Máte svého konkrétního specialistu, který zná Váš příběh a zvedá Vám telefon."
    },
    {
      icon: Zap,
      title: "Rychlá likvidace",
      desc: "Když se něco stane, nenecháme Vás v tom. Pomáháme s hlášením škod a komunikací s pojišťovnou až do vyplacení peněz."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 -skew-y-3 origin-top-left z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Proč svěřit finance právě nám?</h2>
          <p className="text-gray-600 text-lg">
            Ve světě financí rozhoduje důvěra a expertíza. U nás získáte obojí, podpořené léty zkušeností.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;