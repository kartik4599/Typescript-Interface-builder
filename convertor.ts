const primaryDataType = (data: any) => typeof data;

const primaryDataTypeArray = (data: any[]) => `${primaryDataType(data[0])}[]`;

const arrayDatatypeHandler = (data: any[]) => {
  if (typeof data[0] !== "object") return primaryDataTypeArray(data);
  return JSON.stringify(convertor(data[0])) + "[]";
};

const objectDatatypeHandler = (data: any) => {
  let returnString = {};

  for (let key in data) {
    returnString[key] = convertor(data[key]);
  }

  return returnString;
};

const convertor = (data: any) => {
  // returing undefined data type
  if (typeof data === "undefined") return "undefined";

  // returing primary datatype
  if (typeof data !== "object") return primaryDataType(data);

  // returing null datatype
  if (!data) return "null";

  // returing array datatype
  if (Array.isArray(data)) {
    return arrayDatatypeHandler(data);
  }

  return objectDatatypeHandler(data);
};

const data={
  status: 1,
  isError: false,
  message: "Get all stages successfully",
  detail: {
    name: "kartik",
    isPass: false,
    subject: {
      math: 10,
      science: 20,
    },
  },
  data: [
    "New Hire/Signed Offer Letter",
    "Credentialing Paperwork Pending",
    "HR Paperwork Pending",
    "Credentialing Packet: Complete",
    "Credentialing: Apps Submitted to All Payers",
    "Onboarding/Training in Process",
    "Credentialing: Complete",
  ],
  profile: null,
}

console.log(
  convertor(data)
);
