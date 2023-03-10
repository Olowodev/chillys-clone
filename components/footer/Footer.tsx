import {BsChevronDown} from 'react-icons/bs'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerCont}>
                <div className={styles.upperFooter}>
                    <div className={styles.upperLeft}>
                        <p>Sign up for Chilly's news, launches and special offers - straight to your inbox</p>
                        <div>
                            <input className={styles.footerInput} />
                            <div>

                            </div>
                        </div>
                        <div className={styles.socials}>
                            <div>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" ><path d="M9 1c4.418 0 8 3.604 8 8.049 0 4.017-2.925 7.347-6.75 7.951v-5.624h1.864l.355-2.327h-.008L12.47 9H10.25V7.54c0-.637.31-1.258 1.304-1.258h1.008v-2s-.915-.157-1.79-.157c-1.828 0-3.022 1.107-3.022 3.112V9H5.719v2.376H7.75V17C3.925 16.396 1 13.066 1 9.049 1 4.604 4.582 1 9 1z"></path></svg>
                            </div>
                            <div>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM5.705 1.05c.855-.037 1.126-.047 3.3-.047L9.01 1c2.171 0 2.443.009 3.3.05.663.013 1.32.139 1.941.372.534.2 1.018.516 1.417.923.41.398.723.884.916 1.422a5.86 5.86 0 01.372 1.942c.037.855.047 1.126.047 3.3s-.01 2.446-.047 3.3a5.875 5.875 0 01-.372 1.941 4.1 4.1 0 01-2.339 2.339 5.829 5.829 0 01-1.942.372c-.855.038-1.125.047-3.3.047s-2.447-.009-3.3-.047a5.855 5.855 0 01-1.942-.372 4.109 4.109 0 01-2.342-2.342 5.856 5.856 0 01-.372-1.941C1.01 11.451 1 11.177 1 9.006s.01-2.443.047-3.3c.013-.664.139-1.32.371-1.942a4.124 4.124 0 012.345-2.342 5.857 5.857 0 011.942-.372zm6.532 1.442c-.841-.038-1.094-.047-3.232-.047h-.003c-2.139 0-2.392.009-3.233.047a4.388 4.388 0 00-1.486.275 2.657 2.657 0 00-1.517 1.52c-.176.475-.27.978-.275 1.485-.037.841-.047 1.099-.047 3.233 0 2.134.01 2.389.047 3.234.006.507.1 1.01.275 1.485.13.347.335.66.6.919.257.266.571.472.919.6.476.177.978.27 1.486.275.841.038 1.1.047 3.233.047s2.389-.009 3.233-.047a4.387 4.387 0 001.486-.275c.347-.13.66-.335.919-.6.266-.258.471-.572.6-.919.177-.475.27-.978.275-1.485.038-.842.047-1.101.047-3.234s-.009-2.389-.047-3.233a4.374 4.374 0 00-.275-1.485 2.513 2.513 0 00-.6-.92 2.478 2.478 0 00-.919-.6 4.37 4.37 0 00-1.486-.275zm1.84 2.774A.96.96 0 1012.48 4.2a.96.96 0 001.596 1.066zm-5.072-.37a4.112 4.112 0 10-.002 8.224 4.112 4.112 0 00.002-8.224zm0 6.779a2.667 2.667 0 110-5.333 2.667 2.667 0 010 5.333z"></path></svg>
                            </div>
                            <div>
                            <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6.032 15c6.037 0 9.34-4.617 9.34-8.621 0-.131 0-.262-.01-.392A6.418 6.418 0 0017 4.42c-.6.245-1.235.406-1.885.477a3.097 3.097 0 001.443-1.676 6.921 6.921 0 01-2.085.735c-1.017-.998-2.634-1.243-3.944-.596-1.31.647-1.986 2.024-1.65 3.36-2.64-.123-5.099-1.273-6.765-3.166-.872 1.384-.427 3.155 1.016 4.045a3.468 3.468 0 01-1.49-.38v.039c0 1.442 1.102 2.684 2.634 2.97-.484.122-.99.14-1.483.052.43 1.234 1.663 2.08 3.067 2.104a6.945 6.945 0 01-4.077 1.3c-.26 0-.522-.015-.781-.044a9.867 9.867 0 005.032 1.359"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.upperRight}>
                        <div>
                            <p>Help Centre</p>
                            <p>Careers</p>
                            <p>Shipping</p>
                            <p>Returns</p>
                            <p>Wholesale</p>
                        </div>
                        <div>
                            <p>Personalise</p>
                            <p>Refreshed</p>
                            <p>Modern Slavery Act</p>
                            <p>Student Discounts</p>
                            <p>Press</p>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerFooter}>
                    <div className={styles.lowerLeft}>
                        <div>
                            <p>UNITED KINGDOM</p>
                        <BsChevronDown />
                        </div>
                        <p>PRIVACY</p>
                        <p>TERMS</p>
                    </div>
                    <div className={styles.lowerRight}>
                        <div>
                            <img src='/applepay.png' />
                        </div>
                        <div>
                            <img src='/googlepay.png' />
                        </div>
                        <div>
                            <img src='/mastercard.png' />
                        </div>
                        <div>
                            <img src='/paypal.png' />
                        </div>
                        <div>
                            <img src='/visa.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;