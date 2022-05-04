interface Props {
  children: React.ReactNode;
}

export const SubLayout = ({ children }: Props) => {
  return (
    <div className="flex overflow-auto flex-col justify-center items-center last:pb-24 h-full">
      {children}
    </div>
  );
};
