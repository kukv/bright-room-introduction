import { CopyLight } from "@/components/atoms/Copylight/CopyLight";
import styles from "./Footer.module.scss";
import { SocialNetworkServices } from "@/components/molecules/SocialNetworkServices/SocialNetworkServices";

interface FooterProps {}

export const Footer = ({...props}: FooterProps) => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.storybookFooterSocial}>
                <SocialNetworkServices />
            </div>
            <div className={styles.storybookFooterCopyLight}>
                <CopyLight name="koki nonaka" link="https://github.com/kukv"/>
            </div>
        </footer>
    );
};
