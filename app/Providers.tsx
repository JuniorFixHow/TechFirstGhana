'use client';

import { SnackbarProvider } from "notistack";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SnackbarProvider anchorOrigin={{horizontal:'right', vertical:'top'}} >
    {children}
    </SnackbarProvider>;
}