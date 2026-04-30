

type ProfilePictureProps = {
  size?: number;
  bgVariant: 'logo' | 'user';
  letters: string;
  padding?: number;
};

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ bgVariant, letters }) => {
  if (bgVariant === 'logo') {
    return (
      <div className="flex items-center justify-center w-[43px] h-[43px] rounded-full bg-gradient-to-tr from-medium-purple to-primary-indigo text-white text-lg font-bold p-[8px]">
        {letters}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-[51px] h-[51px] rounded-full bg-lavender text-primary-indigo text-lg font-bold p-[10px]">
      {letters}
    </div>
  );
};
