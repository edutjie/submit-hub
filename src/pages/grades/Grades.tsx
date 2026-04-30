
import { GradesTable } from '../../components/GradesTable';
import { GRADES_DATA } from './constants';

export const Grades = () => {
  return (
    <div className="w-full flex-1 max-w-[80%] mx-auto pt-[37px] pb-[103px] flex flex-col gap-[25px]">
      <h1 className="text-[37px] font-bold text-dark-indigo m-0 text-left">Grades</h1>
      <GradesTable grades={GRADES_DATA} />
    </div>
  );
};
