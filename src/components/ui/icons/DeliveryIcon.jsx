import deliveryIcon from "@/assets/icons/DeliveryIcon.svg";

const DeliveryIcon = ({ className = "size-6", alt = "delivery" }) => {
  return <img src={deliveryIcon} className={className} alt={alt} />;
};

export default DeliveryIcon;