export type SubmittedFile = {
  name: string;
  size: string; // e.g. "5.2 KB"
};

export type Assignment = {
  id: string;
  name: string;
  dueDate: string; // "MM/DD/YYYY"
  description: string;
  status: "Submitted" | "Pending";
  submittedFiles?: SubmittedFile[];
};

export type Grade = {
  id: string;
  assignmentName: string;
  dueDate: string;
  grade: number; // 0–100
  comments: string;
};
