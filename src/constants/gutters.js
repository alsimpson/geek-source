const unit = 'px';
const gutter = 30;

const mainGutter = gutter + unit;
const halfGutter = (gutter / 2) + unit;
const oneThirdGutter = (gutter / 3) + unit;
const quarterGutter = (gutter * 0.25) + unit;
const oneEighthGutter = (gutter * 0.125) + unit;
const doubleGutter = (gutter * 2) + unit;

const mobileGutter = 20;
const mainMobileGutter = mobileGutter + unit;
const mobileHalfGutter = (mobileGutter / 2) + unit;
const mobileDoubleGutter = (mobileGutter * 2) + unit;

const noGutter = 0;

export const gutters = {
  mainGutter,
  halfGutter,
  oneThirdGutter,
  quarterGutter,
  oneEighthGutter,
  doubleGutter,
  mainMobileGutter,
  mobileHalfGutter,
  mobileDoubleGutter,
  noGutter,
};
