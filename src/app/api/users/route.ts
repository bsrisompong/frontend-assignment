import { NextRequest, NextResponse } from "next/server";

import { fetchUserData, groupByDepartment } from "@/features/users";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") ?? "30", 10);
  const skip = parseInt(searchParams.get("skip") ?? "0", 10);

  try {
    const data = await fetchUserData(limit, skip);
    const groupedData = groupByDepartment(data?.users);
    return NextResponse.json(groupedData);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
