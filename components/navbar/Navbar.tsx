import {BsChevronDown, BsBag} from 'react-icons/bs'
import {CiSearch} from 'react-icons/ci'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarCont}>
                <div className={styles.navLeft}>
                    <div>
                        <a>SHOP</a>
                        <BsChevronDown />
                    </div>
                    <div>
                        <a>DISCOVER</a>
                        <BsChevronDown />
                    </div>
                    <a>CO-BRAND</a>
                </div>
                <div className={styles.navCenter}>
                    <div>
                    <svg viewBox="0 0 21 34" xmlns="http://www.w3.org/2000/svg" ><title>Chilly’s Logo Icon</title><path d="M4.49947 4.41002C5.17627 3.75041 5.03853 2.54577 4.19074 1.71953C3.34295 0.893293 2.10688 0.759058 1.43007 1.41866C0.75326 2.07826 0.890997 3.28291 1.73879 4.10915C2.58658 4.93539 3.82265 5.07078 4.49947 4.41002ZM20.0269 19.2048C20.0269 17.0003 19.4701 14.8063 18.4346 12.8471C17.347 10.7908 15.7298 9.02839 13.7682 7.7277C13.3301 7.43725 11.435 6.15044 9.58978 6.06018C8.29435 5.99654 7.29576 6.37378 6.45034 7.08777C5.9362 7.52172 4.13375 9.44383 5.64648 12.4375C7.01791 15.1523 7.50711 17.1473 7.51779 19.2036C7.53561 22.4091 6.40047 25.3437 4.51134 27.679C3.98177 28.3339 2.62339 29.6161 1.29115 30.6969C0.886247 31.0256 0.851813 31.6296 1.53694 31.9374C2.67327 32.4478 4.88536 33.4985 8.68381 32.7232C10.719 32.3089 12.6959 31.4861 14.3572 30.2618C16.1477 28.9426 17.6355 27.2149 18.6151 25.2442C19.5472 23.3719 20.0269 21.2866 20.0269 19.2048Z"></path></svg>
                    <svg viewBox="0 0 92 34" xmlns="http://www.w3.org/2000/svg" ><title>Chilly’s Logo Text</title><path d="M9.25802 11.4641C6.26944 11.4641 4.11907 13.8688 4.11907 17.0233C4.11907 20.3329 6.35963 22.5605 9.32574 22.5605C11.7706 22.5605 13.0838 21.2366 13.6265 19.6929L16.2292 20.5319C15.1202 23.3555 12.8107 25.0322 9.27946 25.0322C4.68424 25.0322 1.35715 21.8777 1.35715 17.0025C1.35715 12.347 4.61651 8.97266 9.23431 8.97266C12.5839 8.97266 15.2329 10.6274 16.2969 13.782L13.6478 14.6209C13.0601 12.744 11.6577 11.4641 9.25802 11.4641Z"></path> <path d="M34.4335 9.30078H37.1953V24.7436H34.4335V9.30078Z"></path> <path d="M40.9788 9.30078H43.7406V22.273H49.3071V24.7436H40.9799V9.30078H40.9788Z"></path> <path d="M52.0273 9.30078H54.7891V22.273H60.3556V24.7436H52.0284V9.30078H52.0273Z"></path> <path d="M66.9223 24.7436H64.1603V18.7204L58.6592 9.30078H61.693L65.5414 16.0299L69.4122 9.30078H72.4448L66.9223 18.7204V24.7436Z"></path> <path d="M19.0041 9.30078H21.7659V15.7765H28.0698V9.30194L30.8316 9.30078V24.7447H28.0698V18.2702H21.7659V24.7447H19.0041V9.30078Z"></path> <path d="M78.964 20.6517L81.5354 19.9261C82.0782 21.707 83.0017 22.6085 85.0107 22.6085C86.793 22.6085 88.0787 21.861 88.0787 20.4098C88.0787 19.3765 87.4251 18.6069 84.9882 18.1892C81.4225 17.5516 79.4145 16.2104 79.4145 13.5708C79.4145 10.8884 81.716 9.01953 84.9882 9.01953C87.8981 9.01953 89.8385 10.5806 90.5157 13.219L87.9433 13.9226C87.5154 12.3395 86.7253 11.4381 84.9882 11.4381C83.3403 11.4381 82.1674 12.1417 82.1674 13.5708C82.1674 14.7801 83.3403 15.2198 85.4848 15.6595C89.0946 16.3631 90.8317 17.7483 90.8317 20.4087C90.8317 23.223 88.2593 25.027 85.0107 25.027C81.8966 25.027 79.7305 23.51 78.964 20.6517Z"></path> <path d="M77.1827 11.1616V9.30078H74.6863V14.139C75.2598 14.0812 76.0314 13.8324 76.4255 13.4563C77.2391 12.6798 77.1837 11.5631 77.1827 11.1616Z"></path></svg>
                    </div>
                </div>
                <div className={styles.navRight}>
                    <a>REFER A FRIEND</a>
                    <div>
                        <CiSearch />
                    </div>
                    <div>
                        <BsBag />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;