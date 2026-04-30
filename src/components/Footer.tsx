import {
  TA_EMAILS,
  PROFESSOR_EMAIL,
  OFFICE_HOURS,
  DISCORD_URL,
  FORUM_URL,
} from "../constants";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-off-white drop-shadow-[0_-1px_4px_rgba(0,0,0,0.15)] py-[40px]">
      <div className="max-w-[80%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Col 1 */}
        <div className="flex flex-col text-left">
          <h2 className="text-2xl font-bold text-dark-indigo mb-4">
            Teaching Assistant Emails
          </h2>
          <div className="flex flex-col space-y-[9px]">
            {TA_EMAILS.map(email => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="text-md text-dark-slate hover:text-dark-indigo transition-colors"
              >
                {email}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col text-left">
          <h2 className="text-2xl font-bold text-dark-indigo mb-4">
            Professor Contact
          </h2>
          <div className="flex flex-col space-y-[9px]">
            <a
              href={`mailto:${PROFESSOR_EMAIL}`}
              className="text-md text-dark-slate hover:text-dark-indigo transition-colors"
            >
              {PROFESSOR_EMAIL}
            </a>
            <span className="text-lg text-dark-slate">
              Office Hours: {OFFICE_HOURS}
            </span>
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col text-left">
          <h2 className="text-2xl font-bold text-dark-indigo mb-4">
            Course Discord/Forum
          </h2>
          <div className="flex flex-col space-y-[9px]">
            <a
              href={DISCORD_URL}
              className="text-lg text-medium-purple underline hover:text-bright-indigo transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Join NLP 2026 Discord
            </a>
            <a
              href={`https://${FORUM_URL}`}
              className="text-md text-dark-slate hover:text-dark-indigo transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Forum: {FORUM_URL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
