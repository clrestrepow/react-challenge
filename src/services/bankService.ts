import { BankInterface } from '../interfaces/bankInterface';

export const getBanks = async (): Promise<BankInterface[]> => {
  const resp = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
  const json = await resp.json();
  return json;
}