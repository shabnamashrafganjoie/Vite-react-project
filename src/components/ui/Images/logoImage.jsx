import  logoImage  from "@/assets/images/Logo.png"
const LogoImage = ({ className = "size-6", alt = "logo" }) => {
    return <img src={logoImage} className={className} alt={alt} />;
  };
  
  export default LogoImage;