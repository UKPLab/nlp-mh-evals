// --- data.js ---

export const paperMetadata = {
  title: "Responsible Evaluation of AI for Mental Health",
  subtitle: "A comprehensive framework for evaluating AI tools in mental health care through clinical soundness, social context, and equity",
  note: "Analysis of 135 ACL papers (2020-2025)",
  
  // Update authors here. numbers correspond to affiliation IDs
  authors: [
    { name: "Hiba Arnaout", affiliations: [1] },
    { name: "Anmol Goel", affiliations: [1] },
    { name: "H. Andrew Schwartz", affiliations: [2] },
    { name: "Steffen T. Eberhardt", affiliations: [3] },
    { name: "Dana Atzil-Slonim", affiliations: [4]},
    { name: "Gavin Doherty", affiliations: [5]},
    { name: "Brian Schwartz", affiliations: [3]},
    { name: "Wolfgang Lutz", affiliations: [3]},
    { name: "Tim Althoff", affiliations: [6]},
    { name: "Munmun De Choudhury", affiliations: [7]},
    { name: "Hamidreza Jamalabadi", affiliations: [8]},
    { name: "Raj Sanjay Shah", affiliations: [7]},
    { name: "Flor Miriam Plaza-del-Arco", affiliations: [9]},
    { name: "Dirk Hovy", affiliations: [10]},
    { name: "Maria Liakata", affiliations: [11]},
    { name: "Iryna Gurevych", affiliations: [1]},
  ],
  
  affiliations: [
    { id: 1, name: "Technische Universität Darmstadt" },
    { id: 2, name: "Stony Brook University" },
    { id: 3, name: "Trier University" },
    { id: 4, name: "Bar-Ilan University"},
    { id: 5, name: "Trinity College Dublin"},
    { id: 6, name: "University of Washington"},
    { id: 7, name: "Georgia Institute of Technology"},
    { id: 8, name: "Phillips-Universität Marburg"},
    { id: 9, name: "Leiden University"},
    { id: 10, name: "Bocconi University"},
    { id: 11, name: "Queen Mary University London"},
  ],

  links: {
    arxiv: "https://zenodo.org/records/18402515", // Add your link
    pdf: "https://google.com", // Add your PDF link
  },

  // The BibTeX for YOUR position paper (to be displayed at the bottom)
  citation: `@misc{arnaout2026responsible, 
  title={Responsible Evaluation of AI for Mental Health}, 
  DOI={10.5281/zenodo.18402515},  
  author={Arnaout, Hiba and Goel, Anmol and Schwartz, H. Andrew  and Eberhardt, Steffen T. and 
  Atzil-Slonim, Dana and Doherty, Gavin and Schwartz, Brian and Lutz, Wolfgang and Althoff, Tim and
  De Choudhury, Munmun and Jamalabadi, Hamidreza and Sanjay Shah, Raj and 
  Miriam Plaza-del-Arco, Flor and Hovy, Dirk and Liakata, Maria and Gurevych, Iryna} }`
};

// Paste your full list of 135 papers here
export const surveyPapers = 
[
  {
    "title": "Linguistic Complexity Loss in Text-Based Therapy",
    "authors": "Wei et al., 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Depression Detection in Clinical Interviews with LLM-Empowered Structural Element Graph",
    "authors": "Chen et al., 2024b",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "An Annotated Dataset for Explainable Interpersonal Risk Factors of Mental Disturbance in Social Media Posts",
    "authors": "Garg et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Lived Experience Not Found: LLMs Struggle to Align with Experts on Addressing Adverse Drug Reactions from Psychiatric Medication Use",
    "authors": "Chandra et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Weakly-Supervised Methods for Suicide Risk Assessment: Role of Related Domains",
    "authors": "Yang et al., 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Generating Mental Health Transcripts with SAPE (Spanish Adaptive Prompt Engineering)",
    "authors": "Lozoya et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "Suicidal Risk Detection for Military Personnel",
    "authors": "Park et al., 2020",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "C2D2 Dataset: A Resource for the Cognitive Distortion Analysis and Its Impact on Mental Health",
    "authors": "Wang et al., 2023a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Taking a turn for the better: Conversation redirection throughout the course of mental-health therapy",
    "authors": "Nguyen et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "Towards Intelligent Clinically-Informed Language Analyses of People with Bipolar Disorder and Schizophrenia",
    "authors": "Aich et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "PAL: Persona-Augmented Emotional Support Conversation Generation",
    "authors": "Cheng et al., 2023",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Towards end-2-end learning for predicting behavior codes from spoken utterances in psychotherapy conversations",
    "authors": "Singla et al., 2020",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Detecting Bipolar Disorder from Misdiagnosed Major Depressive Disorder with Mood-Aware Multi-Task Learning",
    "authors": "Lee et al., 2024a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Towards Emotional Support Dialog Systems",
    "authors": "Liu et al., 2021",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Mental Disorder Classification via Temporal Representation of Text",
    "authors": "Kumar et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Discourse-Level Representations can Improve Prediction of Degree of Anxiety",
    "authors": "Juhng et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Ask an Expert: Leveraging Language Models to Improve Strategic Reasoning in Goal-Oriented Dialogue Models",
    "authors": "Zhang et al., 2023",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Empowering Psychotherapy with Large Language Models: Cognitive Distortion Detection through Diagnosis of Thought Prompting",
    "authors": "Chen et al., 2023b",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Identifying Moments of Change from Longitudinal User Text",
    "authors": "Tsakalidis et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Multi-Level Feedback Generation with Large Language Models for Empowering Novice Peer Counselors",
    "authors": "Chaszczewicz et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Using Linguistic Entrainment to Evaluate Large Language Models for Use in Cognitive Behavioral Therapy",
    "authors": "Kian et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Identifying Early Maladaptive Schemas from Mental Health Question Texts",
    "authors": "Gollapalli et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Understanding the Therapeutic Relationship between Counselors and Clients in Online Text-based Counseling using LLMs",
    "authors": "Li et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Diverse Perspectives, Divergent Models: Cross-Cultural Evaluation of Depression Detection on Twitter",
    "authors": "Abdelkadir et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "PHASE: Learning Emotional Phase-aware Representations for Suicide Ideation Detection on Social Media",
    "authors": "Sawhney et al., 2021a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Improving the Generalizability of Depression Detection by Leveraging Clinical Questionnaires",
    "authors": "Nguyen et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "What to Fuse and How to Fuse: Exploring Emotion and Personality Fusion Strategies for Explainable Mental Disorder Detection",
    "authors": "Zanwar et al., 2023a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Do Large Language Models Align with Core Mental Health Counseling Competencies?",
    "authors": "Nguyen et al., 2025a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Cross-Lingual Suicidal-Oriented Word Embedding toward Suicide Prevention",
    "authors": "Lee et al., 2020",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Understanding Client Reactions in Online Mental Health Counseling",
    "authors": "Li et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "IMBUE: Improving Interpersonal Effectiveness through Simulation and Just-in-time Feedback with Human-Language Model Interaction",
    "authors": "Lin et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "PsychoGAT: A Novel Psychological Measurement Paradigm through Interactive Fiction Games with LLM Agents",
    "authors": "Yang et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "ALBA: Adaptive Language-Based Assessments for Mental Health",
    "authors": "Varadarajan et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Ask the experts: sourcing a high-quality nutrition counseling dataset through Human-AI collaboration",
    "authors": "Balloccu et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Cognitive Reframing of Negative Thoughts through Human-Language Model Interaction",
    "authors": "Sharma et al., 2023",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "A Computational Approach to Understanding Empathy Expressed in Text-Based Mental Health Support",
    "authors": "Sharma et al., 2020",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "A Shoulder to Cry on: Towards A Motivational Virtual Assistant for Assuaging Mental Agony",
    "authors": "Saha et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": false
  },
  {
    "title": "Knowledge-enhanced Mixed-initiative Dialogue System for Emotional Support Conversations",
    "authors": "Deng et al., 2023",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "Language and Mental Health: Measures of Emotion Dynamics from Text as Linguistic Biosocial Markers",
    "authors": "Teodorescu et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "CURE: Context- and Uncertainty-Aware Mental Disorder Detection",
    "authors": "Kang et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Still Not Quite There! Evaluating Large Language Models for Comorbid Mental Health Diagnosis",
    "authors": "Hengle et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "A Cognitive Stimulation Dialogue System with Multi-source Knowledge Fusion for Elders with Cognitive Impairment",
    "authors": "Jiang et al., 2023",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": false
  },
  {
    "title": "KMI: A Dataset of Korean Motivational Interviewing Dialogues for Psychotherapy",
    "authors": "Kim et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Combining Hierachical VAEs with LLMs for clinically meaningful timeline summarisation in social media",
    "authors": "Song et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "A Simple and Flexible Modeling for Mental Disorder Detection by Learning from Clinical Questionnaires",
    "authors": "Song et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "On the Way to Gentle AI Counselor: Politeness Cause Elicitation and Intensity Tagging in Code-mixed Hinglish Conversations for Social Good",
    "authors": "Priya et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "D4: a Chinese Dialogue Dataset for Depression-Diagnosis-Oriented Chat",
    "authors": "Yao et al., 2022",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "Task-Adaptive Tokenization: Enhancing Long-Form Text Generation Efficacy in Mental Health and Beyond",
    "authors": "Liu et al., 2023",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Gendered Mental Health Stigma in Masked Language Models",
    "authors": "Lin et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "LLM Questionnaire Completion for Automatic Psychiatric Assessment",
    "authors": "Rosenman et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Emotion Granularity from Text: An Aggregate-Level Indicator of Mental Health",
    "authors": "Vishnubhotla et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Leveraging Open Data and Task Augmentation to Automated Behavioral Coding of Psychotherapy Conversations in Low-Resource Scenarios",
    "authors": "Chen et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "CASE: Efficient Curricular Data Pre-training for Building Assistive Psychology Expert Models",
    "authors": "Harne et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Do Models of Mental Health Based on Social Media Data Generalize?",
    "authors": "Harrigian et al., 2020",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Self-Adapted Utterance Selection for Suicidal Ideation Detection in Lifeline Conversations",
    "authors": "Wang et al., 2023b",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Can AI Relate: Testing Large Language Model Response for Mental Health Support",
    "authors": "Gabriel et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Suicide Ideation Detection via Social and Temporal User Representations using Hyperbolic Learning",
    "authors": "Sawhney et al., 2021b",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "PAIR: Prompt-Aware margIn Ranking for Counselor Reflection Scoring in Motivational Interviewing",
    "authors": "Min et al., 2022",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Crisis counselor language and perceived genuine concern in crisis conversations",
    "authors": "Buda et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Empirical Evaluation of Pre-trained Transformers for Human-Level NLP: The Role of Sample Size and Dimensionality",
    "authors": "V Ganesan et al., 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Roleplay-doh: Enabling Domain-Experts to Create LLM-simulated Patients via Eliciting and Adhering to Principles",
    "authors": "Louie et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Exciting Mood Changes: A Time-aware Hierarchical Transformer for Change Detection Modelling",
    "authors": "Hills et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "SMILE: Single-turn to Multi-turn Inclusive Language Expansion via ChatGPT for Mental Health Support",
    "authors": "Qiu et al., 2024a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "PsyGUARD: An Automated System for Suicide Detection and Risk Assessment in Psychological Counseling",
    "authors": "Qiu et al., 2024b",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "FedTherapist: Mental Health Monitoring with User-Generated Linguistic Expressions on Smartphones via Federated Learning",
    "authors": "Shin et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Modeling Empathetic Alignment in Conversation",
    "authors": "Yang and Jurgens, 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Towards Interpretable Mental Health Analysis with Large Language Models",
    "authors": "Yang et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Multimodal Cognitive Reframing Therapy via Multi-hop Psychotherapeutic Reasoning",
    "authors": "Kim et al., 2025c",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "SMHD-GER: A Large-Scale Benchmark Dataset for Automatic Mental Health Detection from Social Media in German",
    "authors": "Zanwar et al., 2023b",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Towards Identifying Fine-Grained Depression Symptoms from Memes",
    "authors": "Yadav et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "Mapping Long-term Causalities in Psychiatric Symptomatology and Life Events from Social Media",
    "authors": "Chen et al., 2024a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Symptom Identification for Interpretable Detection of Multiple Mental Disorders on Social Media",
    "authors": "Zhang et al., 2022",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Gender and Racial Fairness in Depression Research using Social Media",
    "authors": "Aguirre et al., 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "CBT-Bench: Evaluating Large Language Models on Assisting Cognitive Behavior Therapy",
    "authors": "Zhang et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "e-THERAPIST: I suggest you to cultivate a mindset of positivity and nurture uplifting thoughts",
    "authors": "Mishra et al., 2023a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": false
  },
  {
    "title": "Knowledge Planning in Large Language Models for Domain-Aligned Counseling Summarization",
    "authors": "Srivastava et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "PATIENT-ψ: Using Large Language Models to Simulate Patients for Training Mental Health Professionals",
    "authors": "Wang et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Deciphering Cognitive Distortions in Patient-Doctor Mental Health Conversations: A Multimodal LLM-Based Detection and Reasoning Framework",
    "authors": "Singh et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Sequential Path Signature Networks for Personalised Longitudinal Language Modeling",
    "authors": "Tseriotou et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "DisorBERT: A Double Domain Adaptation Model for Detecting Signs of Mental Disorders in Social Media",
    "authors": "Aragón et al., 2023",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Cactus: Towards Psychological Counseling Conversations using Cognitive Behavioral Theory",
    "authors": "Lee et al., 2024b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Development of Conversational AI for Sleep Coaching Programme",
    "authors": "Shim, 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Social Biases in NLP Models as Barriers for Persons with Disabilities",
    "authors": "Hutchinson et al., 2020",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Chinese MentalBERT: Domain-Adaptive Pre-training on Social Media for Chinese Mental Health Text Analysis",
    "authors": "Zhai et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "Micromodels for Efficient, Explainable, and Reusable Systems: A Case Study on Mental Health",
    "authors": "Lee et al., 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "HealMe: Harnessing Cognitive Reframing in Large Language Models for Psychotherapy",
    "authors": "Xiao et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "PAL to Lend a Helping Hand: Towards Building an Emotion Adaptive Polite and Empathetic Counseling Conversational Agent",
    "authors": "Mishra et al., 2023b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "No",
    "limitations": false
  },
  {
    "title": "Predicting Treatment Outcome from Patient Texts:The Case of Internet-Based Cognitive Behavioural Therapy",
    "authors": "Gogoulou et al., 2021",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Detection of Multiple Mental Disorders from Social Media with Two-Stream Psychiatric Experts",
    "authors": "Chen et al., 2023a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "When LLMs Meets Acoustic Landmarks: An Efficient Approach to Integrate Speech into Large Language Models for Depression Detection",
    "authors": "Zhang et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "The Colorful Future of LLMs: Evaluating and Improving LLMs as Emotional Supporters for Queer Youth",
    "authors": "Lissak et al., 2024",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Decoding the Narratives: Analyzing Personal Drug Experiences Shared on Reddit",
    "authors": "Bouzoubaa et al., 2024",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "A Fully Generative Motivational Interviewing Counsellor Chatbot for Moving Smokers Towards the Decision to Quit",
    "authors": "Mahmood et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "PsyDial: A Large-scale Long-term Conversational Dataset for Mental Health Support",
    "authors": "Qiu and Lan, 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "SpeechT-RAG: Reliable Depression Detection in LLMs with Retrieval-Augmented Generation Using Speech Timing Information",
    "authors": "Zhang et al., 2025c",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "DeepWell-Adol: A Scalable Expert-Based Dialogue Corpus for Adolescent Positive Mental Health and Wellbeing Promotion",
    "authors": "Qiu et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Hanging in the Balance: Pivotal Moments in Crisis Counseling Conversations",
    "authors": "Nguyen et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Assess and Prompt: A Generative RL Framework for Improving Engagement in Online Mental Health Communities",
    "authors": "Gaur et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "AnnaAgent: Dynamic Evolution Agent System with Multi-Session Memory for Realistic Seeker Simulation",
    "authors": "Wang et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Tracking Life’s Ups and Downs: Mining Life Events from Social Media Posts for Mental Health Analysis",
    "authors": "Lv et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Can Large Language Models Identify Implicit Suicidal Ideation? An Empirical Evaluation",
    "authors": "Li et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Eeyore: Realistic Depression Simulation via Expert-in-the-Loop Supervised and Preference Optimization",
    "authors": "Liu et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Dialogue Systems for Emotional Support via Value Reinforcement",
    "authors": "Kim et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "MultiAgentESC: A LLM-based Multi-Agent Collaboration Framework for Emotional Support Conversation",
    "authors": "Xu et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "MAGI: Multi-Agent Guided Interview for Psychiatric Assessment",
    "authors": "Bi et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Systematic Evaluation of Auto-Encoding and Large Language Model Representations for Capturing Author States and Traits",
    "authors": "Singh et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "The Pursuit of Empathy: Evaluating Small Language Models for PTSD Dialogue Support",
    "authors": "Bn et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Just a Scratch: Enhancing LLM Capabilities for Self-harm Detection through Intent Differentiation and Emoji Interpretation",
    "authors": "Ghosh et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Temporal reasoning for timeline summarisation in social media",
    "authors": "Song et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "MIRROR: Multimodal Cognitive Reframing Therapy for Rolling with Resistance",
    "authors": "Kim et al., 2025d",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Are LLMs effective psychological assessors? Leveraging adaptive RAG for interpretable mental health screening through psychometric practice",
    "authors": "Ravenda et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "ReDepress: A Cognitive Framework for Detecting Depression Relapse from Social Media",
    "authors": "Agarwal et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "MentalGLM Series: Explainable LLMs for Mental Health Analysis on Chinese Social Media",
    "authors": "Zhai et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Towards AI-Assisted Psychotherapy: Emotion-Guided Generative Interventions",
    "authors": "Haydarov et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Mitigating Interviewer Bias in Multimodal Depression Detection: An Approach with Adversarial Learning and Contextual Positional Encoding",
    "authors": "Zhang and Poellabauer, 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Explainable Depression Detection in Clinical Interviews with Personalized Retrieval-Augmented Generation",
    "authors": "Zhang et al., 2025a",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "From Heart to Words: Generating Empathetic Responses via Integrated Figurative Language and Semantic Context Signals",
    "authors": "Lee et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Reframe Your Life Story: Interactive Narrative Therapist and Innovative Moment Assessment with Large Language Models",
    "authors": "Feng et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "From Conversation to Automation: Leveraging LLMs for Problem-Solving Therapy Analysis",
    "authors": "Aghakhani et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "Feel the Difference? A Comparative Analysis of Emotional Arcs in Real and LLM-Generated CBT Sessions",
    "authors": "Wang et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "CAMI: A Counselor Agent Supporting Motivational Interviewing through State Inference and Topic Exploration",
    "authors": "Yang et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Consistent Client Simulation for Motivational Interviewing-based Counseling",
    "authors": "Yang et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Does Rationale Quality Matter? Enhancing Mental Disorder Detection via Selective Reasoning Distillation",
    "authors": "Song et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Crisp: Cognitive Restructuring of Negative Thoughts through Multi-turn Supportive Dialogues",
    "authors": "Zhou et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "ProMind-LLM: Proactive Mental Health Care via Causal Reasoning with Sensor Data",
    "authors": "Zheng et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "No",
    "limitations": true
  },
  {
    "title": "EmoAgent: Assessing and Safeguarding Human-AI Interaction for Mental Health Safety",
    "authors": "Qiu et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "MIND: Towards Immersive Psychological Healing with Multi-Agent Inner Dialogue",
    "authors": "Chen et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "PsyDT: Using LLMs to Construct the Digital Twin of Psychological Counselor with Personalized Counseling Style for Psychological Counseling",
    "authors": "Xie et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Third-Person Appraisal Agent: Simulating Human Emotional Reasoning in Text with Large Language Models",
    "authors": "Hong et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": false,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "CATCH: A Novel Data Synthesis Framework for High Therapy Fidelity and Memory-Driven Planning Chain of Thought in AI Counseling",
    "authors": "Chen et al., 2025a",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": false
  },
  {
    "title": "Assessment and manipulation of latent constructs in pre-trained language models using psychometric scales",
    "authors": "Reuben et al., 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": false
  },
  {
    "title": "How Real Are Synthetic Therapy Conversations? Evaluating Fidelity in Prolonged Exposure Dialogues",
    "authors": "Bn et al., 2025b",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "KoACD: The First Korean Adolescent Dataset for Cognitive Distortion Analysis via Role-Switching Multi-LLM Negotiation",
    "authors": "Kim and Kim, 2025",
    "metrics": "Psychologically grounded metrics",
    "humanEval": true,
    "expertEval": true,
    "guidelinesProvided": "Yes",
    "limitations": true
  },
  {
    "title": "Exploring Large Language Models for Detecting Mental Disorders",
    "authors": "Kuzmin et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  },
  {
    "title": "M-Help: Using Social Media Data to Detect Mental Health Help-Seeking Signals",
    "authors": "Sathvik et al., 2025",
    "metrics": "AI/NLP metrics",
    "humanEval": false,
    "expertEval": false,
    "guidelinesProvided": "NA",
    "limitations": true
  }
];