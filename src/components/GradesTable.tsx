import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Grade } from "../types";
import { Button } from "./Button";
import { Download } from "lucide-react";

export const GradesTable: React.FC<{ grades: Grade[] }> = ({ grades }) => {
  const handleExportCSV = () => {
    // 1. Build CSV headers
    const headers = ["No.", "Assignment Name", "Due Date", "Grade", "Comments"];

    // 2. Build rows
    const rows = grades.map((grade, index) => [
      index + 1,
      `"${grade.assignmentName.replace(/"/g, '""')}"`,
      `"${grade.dueDate.replace(/"/g, '""')}"`,
      `"${String(grade.grade).replace(/"/g, '""')}"`,
      `"${grade.comments.replace(/"/g, '""')}"`,
    ]);

    // 3. Create CSV string
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(",")),
    ].join("\n");

    // 4. Create and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "grades_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full text-left bg-white rounded-[20px] p-[32px] border-[2px] border-light-gray shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="w-full flex justify-end mb-[25px]">
        <Button
          variant={2}
          className="flex justify-center items-center gap-[10px] w-full sm:w-auto"
          onClick={handleExportCSV}
        >
          <Download size={20} />
          Export CSV
        </Button>
      </div>

      <div className="rounded-[12px] border border-light-gray overflow-hidden">
        <Table className="text-md text-black">
          <TableHeader className="bg-off-white">
            <TableRow className="border-b border-light-gray hover:bg-transparent">
              <TableHead className="py-[16px] px-[24px] text-medium-gray font-semibold h-auto">
                No.
              </TableHead>
              <TableHead className="py-[16px] px-[24px] text-medium-gray font-semibold h-auto w-[35%]">
                Assignment Name
              </TableHead>
              <TableHead className="py-[16px] px-[24px] text-medium-gray font-semibold h-auto">
                Due Date
              </TableHead>
              <TableHead className="py-[16px] px-[24px] text-medium-gray font-semibold h-auto text-center">
                Grade
              </TableHead>
              <TableHead className="py-[16px] px-[24px] text-medium-gray font-semibold h-auto w-[40%]">
                Comments
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade, index) => (
              <TableRow
                key={grade.id}
                className="border-b border-light-gray last:border-0 hover:bg-[#F2F3F5] transition-colors"
              >
                <TableCell className="py-[20px] px-[24px] text-medium-gray font-medium">
                  {index + 1}
                </TableCell>
                <TableCell className="py-[20px] px-[24px] font-semibold text-black">
                  {grade.assignmentName}
                </TableCell>
                <TableCell className="py-[20px] px-[24px] text-medium-gray font-medium">
                  {grade.dueDate}
                </TableCell>
                <TableCell className="py-[20px] px-[24px] font-bold text-center text-primary-indigo text-lg">
                  {grade.grade}
                </TableCell>
                <TableCell className="py-[20px] px-[24px] text-dark-slate italic">
                  "{grade.comments}"
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
