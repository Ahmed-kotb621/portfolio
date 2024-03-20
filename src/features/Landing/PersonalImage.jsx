import image from "../../assets/image-p-2.png";
import styles from "../../components/navItem.module.css";
function PersonalImage() {
  return (
    <div className="w-[100%]">
      <img src={image} className="rounded-full drop-shadow  filter grayscale" />
    </div>
  );
}

export default PersonalImage;
