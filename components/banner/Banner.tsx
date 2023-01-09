import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContainer}>
                <p>Don't miss our new Floral and Tropical Bottles, <span>SHOP NOW</span></p>
            </div>
        </div>
    );
}

export default Banner;