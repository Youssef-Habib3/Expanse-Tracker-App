import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="my-4"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 1, type: "spring", mass: 2 }}
    >
      <h2 className=" font-bold border-b-2 pb-1 mb-1">Add a new transaction</h2>

      <div className="font-medium">
        <h3>Text</h3>
        <input
          type="text"
          placeholder="Enter text..."
          className="w-full border py-1 px-3 bg-black/5 outline-none rounded-md mt-1"
        />
      </div>

      <div className="font-medium my-2">
        <h3>Amount</h3>
        <h3>(Negative - Expanse - Positive - Income)</h3>
        <input
          type="number"
          placeholder="Enter amount..."
          className="w-full border py-1 px-3 bg-black/5 outline-none rounded-md mt-1"
        />
      </div>

      <Button
        className="w-full bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 hover:text-white"
        variant="default"
      >
        Add a transaction
      </Button>
    </motion.footer>
  );
};

export default Footer;
