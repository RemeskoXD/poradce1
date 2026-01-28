import React from 'react';
import { DOCUMENTS } from '../constants';
import { FileText, Download, Shield, Info } from 'lucide-react';

const LegalDocs: React.FC = () => {
  // Group documents by categories (simulated for now, can be added to types later)
  const categories = [
    {
      title: "Licence a Oprávnění",
      icon: Shield,
      docs: DOCUMENTS.filter(d => d.title.includes("registraci") || d.title.includes("pojišťoven"))
    },
    {
      title: "Informace pro klienty",
      icon: Info,
      docs: DOCUMENTS.filter(d => !d.title.includes("registraci") && !d.title.includes("pojišťoven"))
    }
  ];

  return (
    <section id="documents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dokumenty ke stažení</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparentnost je pro nás klíčová. Zde naleznete veškeré potřebné právní dokumenty, 
            osvědčení o registracích u ČNB a informační listy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-primary/5 p-6 border-b border-gray-100 flex items-center gap-3">
                <cat.icon className="text-primary" size={24} />
                <h3 className="font-bold text-lg text-gray-900">{cat.title}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {cat.docs.length > 0 ? (
                  cat.docs.map((doc, dIdx) => (
                    <div 
                      key={dIdx} 
                      className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-100 p-2.5 rounded-lg text-gray-500 group-hover:text-primary group-hover:bg-blue-50 transition-colors">
                          <FileText size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">{doc.title}</h4>
                          <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{doc.type} • {doc.date}</span>
                        </div>
                      </div>
                      <button className="text-gray-300 hover:text-accent transition-colors">
                        <Download size={20} />
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-400 italic text-sm">
                    V této kategorii nejsou momentálně žádné dokumenty.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center text-sm text-blue-800">
          <p>
            Všechny dokumenty jsou ve formátu PDF. Pro jejich zobrazení potřebujete program Adobe Acrobat Reader. 
            V případě dotazů k obsahu dokumentů nás neváhejte <a href="/kontakt" className="font-bold underline">kontaktovat</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalDocs;