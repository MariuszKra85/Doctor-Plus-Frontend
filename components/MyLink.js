/* eslint-disable react/prop-types */
import Link from 'next/link';
import { forwardRef } from 'react';

const MyLink = (
  { href, shallow, replace, children, passHref, className },
  // eslint-disable-next-line no-unused-vars
  ref
) =>
  href ? (
    <Link
      href={href}
      passHref={passHref}
      scroll={false}
      shallow={shallow}
      replace={replace}
      className={className}
    >
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );

export default forwardRef(MyLink);
