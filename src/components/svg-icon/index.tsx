import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface Props extends FontAwesomeIconProps {
  className?: string;
}

export function SvgIcon({ icon, className, ...props }: Props) {
  return <FontAwesomeIcon icon={icon} className={className} {...props} />;
}
