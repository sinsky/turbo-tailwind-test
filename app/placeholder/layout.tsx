import { FC, PropsWithChildren } from "react";
import "../../styles/output.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>appDir and tailwindcss</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
