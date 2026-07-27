"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { BookingDialog } from "@/components/booking/booking-dialog";

type BookingContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  isScheduling: boolean;
  setIsScheduling: (value: boolean) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setIsScheduling(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, open, close, isScheduling, setIsScheduling }),
    [isOpen, open, close, isScheduling],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingDialog />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}
