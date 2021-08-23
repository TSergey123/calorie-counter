const getActivity = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9,
}

export const getGenderWeight = {
  male: +5,
  female: -160
}

export const calculateCcal = (genderWeight) => {
  const N = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + (genderWeight);
  const activityСoefficient = getActivity[document.querySelector('input[name="activity"]:checked').value];
  const balancedWeight = Math.round(N * activityСoefficient);
  const gain = Math.round(balancedWeight + (balancedWeight / 100 * 15));
  const slim = Math.round(balancedWeight - (balancedWeight / 100 * 15));
  return {
    balancedWeight: balancedWeight,
    gain: gain,
    slim: slim,
  };
}
