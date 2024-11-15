import Image from "next/image";
import activeAssistantIcon from "@/img/siriactive2.gif"
import notActiveAssistantIcon from "@/img/sirinonactive.jpg"

function Recorder() {
  return (
    <div className="flex items-center
     justify-center text-white">
        <Image
            src={activeAssistantIcon} 
            width={350}
            height={350}
            priority
            alt="Recording"
        />
    </div>
    );
}

export default Recorder