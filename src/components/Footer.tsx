
import { TA_EMAILS, PROFESSOR_EMAIL, OFFICE_HOURS, DISCORD_URL, FORUM_URL } from '../constants';

export const Footer = () => {
  return (
    <footer className="mt-auto bg-off-white drop-shadow-[0_-1px_4px_rgba(0,0,0,0.15)] py-[40px]">
      <div className="max-w-[80%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {/* Col 1 */}
        <div className="flex flex-col text-left">
          <h2 className="text-[23px] font-bold text-dark-indigo mb-4">TA Emails</h2>
          <div className="flex flex-col space-y-[9px]">
            {TA_EMAILS.map((email) => (
              <span key={email} className="text-[17px] text-dark-slate">{email}</span>
            ))}
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col text-left">
          <h2 className="text-[23px] font-bold text-dark-indigo mb-4">Professor Contact</h2>
          <div className="flex flex-col space-y-[9px]">
            <span className="text-[17px] text-dark-slate">{PROFESSOR_EMAIL}</span>
            <span className="text-[18px] text-dark-slate">{OFFICE_HOURS}</span>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col text-left">
          <h2 className="text-[23px] font-bold text-dark-indigo mb-4">Discord / Forum</h2>
          <div className="flex flex-col space-y-[9px]">
            <a href={DISCORD_URL} className="text-[18px] text-medium-purple underline hover:text-bright-indigo transition-colors" target="_blank" rel="noreferrer">
              {DISCORD_URL}
            </a>
            <a href={`https://${FORUM_URL}`} className="text-[17px] text-dark-slate hover:text-dark-indigo transition-colors" target="_blank" rel="noreferrer">
              {FORUM_URL}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
