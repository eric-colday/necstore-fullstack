import Banner from "../components/home/banner/Banner";
import Featured from "../components/home/featured/Featured";
import RecentsPosts from "../components/home/recentsPosts/RecentsPosts";
import FeaturedCategory from "../components/home/featuredCategory/FeaturedCategory";
import Slider from "../components/home/slider/Slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.accueil}>
      <Slider />
      <div className={styles.container}>
        <Featured />
        <FeaturedCategory/>
      </div>
      <Banner />
      <div className={styles.container}>
        <RecentsPosts />
      </div>
    </div>
  );
}
