import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import type { Assignment } from "../types";
import { StatusChip } from "./StatusChip";
import { Button } from "./Button";
import { UploadDrawer } from "./UploadDrawer";

export const AssignmentCard = ({ assignment }: { assignment: Assignment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isSubmitted = assignment.status === "Submitted";

  return (
    <div className="w-full bg-white border-[2px] border-light-gray rounded-[20px] p-[32px] flex flex-col transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-[32px]">
        {/* On mobile, StatusChip moves here */}
        <div className="flex lg:hidden w-full">
          <StatusChip status={assignment.status} />
        </div>

        <div className="flex flex-col text-left w-full lg:max-w-[60%]">
          <h3 className="text-h3 font-semibold text-black mb-[10px]">
            {assignment.name}
          </h3>
          <div className="flex flex-col space-y-[10px] text-md font-semibold text-medium-gray">
            <span>Due: {assignment.dueDate}</span>
            <p className="leading-[145%]">{assignment.description}</p>
          </div>
        </div>

        {/* Interaction section */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start sm:items-center gap-[22px] shrink-0 w-full lg:w-auto">
          {/* On desktop, StatusChip stays here */}
          <div className="hidden lg:flex">
            <StatusChip status={assignment.status} />
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row">
            {isSubmitted ? (
              <Button
                variant={2}
                className="w-full sm:w-auto justify-center"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Hide Submission" : "View Submission"}
              </Button>
            ) : (
              <UploadDrawer>
                <Button variant={1} className="w-full sm:w-auto justify-center">
                  Upload Files
                </Button>
              </UploadDrawer>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && isSubmitted && assignment.submittedFiles && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <hr className="my-[32px] border-t-[2px] border-light-gray" />
            <div className="flex flex-col text-left">
              <h3 className="text-h3 font-semibold text-black mb-[20px]">
                Submitted Files
              </h3>
              <div className="flex flex-col gap-[16px]">
                {assignment.submittedFiles.map(file => (
                  <button
                    key={file.name}
                    className="flex justify-between w-full p-[16px] xl:w-[400px] border border-light-gray rounded-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] bg-white hover:bg-off-white transition-colors"
                  >
                    <span className="text-md font-medium text-black truncate pr-4">
                      {file.name}
                    </span>
                    <div className="flex items-center gap-[10px] shrink-0">
                      <span className="text-md text-medium-gray">
                        {file.size}
                      </span>
                      <Download size={20} className="text-primary-indigo" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
