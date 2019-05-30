// @flow

import type { Theme } from '../common/typings';

const brand = '#0085FF';
const successColor = '#1CC982';

const whiteText = '#FFFFFF';
const lightTextColor = '#787878';
const regularTextColor = '#646464';
const labelTextColor = '#4C6379';
const contentTextColor = '#738190';
const btnGreenTextColor = successColor;
const btnBreakTextColor = '#FDB34D';
const errorTextColor = '#FB6370';
const btnOnBreakBg = '#e2ac4f';
const btnClockedOutBg = '#687482';
const backgroundColor = '#EEEEEE';
const btnBrand = '#0078e6';
const btnBrandClicked = '#FFFFFF';
const btnBrandHover = 'rgba(0, 0, 0, 0.06)';
const btnBackgroundClicked = 'rgba(0, 0, 0, 0.12)';
const btnBackgroundHover = 'rgba(0, 0, 0, 0.06)';
const btnFormBackgroundClicked = 'rgba(0, 0, 0, 0.1)';
const toastErrorBg = '#4C6379';
const breakBg = '#FBBF58';
const clockedInBg = successColor;
const clockInBg = '#FFFFFF';
const clockedOutBg = '#738190';
const lightBg = '#f8f8f8';
const avatarBorderColor = '#A0AFBE';
const avatarDefaultBg = '#9CA6B0';
const separatorColor = '#E9EBED';
const grayActionButton = 'rgba(55, 85, 106, 0.1)';
const successActionButton = '#19b575';

const appScreenState = {
  initializing: backgroundColor,
  //main: brand, // @TODO: check if this is needed anywhere
  clockedIn: clockedInBg,
  onBreak: breakBg,
  clockedOut: clockedOutBg,
  endBreak: clockedInBg,
  nothingToDo: clockedOutBg,
  chooseShift: brand
};

const toast = {
  success: brand,
  error: toastErrorBg
};

const button = {
  brand: {
    bg: btnBrand,
    bgClicked: btnBrandClicked,
    bgHover: btnBrandHover,
    text: whiteText,
    textClicked: brand
  },
  grey: {
    bg: grayActionButton,
    bgClicked: btnFormBackgroundClicked,
    bgHover: btnFormBackgroundClicked,
    text: contentTextColor,
    textClicked: contentTextColor
  },
  clockedIn: {
    bg: successActionButton,
    bgClicked: btnBackgroundClicked,
    bgHover: btnBackgroundHover,
    text: whiteText,
    textClicked: whiteText
  },
  onBreak: {
    bg: btnOnBreakBg,
    bgClicked: btnBackgroundClicked,
    bgHover: btnBackgroundHover,
    text: whiteText,
    textClicked: whiteText
  },
  endBreak: {
    bg: successActionButton,
    bgClicked: btnBackgroundClicked,
    bgHover: btnBackgroundHover,
    text: whiteText,
    textClicked: whiteText
  },
  clockedOut: {
    bg: btnClockedOutBg,
    bgClicked: btnBackgroundClicked,
    bgHover: btnBackgroundHover,
    text: whiteText,
    textClicked: whiteText
  }
};

const theme: Theme = {
  brand,
  successColor,

  lightTextColor,
  backgroundColor,
  breakBg,
  clockedInBg,
  clockInBg,
  avatarBorderColor,
  avatarDefaultBg,
  lightBg,
  regularTextColor,
  labelTextColor,
  contentTextColor,
  errorTextColor,
  separatorColor,
  btnBrand,
  btnBrandClicked,
  btnBrandHover,
  btnGreenTextColor,
  btnBreakTextColor,

  appScreenState,
  toast,
  button
};

export default theme;