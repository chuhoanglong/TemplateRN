export const API_CONFIG = {
  LOGIN: 'login',
  MNEMONIC: 'wallets/mnemonic',
  WALLETS: 'wallets',
  GET_USER: 'users',
  RESEND_EMAIL: 'resend-verify',
  VERIFY_EMAIL: 'verify',
  CHANGE_PASS: 'change-pass',
  TOKENS: 'tokens',
  MOON_PAY_CURRENCY: (symbol: string) => `currencies/${symbol.toLocaleLowerCase()}/buy_quote`,
  SEND: (walletId: string) => `wallets/${walletId}/send`,
};
