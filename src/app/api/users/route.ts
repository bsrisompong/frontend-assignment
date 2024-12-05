import { NextRequest, NextResponse } from "next/server";

import { fetchUserData, IUser } from "@/features/users";

interface IDepartmentData {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
}

const groupByDepartment = (users: IUser[]) => {
  const departmentData: Record<string, IDepartmentData> = {};

  for (const user of users) {
    const dept = user.company.department;

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
    if (user.gender === "male") {
      deptEntry.male += 1;
    } else if (user.gender === "female") {
      deptEntry.female += 1;
    }

    // initial ageRange
    if (!deptEntry.ageRange) deptEntry.ageRange = `${user.age}-${user.age}`;
    else {
      // update ageRange
      const [minAge, maxAge] = deptEntry.ageRange.split("-").map(Number);
      deptEntry.ageRange = `${Math.min(minAge, user.age)}-${Math.max(
        maxAge,
        user.age
      )}`;
    }

    // count hair colors of users in the department
    const hairColor = user.hair.color;
    deptEntry.hair[hairColor] = (deptEntry.hair[hairColor] || 0) + 1;

    // map fullname with post code
    const fullName = `${user.firstName}${user.lastName}`;
    deptEntry.addressUser[fullName] = user.address.postalCode;
  }

  return departmentData;
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") ?? "30", 10);
  const skip = parseInt(searchParams.get("skip") ?? "0", 10);

  try {
    const data = await fetchUserData(limit, skip);
    const groupedData = groupByDepartment(data.users);
    return NextResponse.json(groupedData);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
