
import { NavLink } from 'react-router-dom';
import { ProfilePicture } from './ProfilePicture';
import { Button } from './Button';
import { USER_INITIALS } from '../constants';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-between px-4 md:px-8">
      <div className="max-w-[80%] mx-auto w-full py-4 flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <ProfilePicture bgVariant="logo" letters="S" />
          <h2 className="text-[30px] font-bold text-dark-indigo m-0 leading-none">SubmitHub</h2>
        </div>
        
        <div className="hidden lg:flex items-center gap-[30px]">
          <NavLink to="/active-assignments" className={({isActive}) => `text-xl transition-colors ${isActive ? 'font-semibold text-medium-purple' : 'font-medium text-medium-gray hover:text-dark-indigo'}`}>Active Assignments</NavLink>
          <NavLink to="/past-submissions" className={({isActive}) => `text-xl transition-colors ${isActive ? 'font-semibold text-medium-purple' : 'font-medium text-medium-gray hover:text-dark-indigo'}`}>Past Submissions</NavLink>
          <NavLink to="/grades" className={({isActive}) => `text-xl transition-colors ${isActive ? 'font-semibold text-medium-purple' : 'font-medium text-medium-gray hover:text-dark-indigo'}`}>Grades</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-[15px]">
          <ProfilePicture bgVariant="user" letters={USER_INITIALS} />
          <Button variant={1} size="nav">Logout</Button>
        </div>
        
        <button className="lg:hidden p-2 text-dark-indigo">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};
