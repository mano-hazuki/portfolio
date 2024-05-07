import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "../link";
import { SvgIcon } from "../svg-icon";
import styles from "./styles.module.css";

interface Props {
  href: string;
}

export function NavigationButton({ href }: Props) {
  return (
    <Link href={href} className={styles.button}>
      <SvgIcon icon={faChevronDown} className={styles.icon} />
    </Link>
  );
}
