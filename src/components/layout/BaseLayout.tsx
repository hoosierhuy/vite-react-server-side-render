import { FC, useEffect, useState } from "react";
import { BaseLayoutProps } from "./BaseLayout.types";
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar';

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  const [hyrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  
  if (!hyrated) {
    return null;
  }

  return (
    <>
      <HeaderNavigationBar />
      <section className="pages">{children}</section>
    </>
  )
}

export default Layout;