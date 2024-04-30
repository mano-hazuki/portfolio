import styles from "./styles.module.css";
import light from "/public/images/background/light.jpg";
import dark from "/public/images/background/dark.jpg";
import Image from "next/image";
import { classnames } from "@/lib/classnames";

interface Props {
  className?: string;
  color: "light" | "dark";
}

export function Background({ className = "", color }: Props) {
  const src = color == "light" ? light : dark;
  return (
    <Image
      className={classnames(className, styles.background)}
      src={src}
      alt=""
      placeholder="blur"
      fill={true}
      priority={true}
      quality={100}
    />
  );
}
