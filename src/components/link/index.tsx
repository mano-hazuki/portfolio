import NextLink from "next/link";

interface Props {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Link({ href, replace = false, scroll = true, prefetch = true, className = "", children }: Props) {
  return (
    <NextLink href={href} replace={replace} scroll={scroll} prefetch={prefetch} className={className}>
      {children}
    </NextLink>
  );
}
