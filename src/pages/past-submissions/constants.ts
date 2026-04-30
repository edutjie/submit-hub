import type { Assignment } from '../../types';

export const PAST_SUBMISSIONS: Assignment[] = [
  {
    id: "hw1",
    name: "NLP Homework 1: Text Tokenization and BoW",
    dueDate: "3/15/2026",
    description: "Implement a basic text tokenizer and bag-of-words representer.",
    status: "Submitted",
    submittedFiles: [
      { name: "tokenizer.py", size: "3.1 KB" },
    ]
  },
  {
    id: "hw_intro",
    name: "NLP Intro: Environment Setup",
    dueDate: "3/1/2026",
    description: "Install PyTorch, HuggingFace Transformers and write a hello-world script.",
    status: "Submitted",
    submittedFiles: [
      { name: "hello_nlp.py", size: "840 B" },
      { name: "reqs.txt", size: "125 B" }
    ]
  },
  {
    id: "lab1",
    name: "Lab 1: Word Embeddings",
    dueDate: "3/25/2026",
    description: "Train Word2Vec embeddings on Wikipedia dump using Gensim.",
    status: "Submitted",
    submittedFiles: [
      { name: "word2vec_wiki.ipynb", size: "45.0 KB" },
    ]
  }
];
