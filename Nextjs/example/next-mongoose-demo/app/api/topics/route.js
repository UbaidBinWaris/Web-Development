import connect_to_db from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, age } = await request.json();
    await connect_to_db();
    const newTopic = await Topic.create({ name, age });
    return NextResponse.json(
      { message: "Topic Created", topic: newTopic },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 500 }
    );
  }
}
