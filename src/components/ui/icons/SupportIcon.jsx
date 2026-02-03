import  supportIcon  from "@/assets/icons/SupportIcon.svg"
const SupportIcon = ({ className = "size-6", alt = "support" }) => {
    return <img src={supportIcon} className={className} alt={alt} />;
  };
  
  export default SupportIcon;