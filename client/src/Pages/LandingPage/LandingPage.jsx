import styles from "./LandingPage.module.css";
import { useSelector } from "react-redux";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import SubHeader from "../../Components/SubHeader/SubHeader";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";

const LandingPage = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  const mobiles = products.filter((elem) => elem.category === "mobile");
  const homes = products.filter((elem) => elem.category === "home");
  const appliances = products.filter((elem) => elem.category === "appliance");
  const babycares = products.filter((elem) => elem.category === "babycare");
  const beauty = products.filter((elem) => elem.category === "beauty");
  const sports = products.filter((elem) => elem.category === "sports");

  const bestMobiles = mobiles.splice(
    Math.floor(Math.random() * (mobiles.length - 10)),
    10
  );
  const bestHomes = homes.splice(
    Math.floor(Math.random() * (homes.length - 10)),
    10
  );
  const bestAppliances = appliances.splice(
    Math.floor(Math.random() * (appliances.length - 10)),
    10
  );
  const bestBabycares = babycares.splice(
    Math.floor(Math.random() * (babycares.length - 10)),
    10
  );
  const bestBeauty = beauty.splice(
    Math.floor(Math.random() * (beauty.length - 10)),
    10
  );
  const bestSports = sports.splice(
    Math.floor(Math.random() * (sports.length - 10)),
    10
  );
  return (
    <div className={styles.container}>
      <SubHeader />
      <BannerSlider />
      <ProductSlider
        products={bestMobiles}
        heading={"Mobiles"}
        link={"/category/mobile"}
      />
      <ProductSlider
        products={bestHomes}
        heading={"Homes"}
        link={"/category/home"}
      />
      <ProductSlider
        products={bestAppliances}
        heading={"Applicances"}
        link={"/category/appliance"}
      />
      <ProductSlider
        products={bestBabycares}
        heading={"BabyCares"}
        link={"/category/babycare"}
      />
      <ProductSlider
        products={bestBeauty}
        heading={"Beauty"}
        link={"/category/beauty"}
      />
      <ProductSlider
        products={bestSports}
        heading={"Sports"}
        link={"/category/sports"}
      />
    </div>
  );
};

export default LandingPage;
