import { ReactNode } from 'react';

export interface BankInterface {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

export interface ContextInterface {
  banks: BankInterface[] | undefined;
  removeBank: (name: string) => void;
  clearCache: () => void;
}

export interface ProviderInterface {
  children: ReactNode;
}

export interface BankCardInterface {
  bank: BankInterface;
}