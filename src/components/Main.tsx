import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <h2 className="font-bold border-b-2 pb-1 mb-2">History</h2>

      <section className="flex justify-between items-center border border-b-2 py-1 px-3 font-medium relative mb-2">
        <p>Cash</p>
        <p className="mony">+500</p>
      </section>
    </motion.main>
  );
};

export default Main;
