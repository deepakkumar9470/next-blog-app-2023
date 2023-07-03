import Posts from "@/models/Posts";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) =>{
    try {
        await connect();
        const posts = await Posts.find()
        return new NextResponse(JSON.stringify(posts), {status:200})
       
    } catch (error) {
        return new NextResponse('Oops error!', {status  :500})
    }
}

