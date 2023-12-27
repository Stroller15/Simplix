import Sidebar from "@/components/sidebar/sidebar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
  params: any;
}

const layout: FC<layoutProps> = ({ children, params }) => {
  return (
    <main
      className="flex 
      overflow-hidden
      h-screen 
      w-screen
      "
    >
      <Sidebar params={params} />
      <div
        className="darK:border-Neutrals-12/70
        border-l-[1px]
        w-full
        relative
        overflow-scroll
        "
      >
        {children}
      </div>
    </main>
  );
};

export default layout;
