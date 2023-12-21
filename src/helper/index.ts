export const removeHtmlTag = (str: string) =>
  str.replace(/<\/?[^>]+(>|$)/g, "");

export const isEmptyStringArray = (arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") return false;
  }
  return true;
};

export const changeStringToArray = (str: string): string[] => {
  if(str === "") return [];
  return str.trim().split(',')
}
