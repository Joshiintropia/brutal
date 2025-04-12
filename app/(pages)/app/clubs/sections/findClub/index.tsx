import styles from "./styles.module.css";
import Image from "next/image";
import clubsBackground from "@/app/assets/img/clubs/clubs.jpg";
import { Clock, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className={styles.f_wrapper}>
      <div className={styles.f_container}>
        <div className={styles.f_locationsWrapper}>
          <Image src={""} alt={""}></Image>
          <p className={styles.textLocations}>OUR LOCATIONS</p>
        </div>
        <div className={styles.f_locationsWrapper}>
          <h1 className={styles.f_textClubs}>FIND YOUR CLUB</h1>
        </div>
        <div>
          <div className={styles.f_wrapperImage}>
            <div
              style={{
                background: `url(${clubsBackground.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              className={styles.f_Images}
            >
              <div className={styles.location_content}>
                <h2 className={styles.location_title}>BRUTAL CURICÓ</h2>
                <div className={styles.location_info}>
                  <div className={styles.info_item}>
                    {<MapPin size={20} />}
                    <span>Yungay 1065, 3341457 Curicó, Maule, Chile</span>
                  </div>
                  <div className={styles.info_item}>
                    <Clock size={20} />
                    <span>Open Now Closes at 9:00 pm</span>
                  </div>
                  <div className={styles.info_item}>
                    <Phone size={20} />
                    <span>+56 964 741 978</span>
                  </div>
                </div>
                <button className={styles.learn_more}>LEARN MORE</button>
              </div>
            </div>
            <div
              style={{
                background: `url(${clubsBackground.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              className={styles.f_Images}
            >
              <div className={styles.location_content}>
                <h2 className={styles.location_title}>BRUTAL RANCAGUA</h2>
                <div className={styles.location_info}>
                  <div className={styles.info_item}>
                    <MapPin size={20} />
                    <span>
                      Av. Libertador Gral. Bernardo OHiggins 837, Rancagua,
                      Chile
                    </span>
                  </div>
                  <div className={styles.info_item}>
                    <Clock size={20} />
                    <span>Open Now Closes at 9:00 pm</span>
                  </div>
                  <div className={styles.info_item}>
                    <Phone size={20} />
                    <span>+56 9 7979 0948</span>
                  </div>
                </div>
                <button className={styles.learn_more}>LEARN MORE</button>
              </div>
            </div>
          </div>
          <div className={styles.f_wrapperImageLarge}>
            <div
              style={{
                background: `url(${clubsBackground.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              className={styles.f_ImageLarge}
            >
              <div className={styles.location_content}>
                <h2 className={styles.coming_soon}>MORE COMING SOON...</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.f_wrapper_paragraph}>
          <p className={styles.f_textParagraph}>
            Train at any of our locations, all equipped with state-of-the-art
            facilities and a motivating environment. At each location, you ll
            have access to professional trainers and everything you need to
            achieve your goals. Find your nearest Brutal Gym and start your
            transformation today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
