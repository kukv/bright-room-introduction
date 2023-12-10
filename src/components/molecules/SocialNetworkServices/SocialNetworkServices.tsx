import { SocialNetworkServiceIcon } from "@/components/atoms/SocialNetworkService/SocialNetworkServiceIcon";
import styles from "./SocialNetworkServices.module.scss";

interface SocialNetworkServicesProps {}

export const SocialNetworkServices = ({
    ...props
}: SocialNetworkServicesProps) => {

    return(
        <>
            <span className={styles.storybookSocialNetworkServices}>
                <SocialNetworkServiceIcon icon="x" color="#000000" link="https://x.com/koki_nonaka" />
            </span>
            <span className={styles.storybookSocialNetworkServices}>
                <SocialNetworkServiceIcon icon="instagram" color="#000000" link="https://instagram.com/kukv" />
            </span>
            <span className={styles.storybookSocialNetworkServices}>
                <SocialNetworkServiceIcon icon="facebook" color="#000000" link="https://facebook.com/04x17" />
            </span>
            <span className={styles.storybookSocialNetworkServices}>
                <SocialNetworkServiceIcon icon="github" color="#000000" link="https://github.com/kukv" />
            </span>
        </>
    );
};
