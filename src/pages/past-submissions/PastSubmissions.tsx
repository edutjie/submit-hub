
import { AssignmentCard } from '../../components/AssignmentCard';
import { PAST_SUBMISSIONS } from './constants';

export const PastSubmissions = () => {
  return (
    <div className="w-full flex-1 max-w-[80%] mx-auto pt-[37px] pb-[103px] flex flex-col gap-[25px]">
      <h1 className="text-[37px] font-bold text-dark-indigo m-0 text-left">Past Submissions</h1>
      <div className="flex flex-col gap-[21px]">
        {PAST_SUBMISSIONS.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};
