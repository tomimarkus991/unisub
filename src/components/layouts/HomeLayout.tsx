interface Props {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-2 grid-rows-4">
      <div>{children}</div>
    </div>
  );
};
