import { useEffect } from "react";
import AOS from "aos";
import MyLayout from "../../components/MyLayout";

const Urcheckin = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Urcheckin">
      <div>
        <p>
          hi
        </p>
      </div>
    </MyLayout>
  );
};

export default Urcheckin;
