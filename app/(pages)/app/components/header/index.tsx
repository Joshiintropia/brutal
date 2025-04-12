"use client";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EntranceAnimation from "@/app/styles/animations";
import styled from "styled-components";
import { COLORS } from "@/app/constants/colors";
import { usePathname } from "next/navigation";
import LogoIcon from "@/app/assets/bttr-logo-header.png"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Content = styled(Box)`
  height: calc(100vh - 78px);
  position: sticky;
  display: contents;
`;

const ListIcons = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  & li {
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
interface ContentIconProps {
  $active: boolean;
}

const ContentIcon = styled(Box)<ContentIconProps>`
  background-color: ${({ $active }) =>
    $active ? COLORS.WHITE : "transparent"} !important;
  padding: 5px;
  border-radius: 4px;
`;
const Label = styled(Typography)<ContentIconProps>`
  color: ${({ $active }) => ($active ? 'BLACK' : "WHITE")} !important;
  font-family: var(--font-montreal-medium), sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 24px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
`;

const Index = () => {
  const pathname = usePathname();

  const menuOptions: any = {
    clubsOption: {
      label: "CLUBS",
      tab: "clubs",
      path: "/app/clubs",
    },
    modalitiesOption: {
      label: "MODALITIES",
      tab: "modalities",
      path: "/app/modalities",
    },
    presaleOption: {
      label: "PRESALE",
      tab: "presale",
      path: "/app/presale",
    },
    bookingOption: {
      label: "BOOK A CLASS",
      tab: "booking",
      path: "/app/booking",
    },
    beginnersOption: {
      label: "BEGINNERS",
      tab: "beginners",
      path: "/app/beginners",
    },
  };

  const userOption: any = {
    cart: {
      label: "",
      icon: ShoppingBagOutlinedIcon,
      alt: "icon-cart",
      tab: "cart",
      path: "/app/cart",
    },
    profile: {
      label: "",
      icon: AccountCircleOutlinedIcon,
      alt: "icon-profile",
      tab: "profile",
      path: "/app/profile",
    },
  };
  const styleTransparentRouted = ["home"];
  const styleRouted = [
    "clubs",
    "modalities",
    "presale",
    "booking",
    "beginners",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isStyleRouted = styleRouted.some((route) => pathname.includes(route));
  const isStyleTransparent = styleTransparentRouted.some((route) =>
    pathname.includes(route)
  );
  const className = isStyleRouted
    ? styles.black
    : isStyleTransparent && styles.transparent;
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className={`${styles.list} ${className}`}>
    {/* Logo */}
    <Link href={{ pathname: "/app/home" }}>
      <Image
        src={LogoIcon}
        width={110}
        height={37.66}
        alt="Logotipo"
        priority={true}
        style={{ objectFit: "contain" }}
      />
    </Link>

    {/* Desktop Menu */}
    <div className={styles.desktop_menu}>
      <Stack direction="row" spacing={2}>
        {Object.values(menuOptions).map((icon: any) => (
          <li key={icon.label}>
            <EntranceAnimation>
              <Link
                id={`item-${icon.label?.toLocaleLowerCase()}`}
                href={{ pathname: icon.path }}
                prefetch={false}
                replace
              >
                <ContentIcon $active={pathname.includes(icon?.tab)}>
                  <Label $active={pathname.includes(icon?.tab)}>
                    {icon.label}
                  </Label>
                </ContentIcon>
              </Link>
            </EntranceAnimation>
          </li>
        ))}
      </Stack>

    </div>
    <div className={styles.user_icons}>
        {Object.values(userOption).map((icon: any) => (
          <li key={icon.alt}>
            <Link href={{ pathname: icon.path }} prefetch={false} replace>
              <ContentIcon $active={pathname.includes(icon?.tab)}>
                <icon.icon
                  style={{
                    fontSize: "24px",
                    color: pathname.includes(icon?.tab) ? "black" : "white",
                  }}
                  alt={icon.alt}
                />
              </ContentIcon>
            </Link>
          </li>
        ))}
      </div>
    {/* Mobile Menu Button */}
    <button className={styles.hamburger_button} onClick={toggleMenu}>
      {isMenuOpen ? (
        <CloseIcon sx={{ fontSize: 28 }} />
      ) : (
        <MenuIcon sx={{ fontSize: 28 }} />
      )}
    </button>

    {/* Mobile Menu */}
    <div className={`${styles.mobile_menu} ${isMenuOpen ? styles.active : ""}`}>
      <nav className={styles.mobile_nav_items}>
        {Object.values(menuOptions).map((icon: any, index: number) => (
          <div
            key={icon.label}
            className={styles.menu_item}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Link
              href={{ pathname: icon.path }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Label $active={pathname.includes(icon?.tab)}>
                {icon.label}
              </Label>
            </Link>
          </div>
        ))}
        <div className={styles.user_icons}>
          {Object.values(userOption).map((icon: any) => (
            <Link
              key={icon.alt}
              href={{ pathname: icon.path }}
              onClick={() => setIsMenuOpen(false)}
            >
              <icon.icon
                style={{
                  fontSize: "24px",
                  color: "white",
                }}
                alt={icon.alt}
              />
            </Link>
          ))}
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Index;
