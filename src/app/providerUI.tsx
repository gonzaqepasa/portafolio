// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
function ProviderUI({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default ProviderUI;
