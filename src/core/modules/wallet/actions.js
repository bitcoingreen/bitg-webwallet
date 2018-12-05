import { createAction } from 'redux-actions';
import { createPromiseAction } from '../utils';

/**
 * Action Types
 */

export const WALLET_CREATE_REQUEST = 'wallet/WALLET_CREATE_REQUEST';
export const BALANCE_REQUEST = 'wallet/WALLET_BALANCE_REQUEST';
export const BALANCE_REQUEST_SUCCESS = 'wallet/WALLET_BALANCE_REQUEST_SUCCESS';
export const UTXOS_REQUEST = 'wallet/WALLET_UTXOS_REQUEST';
export const UTXOS_REQUEST_SUCCESS = 'wallet/WALLET_UTXOS_REQUEST_SUCCESS';

/**
 * Action Creators
 */
export const walletActionCreators = {
  createWallet: createPromiseAction(WALLET_CREATE_REQUEST),
  getBalance: createPromiseAction(BALANCE_REQUEST),
  getBalanceSuccess: createAction(BALANCE_REQUEST_SUCCESS),
  getUtxos: createPromiseAction(UTXOS_REQUEST),
  getUtxosSuccess: createAction(UTXOS_REQUEST_SUCCESS)
};