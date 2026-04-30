

type StatusChipProps = {
  status: "Submitted" | "Pending";
};

export const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  const isSubmitted = status === 'Submitted';
  
  return (
    <div className={`flex items-center rounded-full px-[15px] py-[4px] gap-[6px] h-fit ${isSubmitted ? 'bg-mint-green text-dark-green' : 'bg-cream text-dark-amber'}`}>
      <span className={`w-[9px] h-[9px] rounded-full shrink-0 ${isSubmitted ? 'bg-success-green' : 'bg-golden-amber'}`} />
      <span className="text-sm font-semibold tracking-[-0.005em]">{status}</span>
    </div>
  );
};
