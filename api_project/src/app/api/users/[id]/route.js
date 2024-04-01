import {NextResponse} from 'next/server'
import {user} from '@/util/db'
export function GET(req,res){
    const userdata=user.filter((item)=>item.id==res.params.id)
  
    return NextResponse.json(userdata)


}