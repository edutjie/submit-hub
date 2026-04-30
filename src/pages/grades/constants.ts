import type { Grade } from '../../types';

export const GRADES_DATA: Grade[] = [
  {
    id: "g1",
    assignmentName: "NLP Intro: Environment Setup",
    dueDate: "3/1/2026",
    grade: 100,
    comments: "Great start, well documented setup."
  },
  {
    id: "g2",
    assignmentName: "NLP Homework 1: Text Tokenization and BoW",
    dueDate: "3/15/2026",
    grade: 92,
    comments: "Good tokenization. Missed some edge cases on punctuation."
  },
  {
    id: "g3",
    assignmentName: "Lab 1: Word Embeddings",
    dueDate: "3/25/2026",
    grade: 98,
    comments: "Excellent exploratory analysis on the trained embeddings."
  },
  {
    id: "g4",
    assignmentName: "NLP Homework 2: Sentiment Analysis Model",
    dueDate: "4/20/2026",
    grade: 85,
    comments: "Model architecture is solid but prone to overfitting."
  }
];
