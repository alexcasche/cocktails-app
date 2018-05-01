const colors = {
  brandGold: '#ffbe2f',
  brandNavy: '#191c35',
  brandBlue: '#4badd1',
  brandGrey: '#3e3f44',
  brandLightGrey: '#4b4c52',
  brandSilver: '#7c7d84',
  brandYellow: '#fab832',
  brandGreen: '#1abc9e',
  brandRed: '#e24d4d',
}

const roles = {
  primary: colors.brandBlue,
  secondary: colors.brandGrey,
  warning: colors.brandYellow,
  danger: colors.brandRed
}

const fonts = {
  fontSansPrimary: '"Open Sans", sans-serif',
  fontSansCondensed: '"Open Sans Condensed", sans-serif',
  fontSansSecondary: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontDisplay: '"Lobster", cursive',
  baseFontSize: '16px',
  baseFontColor: colors.brandNavy
}

const breakpoints = {
  breakPointXS: '@media screen and (min-width: 480px)',
  breakPointSM: '@media screen and (min-width: 600px)',
  breakPointMD: '@media screen and (min-width: 768px)',
  breakPointLG: '@media screen and (min-width: 900px)',
  breakPointXL: '@media screen and (min-width: 1200px)'
}

const social = {
  facebookBG: '#3b5998',
  facebookIcon: 'fa fa-facebook-f',
  facebookIconSquare: 'fa fa-facebook-square',
  twitterBG: '#55acee',
  twitterIcon: 'fa fa-twitter',
  twitterIconSquare: 'fa fa-twitter-square',
  instagramBG: '#517fa3',
  instagramIcon:`fa fa-instagram`
}

const icons = {
  searchIcon: 'fa fa-search',
  accountIcon: 'fa fa-user',
  closeIcon: 'fa fa-times',
  closeSolidIcon: 'fa fa-times-circle',
  heartIcon: 'fa fa-heart-o',
  heartSolidIcon: 'fa fa-heart',
  infoIcon: 'fa fa-info-circle',
  carretRightIcon: 'fa fa-caret-right',
  carretDownIcon: 'fa fa-caret-down',
  filterIcon: 'fa fa-filter',
  plusIcon: 'fa fa-plus',
  cocktailIcon: 'fa fa-glass-martini',
  shareIcon: 'fas fa-share',
  loginIcon: 'fas fa-sign-in-alt'
}

const theme = { ...colors, ...roles, ...fonts, ...breakpoints, ...social, ...icons };

export default theme;