import { addWarehouse } from "@/actions/add-warehouse";

export default function Home() {
  const handleClick = () => {
    try {
      addWarehouse();
    } catch (err) {
      console.error(err || "Error");
    } finally {
      console.log("Success");
    }
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={() => handleClick}>Try Me!</button>
    </div>
  );
}
