import { IUser } from "@/features/users";

interface IDepartmentData {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
}

export const groupByDepartment = (users: IUser[]) => {
  const departmentData: Record<string, IDepartmentData> = {};

  for (const user of users) {
    const dept = user?.company?.department || "Unknown";

    if (!departmentData[dept]) {
      departmentData[dept] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    const deptEntry = departmentData[dept];

    // count gender
    if (user?.gender === "male") {
      deptEntry.male += 1;
    } else if (user?.gender === "female") {
      deptEntry.female += 1;
    }

    if (user?.age !== undefined) {
      // initial ageRange
      if (!deptEntry.ageRange) {
        deptEntry.ageRange = `${user.age}-${user.age}`;
      } else {
        // update ageRange
        const [minAge, maxAge] = deptEntry.ageRange.split("-").map(Number);
        deptEntry.ageRange = `${Math.min(minAge, user.age)}-${Math.max(
          maxAge,
          user.age
        )}`;
      }
    }

    if (user?.hair?.color) {
      // count hair colors of users in the department
      const hairColor = user.hair.color;
      deptEntry.hair[hairColor] = (deptEntry.hair[hairColor] || 0) + 1;
    } else {
      deptEntry.hair["undefined"] = (deptEntry.hair["undefined"] || 0) + 1;
    }

    if (user?.firstName && user?.lastName && user?.address?.postalCode) {
      // map fullname with post code
      const fullName = `${user.firstName}${user.lastName}`;
      deptEntry.addressUser[fullName] = user.address.postalCode;
    }
  }

  return departmentData;
};
