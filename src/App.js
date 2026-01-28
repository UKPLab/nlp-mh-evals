import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingDown, Users, UserX, Search, FileText, ExternalLink, 
  Quote, ChevronDown, ChevronRight, ChevronLeft, AlertCircle
} from 'lucide-react';

// Import data from separate file
import { paperMetadata, surveyPapers } from './data';

// --- Static Data Structures (UI Configurations) ---
const evaluationGaps = [
  { icon: TrendingDown, stat: '50%', label: 'Rely only on AI/NLP metrics', color: 'text-red-600' },
  { icon: UserX, stat: '52%', label: 'No human evaluation', color: 'text-orange-600' },
  { icon: Users, stat: '29%', label: 'Evaluation without experts', color: 'text-yellow-600' }
];

const supportTypes = [
  {
    id: 'assessment',
    name: 'Assessment',
    icon: '🔍',
    description: 'Language-based screening & diagnosis',
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-600'
  },
  {
    id: 'intervention',
    name: 'Intervention',
    icon: '💬',
    description: 'Therapeutic chatbots & support',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-600'
  },
  {
    id: 'synthesis',
    name: 'Information Synthesis',
    icon: '📊',
    description: 'Clinical summarization & documentation',
    color: 'bg-cyan-50 border-cyan-200',
    accentColor: 'text-cyan-600'
  }
];

const caseStudies = [
  {
    id: 1,
    title: 'LLM Rating Scales',
    authors: 'Eberhardt et al. (2025)',
    category: 'assessment',
    description: 'Psychometric tool for automatically transcribed psychotherapy sessions measuring patient engagement',
    strengths: ['Strong construct validity', 'High internal consistency (ω = 0.953)', 'Criterion validity established'],
    gaps: ['Limited cross-population testing', 'Implementation feasibility unclear', 'Maintenance protocols needed']
  },
  {
    id: 2,
    title: 'Natural Language Response Formats',
    authors: 'Gu et al. (2025)',
    category: 'assessment',
    description: 'Comparing response formats for LLM-based assessment of depression and worry',
    strengths: ['Strong convergent validity (r = .60-.79)', 'Good temporal reliability', 'Pre-registered evaluation'],
    gaps: ['Discriminant validity concerns', 'Workflow feasibility not tested', 'Cross-cultural validation needed']
  },
  {
    id: 3,
    title: 'Personalized Interventions',
    authors: 'Bar-Shachar et al. (2025)',
    category: 'intervention',
    description: 'LLM-based tool generating context-sensitive therapeutic interventions using specialized agents',
    strengths: ['Theoretically grounded', 'High inter-rater reliability', 'Clinically relevant outputs'],
    gaps: ['No ecological validity testing', 'Fairness not assessed', 'Implementation barriers unknown']
  },
  {
    id: 4,
    title: 'Cognitive Restructuring',
    authors: 'Sharma et al. (2023, 2024)',
    category: 'intervention',
    description: 'Human-LM interaction tool for CBT cognitive reframing with safety mechanisms',
    strengths: ['Clinically validated attributes', 'Large-scale field study (N=15,531)', 'Equity adaptations tested'],
    gaps: ['Long-term effects unknown', 'Limited to one CBT technique', 'Scalability across cultures unclear']
  },
  {
    id: 5,
    title: 'Timeline Summarization',
    authors: 'Song et al. (2024)',
    category: 'synthesis',
    description: 'Hierarchical VAE-LLM tool for clinically meaningful summaries of social media timelines',
    strengths: ['Expert-validated outputs', 'Multi-layer summarization', 'Diagnostic accuracy assessed'],
    gaps: ['Limited ecological validity', 'Hallucination risks not tested', 'Usability not evaluated']
  }
];

const metricBridge = [
  { nlpMetric: 'F1 Score', clinicalAnchor: 'Clinical Validity', explanation: 'Does this match what clinicians consider diagnostically relevant?' },
  { nlpMetric: 'BLEU/ROUGE', clinicalAnchor: 'Therapeutic Appropriateness', explanation: 'Does this response support healing vs. surface-level text similarity?' },
  { nlpMetric: 'Accuracy', clinicalAnchor: 'Safety & Equity', explanation: 'Does it work consistently across demographics? What are failure modes?' },
  { nlpMetric: 'Perplexity', clinicalAnchor: 'User Experience', explanation: 'Would patients/clinicians actually use and trust this?' }
];

// --- Main Application ---
const ITEMS_PER_PAGE = 10;

const App = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering Logic
  const filteredPapers = useMemo(() => {
    return surveyPapers.filter(paper => {
      const matchesType = !selectedType || paper.category === selectedType;
      const matchesSearch = !searchTerm || 
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.authors.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedType, searchTerm]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPapers.length / ITEMS_PER_PAGE);
  const paginatedPapers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPapers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPapers, currentPage]);

  // Reset page on search/filter
  useEffect(() => { setCurrentPage(1); }, [searchTerm, selectedType]);

  const filteredCaseStudies = useMemo(() => {
    return selectedType ? caseStudies.filter(s => s.category === selectedType) : caseStudies;
  }, [selectedType]);
// const App = () => {
//   const [selectedType, setSelectedType] = useState(null);
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [copiedBibtex, setCopiedBibtex] = useState(null);
//   const [mainBibtexCopied, setMainBibtexCopied] = useState(false);
//   const [selectedMetric, setSelectedMetric] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Use surveyPapers imported from data.js
//   const filteredPapers = useMemo(() => {
//     return surveyPapers.filter(paper => {
//       const matchesType = !selectedType || paper.category === selectedType;
//       const matchesSearch = !searchTerm || 
//         paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         paper.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         paper.task.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesType && matchesSearch;
//     });
//   }, [selectedType, searchTerm]);

//   const filteredCaseStudies = useMemo(() => {
//     return selectedType 
//       ? caseStudies.filter(study => study.category === selectedType)
//       : caseStudies;
//   }, [selectedType]);

//   const copyBibtex = (bibtex, index) => {
//     navigator.clipboard.writeText(bibtex);
//     if (index === 'main') {
//       setMainBibtexCopied(true);
//       setTimeout(() => setMainBibtexCopied(false), 2000);
//     } else {
//       setCopiedBibtex(index);
//       setTimeout(() => setCopiedBibtex(null), 2000);
//     }
//   };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Hero Section */}
      <header className="border-b border-gray-200 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {paperMetadata.title}
            </h1>
            
            {/* Authors */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
              {paperMetadata.authors.map((author, idx) => (
                <div key={idx} className="text-lg text-gray-800">
                  {author.name}
                  <sup className="text-teal-600 font-medium ml-0.5">
                    {author.affiliations.join(',')}
                  </sup>
                </div>
              ))}
            </div>

            {/* Affiliations */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-gray-600">
              {paperMetadata.affiliations.map((affil) => (
                <div key={affil.id}>
                  <sup className="text-teal-600 mr-0.5">{affil.id}</sup>
                  {affil.name}
                </div>
              ))}
            </div>

            {/* Paper Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href={paperMetadata.links.arxiv} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
              >
                <ExternalLink size={18} />
                preprint
              </a>
              {/* <a 
                href={paperMetadata.links.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
              >
                <FileText size={18} />
                PDF
              </a> */}
            </div>

            {/* Subtitle/Note */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {paperMetadata.subtitle}
            </p>
            <div className="inline-block px-4 py-1 bg-white rounded-full border border-gray-200 text-sm text-gray-500 shadow-sm">
              {paperMetadata.note}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Evaluation Gaps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Evaluation Crisis
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {evaluationGaps.map((gap, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: '#0D9488' }}
              >
                <gap.icon className={`w-12 h-12 ${gap.color} mx-auto mb-4`} />
                <div className="text-5xl font-bold text-gray-900 mb-2">{gap.stat}</div>
                <div className="text-gray-600">{gap.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Taxonomy Switchboard */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Three Support Types
          </motion.h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Different AI mental health tools require distinct evaluation approaches
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {supportTypes.map((type) => (
              <motion.button
                key={type.id}
                className={`border-2 rounded-lg p-6 text-left transition-all ${
                  selectedType === type.id 
                    ? `${type.color} shadow-lg` 
                    : 'bg-white border-gray-200 hover:border-teal-200'
                }`}
                onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${selectedType === type.id ? type.accentColor : 'text-gray-900'}`}>
                  {type.name}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
                {selectedType === type.id && (
                  <motion.div 
                    className="mt-4 text-sm font-semibold text-teal-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Filter active
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Explorer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Case Study Explorer
          </motion.h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
              <AnimatePresence>
                {filteredCaseStudies.map((study, idx) => (
                  <motion.div
                    key={study.id}
                    className="w-80 border-2 border-gray-200 rounded-lg p-6 bg-white flex-shrink-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8, borderColor: '#0D9488' }}
                  >
                    <div className="text-sm text-teal-600 font-semibold mb-2 uppercase">
                      Study {study.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <div className="text-sm text-gray-500 mb-4">{study.authors}</div>
                    <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-gray-700 mb-2">Strengths:</div>
                      {study.strengths.map((s, i) => (
                        <div key={i} className="text-xs text-gray-600 mb-1">✓ {s}</div>
                      ))}
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-gray-700 mb-2">Gaps:</div>
                      {study.gaps.map((g, i) => (
                        <div key={i} className="text-xs text-gray-600 mb-1">⚠ {g}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Bridge Widget */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Metric Bridge
          </motion.h2>
          <p className="text-center text-gray-600 mb-8">
            Connecting NLP metrics to clinical anchors
          </p>
          
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {metricBridge.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMetric(idx)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedMetric === idx 
                      ? 'bg-teal-50 border-teal-500' 
                      : 'border-gray-200 hover:border-teal-200'
                  }`}
                >
                  <div className="font-semibold text-sm text-gray-900">{item.nlpMetric}</div>
                </button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMetric}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-teal-50 rounded-lg p-6 border-2 border-teal-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">NLP Metric</div>
                    <div className="text-xl font-bold text-gray-900">
                      {metricBridge[selectedMetric].nlpMetric}
                    </div>
                  </div>
                  <div className="text-3xl text-gray-400">→</div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Clinical Anchor</div>
                    <div className="text-xl font-bold text-teal-600">
                      {metricBridge[selectedMetric].clinicalAnchor}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{metricBridge[selectedMetric].explanation}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Main Survey Table (Updated for New Dictionary & Pagination) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-900">Literature Survey ({filteredPapers.length})</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="Search papers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none" />
            </div>
          </div>

          <div className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Paper</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Metrics</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase">Human</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase">Expert</th>
                    <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase">Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedPapers.map((paper, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="hover:bg-teal-50/30 cursor-pointer" onClick={() => setExpandedRow(expandedRow === idx ? null : idx)}>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900 text-sm">{paper.title}</div>
                          <div className="text-xs text-gray-500">{paper.authors}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${paper.metrics.includes('AI') ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                            {paper.metrics}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">{paper.humanEval ? '✅' : '❌'}</td>
                        <td className="px-6 py-4 text-center">{paper.expertEval ? '✅' : '❌'}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">{paper.guidelinesProvided}</td>
                      </tr>
                      {expandedRow === idx && (
                        <tr className="bg-gray-50">
                          <td colSpan="5" className="px-6 py-4 text-sm text-gray-700">
                            <div className="flex gap-2">
                              <AlertCircle size={16} className="text-orange-500" />
                              <strong>Limitations Reported:</strong> {paper.limitations ? "Detailed limitations available in source." : "No explicit limitations stated."}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination UI */}
            <div className="px-6 py-4 bg-white border-t border-gray-200 flex items-center justify-between">
              <span className="text-sm text-gray-500">Page {currentPage} of {totalPages || 1}</span>
              <div className="flex gap-2">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50"><ChevronLeft size={20}/></button>
                <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage(p => p + 1)} className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50"><ChevronRight size={20}/></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Citation */}
      <footer className="py-12 bg-gray-900 text-white text-center">
        <Quote className="text-teal-400 w-8 h-8 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Cite This Work</h2>
        <pre className="max-w-2xl mx-auto p-4 bg-gray-800 rounded text-xs text-gray-300 overflow-x-auto">
          {paperMetadata.citation}
        </pre>
      </footer>
    </div>
  );
};

export default App;