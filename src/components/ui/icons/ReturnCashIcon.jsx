import returnCashIcon from "@/assets/icons/ReturnCashIcon.svg";

const ReturnCashIcon = ({ className = "size-6", alt = "returnCash" }) => {
  return <img src={returnCashIcon} className={className} alt={alt} />;
};

export default ReturnCashIcon;