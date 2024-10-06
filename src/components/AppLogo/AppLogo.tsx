import StarwarsLogo from '@/assets/StarwarsLogo';

const AppLogo = () => {
  return (
    <div className="flex justify-center">
      <StarwarsLogo width={200} height={100} className="my-log" />
    </div>
  );
};

export default AppLogo;
