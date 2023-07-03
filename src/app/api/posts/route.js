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



export const POST = async (request) =>{
    const body = await request.json()

    try {
        await connect();
        const newpost = new Posts(body)
        await newpost.save()
        return new NextResponse("Post has been added", {status:200})
       
    } catch (error) {
        return new NextResponse('Oops error!', {status  :500})
    }
}




export const DELETE = async (request, {params}) =>{
    const {id} = params;

    try {
        await connect();
        await Posts.findByIdAndDelete(id)
        return new NextResponse("Post has been deleted", {status:200})
       
    } catch (error) {
        return new NextResponse('Oops error!', {status  :500})
    }
}


