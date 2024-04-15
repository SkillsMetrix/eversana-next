import { users } from "@/utils/db";
import { NextResponse } from "next/server";



export async function GET(request,content){
   const userdata= users.filter((item) => item.id == content.params.id)
   return NextResponse.json(
    userdata.length==0?{result:"No User Found",success:false}:{result:userdata,success:true}
   )
}
