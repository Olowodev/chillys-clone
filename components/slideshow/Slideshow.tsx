import styles from './Slideshow.module.css'

const Slideshow = () => {
    return (
        <div className={styles.slideshow}>
            <div className={styles.slideshowCont}>
                <div className={styles.slide}>
                    <img src="/slide1.png" />
                    <div className={styles.slideContent}>
                    <div className={styles.slide1MainContent}>
                        <p>Reset.</p>
                        <p>Rehydrate.</p>
                        <p>Reuse.</p>
                    </div>
                    <div className={styles.slideButton}>
                        <p>SHOP NOW</p>
                    </div>
                    </div>
                    
                </div>
                <div style={{display: 'none'}} className={styles.slide}>
                    <img src="/slide2.png" />
                    <div className={styles.slideContent}>
                    <div>
                        <h1>CALLING</h1>
                        <h1>ALL</h1>
                    </div>
                    <div>
                        <h1>COFFEE</h1>
                        <h1>LOVERS</h1>
                    </div>
                    <div className={styles.slideButton}>
                        <p>SHOP THE COLLECTION</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Slideshow;