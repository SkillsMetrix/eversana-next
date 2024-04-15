 import mongoose from "mongoose"

const userModel= new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})
export const User= mongoose.model("users",userModel)





---
    export const DBURL='mongodb+srv://amar:amar123@cluster0.rle5i.mongodb.net/mmcdb?retryWrites=true&w=majority&appName=Cluster0'



----


     import { DBURL } from "@/app/lib/dbconnect";
import { User } from "@/app/lib/model/user";
import { users } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(){
    //return new Response('Welcome to GET API')
    //return NextResponse.json(users)
    await mongoose.connect(DBURL)
    const data= await User.find()
    console.log(data);
    return NextResponse.json({data})
}

export async function POST(request){
    let payload =await request.json()
    console.log(payload.name);
    users.push(payload)
    return NextResponse.json({result:"user created"})
}
