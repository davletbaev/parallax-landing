const getRewardFromReferrals = (referrals: number) => {
  if (referrals < 10) return 0;
  if (referrals < 100) return 1;

  return 2;
};

export default getRewardFromReferrals;