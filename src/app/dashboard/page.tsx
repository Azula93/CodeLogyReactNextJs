"use client"
import {useSession,signOut} from "next-auth/react"

function DashboardPage(){
    const {data: session, status} = useSession();

    console.log(session, status)

    return <div>
        DashboardPage
        <button className="py-3 rounded bg-indigo-500 text-white hover:bg-indigo-dark focus:outline-none my-1" onClick={() =>{signOut();} }>LogOut</button>

        

    </div>
}

export default DashboardPage;