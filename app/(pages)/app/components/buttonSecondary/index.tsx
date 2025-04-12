import { Button } from "@mui/material";
import { ReactNode } from "react";
import styles from './styles.module.css'

const ButtonSecondary = ({ children }: { children: ReactNode })=>{
    return (
        <Button 
        variant="contained" 
        className={styles.training_button}
      >
        {children}
      </Button>
    )
}

export default ButtonSecondary;