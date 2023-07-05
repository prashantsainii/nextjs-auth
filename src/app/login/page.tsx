'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';


export default function Login(){

    const [user,setUser] = React.useState({
        email: '',
        password: '',
    })

    const onLogin = async () => {

    }

    return (
        <div className='flex flex-col bg-black items-center justify-center min-h-screen py-2 text-white'>
            <h1 className=''>Login</h1>
            

            <div className='flex flex-col mt-8 mb-4'>

                <label className='pl-2' htmlFor="email">Email</label>
                <input 
                    className='p-2 border rounded-lg mb-4 mt-1'
                    id='email'
                    type='text'
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder='Email'
                />

                <label className='pl-2' htmlFor="password">Password</label>
                <input 
                    className='p-2 border rounded-lg mb-4 mt-1'
                    id='password'
                    type='password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder='Password'
                />
            </div>

            <button 
                className='bg-gray-800 rounded-lg p-3 mb-7' 
                onClick={onLogin}
            >Login</button>

            <Link
                className='bg-gray-800 rounded-lg p-3 mt-7 '
                href='/signup'
            >Back to Signup ? </Link>

        </div>
    )
}