import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
            <h1 className="font-bold text-3xl text-very-dark-blue mb-1 dark:text-white">Social Media Dashboard</h1>
            <p className="font-bold text-dark-grayish-blue dark:text-desaturated-blue">Total Followers: 23,004</p>
        </div>
        <Toggle />
    </header>
  );
};

export default Header;