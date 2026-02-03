import guaranteeIcon from "@/assets/icons/GuaranteeIcon.svg";

const GuaranteeIcon = ({ className = "size-6", alt = "guarantee" }) => {
  return <img src={guaranteeIcon} className={className} alt={alt} />;
};

export default GuaranteeIcon;