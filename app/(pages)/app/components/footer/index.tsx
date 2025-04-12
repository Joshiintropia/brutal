import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import ImageBrutalIcon from "@/app/assets/icons/Brutal__emblema_white.png";

const primaryLinks = [
  { title: "About us", href: "/about-us" },
  { title: "Clubs", href: "/clubs" },
  { title: "Modalities", href: "/modalities" },
  { title: "Reserves", href: "/reserves" },
  { title: "Presale", href: "/presale" },
  { title: "Beginners", href: "/beginners" },
];

const secondaryLinks = [
  { title: "Terms and Conditions", href: "/terms" },
  { title: "Contracts", href: "/contracts" },
  { title: "FAQ", href: "/faq" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Personal Data Processing Policy", href: "/data-policy" },
];

const socialLinks = [
  { icon: <Instagram size={24} />, href: "https://instagram.com" },
  { icon: <Facebook size={24} />, href: "https://facebook.com" },
  { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
  { icon: <Youtube size={24} />, href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container}`}>
        <div
          className={`${styles.flex} ${styles.flex_column} ${styles.flex_gap_md} ${styles.flex_md_row} ${styles.flex_around}`}
        >
          {/* Brand Section */}
          <div
            className={`${styles.footer_section} ${styles.footer_section_brand} ${styles.text_center} ${styles.text_md_left}`}
          >
            <h2
              className={`${styles.heading} ${styles.heading_large} ${styles.margin_bottom_md}`}
            >
              ESCAPE <span className={styles.italic}>the</span>
              <br />
              ORDINARY
            </h2>
            <div>
              <input
                type="email"
                placeholder="Sign up to our newsletter"
                className={`${styles.input_newsletter} ${styles.margin_top_sm}`}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className={`${styles.nav_container}`}>
            {/* Primary Links */}
            <div
              className={`${styles.flex} ${styles.flex_column} ${styles.align_items_center} ${styles.md_align_items_start} ${styles.md_gap}`}
            >
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.link_base}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Secondary Links */}
            <div
              className={`${styles.flex} ${styles.flex_column} ${styles.align_items_center} ${styles.md_align_items_start} ${styles.md_gap}`}
            >
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.link_base}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>

          {/* Social Links and Logo Container */}
          <div className={`${styles.social_container}`}>
            <div className={`${styles.social_links}`}>
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className={styles.social_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className={styles.brand_logo}>
              <Image
                src={ImageBrutalIcon}
                alt={"IconoBrutal"}
                height={40}
                width={55}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`${styles.w_100} ${styles.flex} ${styles.flex_column} ${styles.margin_top_md} ${styles.padding_top_md} ${styles.footer_divider} ${styles.align_items_center}`}
        >
          <p className={styles.text_muted}>
            Brutal Gym © 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
