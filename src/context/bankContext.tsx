import React from 'react'
import { BankInterface, ContextInterface, ProviderInterface } from '../interfaces/bankInterface'
import { getBanks } from '../services/bankService';

export const BankContext = React.createContext<ContextInterface | undefined>(undefined);

export const BankProvider = ({ children }: ProviderInterface) => {

  const [banks, setBanks] = React.useState<BankInterface[] | undefined>(undefined);

  const getFromLocalStorage = () => {
    const banks = localStorage.getItem('banks');
    if (banks) {
      setBanks(banks ? JSON.parse(banks) : []);
    }
    return !!banks;
  }

  const getFromAPI = async () => {
      const banks = await getBanks();
      setBanks(banks ? banks : []);
      localStorage.setItem('banks', JSON.stringify(banks));
  }

  const removeBank = (name: string) => {
    const banksFiltered = banks?.filter(item => item.bankName !== name);
    setBanks(banksFiltered);
    localStorage.setItem('banks', JSON.stringify(banksFiltered));
  }

  const clearCache = () => {
    localStorage.removeItem('banks');
    setBanks(undefined);
    getFromAPI();
  }

  React.useEffect(() => {
    if (getFromLocalStorage() === false) {
      getFromAPI();
    }
  }, []);

  return (
    <BankContext.Provider
      value={{
        banks,
        removeBank,
        clearCache,
      }}
    >
      {children}
    </BankContext.Provider>
  )
}