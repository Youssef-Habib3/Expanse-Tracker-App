import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 1, type: "spring", mass: 2 }}
    >
      <h1 className="text-2xl mb-4 font-bold text-center">Expanse Tracker</h1>

      <div className="font-bold">
        <h2>Your Balance</h2>
        <p className="text-xl">$200.00</p>
      </div>

      <div className="flex justify-center items-center border border-b-2 p-2 my-4">
        <div className="border-r px-10 text-center">
          <h3 className="font-mono">Income</h3>
          <p className="text-green-500 font-bold">$500.00</p>
        </div>

        <div className="px-10 text-center">
          <h3 className="font-mono">Expense</h3>
          <p className="text-red-500 font-bold">$500.00</p>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
