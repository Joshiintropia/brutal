// layout/index.tsx
import { Box, Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./components/header";
import styles from "./styles.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className={styles.layoutContainer}>
      <Header />
      <Box className={styles.mainContent}>{children}</Box>
    </Box>
  );
};

export default Layout;
