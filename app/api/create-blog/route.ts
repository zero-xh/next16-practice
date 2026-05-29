import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    console.log("POST");
    return NextResponse.json({ success: true });
};