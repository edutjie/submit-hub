
import { AssignmentCard } from '../../components/AssignmentCard';
import { ACTIVE_ASSIGNMENTS } from './constants';

export const ActiveAssignments = () => {
  return (
    <div className="w-full flex-1 max-w-[80%] mx-auto pt-[37px] pb-[103px] flex flex-col gap-[25px]">
      <h1 className="text-h1 font-bold text-dark-indigo m-0 text-left">Active Assignments</h1>
      <div className="flex flex-col gap-[21px]">
        {ACTIVE_ASSIGNMENTS.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};
