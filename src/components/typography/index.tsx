import { classnames } from "@/lib/classnames";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  variant: "h1" | "h2" | "h3" | "body1" | "body2";
  paragraph?: boolean;
  align?: "left" | "right" | "center";
  wrap?: "wrap" | "nowrap" | "balance" | "pretty";
  children: React.ReactNode;
}

export function Typography({
  className = "",
  variant,
  paragraph = false,
  align = "left",
  wrap = "nowrap",
  children,
}: Props) {
  switch (variant) {
    case "h1": {
      return <h1 className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</h1>;
    }
    case "h2": {
      return <h2 className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</h2>;
    }
    case "h3": {
      return <h3 className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</h3>;
    }
    case "body1": {
      if (paragraph) {
        return <p className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</p>;
      } else {
        return <span className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</span>;
      }
    }
    case "body2": {
      if (paragraph) {
        return <p className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</p>;
      } else {
        return <span className={classnames(className, styles[variant], styles[align], styles[wrap])}>{children}</span>;
      }
    }
  }
}
