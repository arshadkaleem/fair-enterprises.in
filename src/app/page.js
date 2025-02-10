import Image from "next/image";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-8">
      <Image
        src="/fe.png"
        alt="Vercel Logo"
        width={500}
        height={200}
        priority
      />
      <div className="text-center space-y-2">
        <div className="flex items-center gap-1"><AiFillMail />  info@fair-enterprises.in</div>
        <div className="flex items-center gap-1"><AiFillPhone/> +91 98922 56824</div>
      </div>
    </div>
  );
}
