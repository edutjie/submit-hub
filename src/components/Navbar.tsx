
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfilePicture } from './ProfilePicture';
import { Button } from './Button';
import { USER_INITIALS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex justify-between px-4 md:px-8">
        <div className="max-w-[80%] mx-auto w-full py-4 flex items-center justify-between">
          <div className="flex items-center gap-[9px]">
            <ProfilePicture bgVariant="logo" letters="S" />
            <h2 className="text-h2 font-bold text-dark-indigo m-0 leading-none">SubmitHub</h2>
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
          
          <button className="lg:hidden p-2 text-dark-indigo transition-transform" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-[76px] left-0 w-full bg-white shadow-md z-40 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              <NavLink to="/active-assignments" onClick={() => setIsOpen(false)} className={({isActive}) => `text-xl transition-colors ${isActive ? 'font-semibold text-medium-purple' : 'font-medium text-medium-gray hover:text-dark-indigo'}`}>Active Assignments</NavLink>
              <NavLink to="/past-submissions" onClick={() => setIsOpen(false)} className={({isActive}) => `text-xl transition-colors ${isActive ? 'font-semibold text-medium-purple' : 'font-medium text-medium-gray hover:text-dark-indigo'}`}>Past Submissions</NavLink>
              <NavLink to="/grades" onClick={() => setIsOpen(false)} className={({isActive}) => `text-xl transition-colors ${isActive ? 'font-semibold text-medium-purple' : 'font-medium text-medium-gray hover:text-dark-indigo'}`}>Grades</NavLink>
              <div className="flex items-center gap-4 mt-2">
                <ProfilePicture bgVariant="user" letters={USER_INITIALS} />
                <Button variant={1} size="nav" onClick={() => setIsOpen(false)}>Logout</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
