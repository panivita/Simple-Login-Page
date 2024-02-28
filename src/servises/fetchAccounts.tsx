import { AccountsData } from "../data/accountsData";

const AccountsFetch = () => {
  const data = AccountsData();

  const accountsPromise: Promise<any> = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ accounts: data });
    }, 500);
  });
  return accountsPromise;
};

export default AccountsFetch;