import type { Assignment } from '../../types';

export const ACTIVE_ASSIGNMENTS: Assignment[] = [
  {
    id: "hw2",
    name: "NLP Homework 2: Sentiment Analysis Model",
    dueDate: "04/20/2026",
    description: "Build a machine learning model to classify sentiment in movie reviews.",
    status: "Submitted",
    submittedFiles: [
      { name: "sentiment_model.py", size: "5.2 KB" },
      { name: "report.pdf", size: "1.8 MB" }
    ]
  },
  {
    id: "hw3",
    name: "NLP Homework 3: Named Entity Recognition",
    dueDate: "04/25/2026",
    description: "Develop an NER system using spaCy or NLTK to extract entities from news articles.",
    status: "Pending"
  }
];
