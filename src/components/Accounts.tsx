import { useEffect, useState } from "react";
import AccountsFetch from "../servises/fetchAccounts";

interface IAccount {
  regularAccount: {
    name: string;
    iban: string;
    amount: number;
    localCurrency: string;
  }[];
  pocketAccounts: {
    name: string;
    iban: string;
    amount: number;
    currency: string;
  }[];
}

export default function Accounts() {
  const [accountsList, setAccountsList] = useState<IAccount[]>([]);

  useEffect(() => {
    (async () => {
      const result = await AccountsFetch();
      setAccountsList(result.accounts);
    })();
  }, []);

  return (
    <>
      <div className="account-container">
        {accountsList &&
          accountsList.map((account) => {
            return account.regularAccount.map(
              ({ name, iban, amount, localCurrency }, index) => (
                <div key={index}>
                  <h3>{name}</h3>
                  <p>IBAN: {iban}</p>
                  <p>
                    Amount: {amount} {localCurrency}
                  </p>
                </div>
              )
            );
          })}
      </div>
      <div className="account-container">
        {accountsList &&
          accountsList.map((account) => {
            return account.pocketAccounts.map(
              ({ name, iban, amount, currency }, index) => (
                <div key={index}>
                  <h3>{name}</h3>
                  <p>IBAN: {iban}</p>
                  <p>
                    Amount: {amount} {currency}
                  </p>
                </div>
              )
            );
          })}
      </div>
    </>
  );
}
