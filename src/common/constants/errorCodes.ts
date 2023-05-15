import { CustomErrors } from '../types';

export const ErrorCodes: CustomErrors = {
  INTERNAL_SERVER_ERROR: {
    CODE: 'INTERNAL_SERVER_ERROR',
    MESSAGE: 'An unexpected error happened. Please try again later.',
  },
  NOT_FOUND: {
    CODE: 'NOT_FOUND',
    MESSAGE: 'The requested route was not found',
  },
  ENTITY_NOT_FOUND: {
    CODE: 'ENTITY_NOT_FOUND',
    MESSAGE: 'The requested entity was not found',
  },
  ENTITY_ALREADY_EXISTS: {
    CODE: 'ENTITY_ALREADY_EXISTS',
    MESSAGE: 'Cannot create entity as it already exists',
  },
  VALIDATION_FAILED: {
    CODE: 'VALIDATION_FAILED',
    MESSAGE: 'Failed to validate given entity',
  },
  UNAUTHENTICATED: {
    CODE: 'UNAUTHENTICATED',
    MESSAGE: 'You need to be logged in to perform this operation',
  },
  FORBIDDEN: {
    CODE: 'FORBIDDEN',
    MESSAGE: 'You are not allowed to perform this operation',
  },
  INVALID_REFRESH_TOKEN: {
    CODE: 'INVALID_REFRESH_TOKEN',
    MESSAGE: 'Refresh token provided is invalid. Please provide a valid token.',
  },
  FAILED_TO_SEND_OTP: {
    CODE: 'FAILED_TO_SEND_OTP',
    MESSAGE: 'Could not send OTP.',
  },
  FAILED_TO_VERIFY_OTP: {
    CODE: 'FAILED_TO_VERIFY_OTP',
    MESSAGE: 'OTP verification failed',
  },
  INCORRECT_OTP: {
    CODE: 'INCORRECT_OTP',
    MESSAGE: 'OTP provided is invalid. Please provide a valid OTP.',
  },
  INVALID_CREDENTIALS: {
    CODE: 'INVALID_CREDENTIALS',
    MESSAGE: 'Credentials provided is invalid. Please provide a valid email and password.',
  },
  TOKEN_REFRESH_NOT_SUPPORTED: {
    CODE: 'TOKEN_REFRESH_NOT_SUPPORTED',
    MESSAGE: 'Token refreshing is not currently supported.',
  },
  MERCHANT_NOT_FOUND: {
    CODE: 'MERCHANT_NOT_FOUND',
    MESSAGE: 'Merchant with given id was not found',
  },
  MERCHANT_USER_NOT_FOUND: {
    CODE: 'MERCHANT_USER_NOT_FOUND',
    MESSAGE: 'MerchantUser not found',
  },
  ORG_USER_NOT_FOUND: {
    CODE: 'ORG_USER_NOT_FOUND',
    MESSAGE: 'OrgUser not found',
  },
  CUSTOMER_NOT_FOUND: {
    CODE: 'CUSTOMER_NOT_FOUND',
    MESSAGE: 'Customer with the given ID was not found',
  },
  PINCODE_NOT_FOUND: {
    CODE: 'PINCODE_NOT_FOUND',
    MESSAGE: 'Given pincode was not found',
  },
  MERCHANT_USER_ALREADY_EXISTS: {
    CODE: 'MERCHANT_USER_ALREADY_EXISTS',
    MESSAGE: 'merchantUser with given email already exist',
  },
  CUSTOMER_EMAIL_ALREADY_EXISTS: {
    CODE: 'CUSTOMER_EMAIL_ALREADY_EXISTS',
    MESSAGE: 'Email address provided is already taken. Please use a different email address.',
  },
  ORG_USER_ALREADY_EXISTS: {
    CODE: 'ORG_USER_ALREADY_EXISTS',
    MESSAGE: 'Org user with given email already exist',
  },
  MISSING_ACCESS_SCOPES: {
    CODE: 'MISSING_ACCESS_SCOPES',
    MESSAGE: 'Necessary access scopes were not granted to the access token provided',
  },
  INVALID_RULE: {
    CODE: 'INVALID_RULE',
    MESSAGE: 'Please check syntax of rule provided',
  },
  INVALID_SHOPIFY_CREDENTIALS: {
    CODE: 'INVALID_SHOPIFY_CREDENTIALS',
    MESSAGE: 'Invalid access token',
  },
  INVALID_RAZORPAY_CREDENTIALS: {
    CODE: 'INVALID_RAZORPAY_CREDENTIALS',
    MESSAGE: 'Invalid credentials',
  },
};
