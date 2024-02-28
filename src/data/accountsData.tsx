export const AccountsData = () => {
  return [
    {
      username: "Addison Martinez",
      regularAccount: [
        {
          name: "regular account 1",
          iban: "123456789",
          amount: 5000,
          localCurrency: "DKK",
        },
      ],
      pocketAccounts: [
        {
          name: "pocket account 1",
          iban: "123456789",
          amount: 2000,
          currency: "EUR",
        },
        {
          name: "pocket account 2",
          iban: "123456789",
          amount: 500,
          currency: "SEK",
        },
      ],
    },
  ];
};
