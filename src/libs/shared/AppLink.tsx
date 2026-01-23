import Link from "next/link";

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const AppLink = ({ href, children, ...rest }: AppLinkProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
};
