import { useEffect } from "react";
import AOS from "aos";
import MyLayout from "../../components/MyLayout";

const Snailer = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Snailer">
      <div>
        <p>
          hi
        </p>
      </div>
    </MyLayout>
  );
};

export default Snailer;
