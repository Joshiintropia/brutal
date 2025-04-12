// pages/home/index.tsx
import styles from "./styles.module.css";
import Image from 'next/image';
import { Button } from '@mui/material';
import LogoCircle from '@/app/assets/logo-b-circle-cream.png'

import IconWellness from '@/app/assets/icons/Home_icon_calm_golden.png'
import IconTimer from '@/app/assets/icons/Home_icon_lifting_golden.png'
import IconLifing from '@/app/assets/icons/Home_icon_time_golden.png'
//portada
import IconBrutal from '@/app/assets/icons/Brutal__emblema_golden.png'
//ready
import ImageReady from '@/app/assets/img/home/Home-hero.jpg'
//difference
import ImageDifference from '@/app/assets/img/home/Home-difference.jpg'
//training
import ImageTraining from '@/app/assets/img/home/Home-training.jpg'
import ImageTrainingMan from '@/app/assets/img/home/Home-trainingMan.jpg'
import ImageTrainingWoman from '@/app/assets/img/home/Home-trainingWoman.jpg'

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Footer from "../components/footer";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={styles.container}>
       <div className={styles.heroSection}>
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.contentWrapper}>
          <div className={styles.halfBox}></div>
           <Image
              src={IconBrutal}
             alt="People working out on exercise bikes"
              width={754}
             height={673}
              className={styles.workoutImage}
            />
          <div className={styles.textContent}>
            <div className={styles.boxTitle}>
              <h1 className={styles.title}>
                TRANSFORM
                <br />
                YOURSELF
                <br />
                AT BRUTAL
              </h1>
            <button className={styles.learnMoreButton}>LEARN MORE</button>
            </div>
          </div>
        </div>
       </div>
       <div className={styles.containerGetReady}>
         <div className={styles.imageWrapper}>
        <Image
          src={ImageReady}
          alt="People working out on exercise bikes"
      
          className={styles.readyImage}
        />
         </div>
         <div className={styles.contentBox}>
        <div className={styles.logoWrapper}>
          <Image
            src={LogoCircle}
            alt="Brutal logo"
            width={40}
            height={40}
            className={styles.logo}
          />
        </div>
        <h2 className={styles.heading}>GET READY<br />TO FIND YOU</h2>
        <div className={styles.journeyText}>AND START JOURNEY NOW</div>
        <Button 
          variant="contained" 
          className={styles.signUpButton}
        >
          SIGN UP
        </Button>
          </div>
       </div>
        <div className={styles.difference_container}>
        <div className={styles.difference_content}>
        <div className={styles.difference_logo}>
          <Image
            src={IconBrutal}
            alt="Brutal logo"
            width={40}
            height={40}
            className={styles.difference_logoImage}
          />
        </div>
        <h2 className={styles.difference_title}>THE DIFFERENCE</h2>
        <p className={styles.difference_text}>
          60-minute classes, semi-personalized training, up to 10 different modalities in
          one club; studios that will inspire and motivate you to go one more time and
          luxury facilities so you have an unforgettable experience.
        </p>
        <Link 
            className={styles.difference_button} href={""}        >
          Learn More
        </Link>
      </div>
      <div className={styles.difference_imageWrapper}>
        <Image
          src={ImageDifference}
          alt="People working out"
          className={styles.difference_image}
        />
      </div>
         </div>
        <div className={styles.iconBanner_mainContainer}>
        <div className={styles.iconbanner_container}>
            <div className={styles.iconbanner_item}>
              <div className={styles.iconbanner_imageWrapper}>
                <Image
                  src={IconWellness}
                  alt="Meditation icon"
                  width={40}
                  height={42}
                  className={styles.iconbanner_icon}
                />
              </div>
              <p className={styles.iconbanner_text}>
                Membership benefits and promotions for partners.
              </p>
            </div>

            <div className={styles.iconbanner_item}>
              <div className={styles.iconbanner_imageWrapper}>
                <Image
                  src={IconTimer}
                  alt="Performance icon"
                  width={40}
                  height={42}
                  className={styles.iconbanner_icon}
                />
              </div>
              <p className={styles.iconbanner_text}>
                High performance programs for your personal development.
              </p>
            </div>

            <div className={styles.iconbanner_item}>
              <div className={styles.iconbanner_imageWrapper}>
                <Image
                  src={IconLifing}
                  alt="Kettlebell icon"
                  width={40}
                  height={42}
                  className={styles.iconbanner_icon}
                />
              </div>
              <p className={styles.iconbanner_text}>
                Quality workouts finely selected by experts for you.
              </p>
            </div>

            <div className={styles.iconbanner_item}>
              <div className={styles.iconbanner_imageWrapper}>
                <Image
                  src="/security-icon.png"
                  alt="Security icon"
                  width={40}
                  height={42}
                  className={styles.iconbanner_icon}
                />
              </div>
              <p className={styles.iconbanner_text}>
                Transactions are handled with bank-grade security.
              </p>
            </div>
        </div>
        </div>
        <div className={styles.training_mainContainer}>
        <section className={styles.training_container}>
          <div className={styles.training_header}>
            <div className={styles.training_headerContent}>
              <h2 className={styles.training_title}>OUR TRAINING</h2>
              <p className={styles.training_description}>
                60-minute classes, semi-personalized training, up to 10 different modalities in one club; studios that will inspire and 
                motivate you to go one more time and luxury facilities so you have an unforgettable experience.
              </p>
            </div>
            <div className={styles.training_navigation}>
              <button className={styles.training_navButton}>
                <ChevronLeft  />
              </button>
              <button className={styles.training_navButton}>
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className={styles.training_grid}>
            <div className={styles.training_card}>
              <Image
                src={ImageTraining}
                alt="Personal trainer working with client"
                width={400}
                height={300}
                className={styles.training_image}
              />
              <div className={styles.training_overlay}>
                <h3 className={styles.training_cardTitle}>
                  PERSONAL<br />TRAINER
                </h3>
              </div>
            </div>

            <div className={styles.training_card}>
              <Image
                src={ImageTrainingMan}
                alt="Personalized routine training"
                width={400}
                height={300}
                className={styles.training_image}
              />
              <div className={styles.training_overlay}>
                <h3 className={styles.training_cardTitle}>
                  PERSONALIZED<br />ROUTINE
                </h3>
              </div>
            </div>

            <div className={styles.training_card}>
              <Image
                src={ImageTrainingWoman}
                alt="Specialty classes"
                width={400}
                height={300}
                className={styles.training_image}
              />
              <div className={styles.training_overlay}>
                <h3 className={styles.training_cardTitle}>
                  SPECIALTY<br />CLASSES
                </h3>
              </div>
            </div>
          </div>

          <Button 
            variant="contained" 
            className={styles.training_button}
          >
            EXPLORE PACKAGES
          </Button>
        </section>
        </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
