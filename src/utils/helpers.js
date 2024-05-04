import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  OTHERS_TAG,
  RELATIVES_TAG,
} from "./constants";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "VND" }).format(
    value
  );

export const replaceTextUsingTemplate = (temp, replacements) => {
  Object.keys(replacements).forEach((key) => {
    temp = temp.replace(`{{${key}}}`, replacements[key]);
  });

  return temp;
};

// export const exportToExcel = ({ data, fileName }) => {

//   return exportToCSV;
// };

export const convertArrayToJsonObj = (arrayOfObjects) => {
  const resultObject = arrayOfObjects.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      acc[key] = obj[key];
    });
    return acc;
  }, {});

  return resultObject;
};

export const convertInfo = ({ guests }) => {
  let results = [];
  if (guests !== undefined) {
    const counter = guests.reduce(
      (counters, guest) => {
        switch (guest.tags) {
          case FRIEND_TAG:
            counters.numberFriends += 1;
            counters.moneyFriends += guest.take_money;
            break;
          case FAMILY_TAG:
            counters.numberFamily += 1;
            counters.moneyFamily += guest.take_money;
            break;
          case COLLEAGUES_TAG:
            counters.numberColleagues += 1;
            counters.moneyColleagues += guest.take_money;
            break;
          case RELATIVES_TAG:
            counters.numberRelatives += 1;
            counters.moneyRelatives += guest.take_money;
            break;
          case OTHERS_TAG:
            counters.numberOthers += 1;
            counters.moneyOthers += guest.take_money;
            break;
          default:
            break;
        }
        return counters;
      },
      {
        numberFriends: 0,
        numberFamily: 0,
        numberColleagues: 0,
        numberRelatives: 0,
        numberOthers: 0,
        moneyFriends: 0,
        moneyFamily: 0,
        moneyColleagues: 0,
        moneyRelatives: 0,
        moneyOthers: 0,
      }
    );

    const {
      numberFriends,
      numberFamily,
      numberColleagues,
      numberRelatives,
      numberOthers,
      moneyFriends,
      moneyFamily,
      moneyColleagues,
      moneyRelatives,
      moneyOthers,
    } = counter;
    if (guests !== undefined) {
      results.push(
        {
          key: "guests",
          family: numberFamily,
          friend: numberFriends,
          colleagues: numberColleagues,
          relatives: numberRelatives,
          others: numberOthers,
          total:
            numberFamily +
            numberFriends +
            numberColleagues +
            numberRelatives +
            numberOthers,
        },
        {
          key: "money",
          family: moneyFamily,
          friend: moneyFriends,
          colleagues: moneyColleagues,
          relatives: moneyRelatives,
          others: moneyOthers,
          total:
            moneyFamily +
            moneyFriends +
            moneyColleagues +
            moneyRelatives +
            moneyOthers,
        }
      );
    }
  } else {
    results = [];
  }

  return results;
};
