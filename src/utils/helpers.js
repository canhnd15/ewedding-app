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

export const checkValidPhone = (phone) => {
  const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
  return phone.match(regexPhoneNumber) ? true : false;
};
