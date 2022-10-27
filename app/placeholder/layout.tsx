import { FC, PropsWithChildren } from "react";
import "../../styles/output.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <head></head>
      <body className="m-8">{children}</body>
    </html>
  );
};

export default RootLayout;
