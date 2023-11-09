import { Roboto } from "next/font/google";
import { Button } from "ui/button";

const inter = Roboto({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className=" grid grid-cols-12 gap-4">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </div>
    </main>
  );
}
