import loading from "../../../assets/videos/loading.mp4";
import styles from "./Loading.module.scss";

const Loading = () => <video src={loading} className={styles.loading} playsInline autoPlay muted loop />;

export default Loading;
