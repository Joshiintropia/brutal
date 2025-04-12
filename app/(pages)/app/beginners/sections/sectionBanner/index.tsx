import styles from './styles.module.css';
import clubsBackground from '@/app/assets/img/modalities/brutal_banner.jpg'; 
import Image from 'next/image';
import IconB from '@/app/assets/icons/Brutal__emblema_sandbeige.png'

const Index = () => {
    return (
        <div 
            style={{
                background: `url(${clubsBackground.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className={styles.bannerSection}
        >   
            <div className={styles.wrapperInfo}>
            <Image src={IconB} alt={''}  width={65} height={50} style={{marginBottom:'20px'}}/>
            <h1 className={styles.bannerTitle}>BEGINNING AT BRUTAL</h1>
            </div>
        </div>
    );
};

export default Index;