'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';


export default function Signup(){

    const [user,setUser] = React.useState({
        email: '',
        password: '',
        username: '',
    })

    const onSignup = async () => {

    }

    return (
        <div className='flex flex-col bg-black items-center justify-center min-h-screen py-2 text-white'>
            <h1 className=''>Sign Up</h1>
            

            <div className='flex flex-col mt-8 mb-4'>
                <label className=' pl-2' htmlFor="username">Username</label>
                <input 
                    className='p-2 border rounded-lg mb-4 mt-1'
                    id='username'
                    type='text'
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder='Username'
                />

                <label className=' pl-2' htmlFor="email">Email</label>
                <input 
                    className='p-2 border rounded-lg mb-4 mt-1'
                    id='email'
                    type='text'
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder='Email'
                />

                <label className=' pl-2' htmlFor="password">Password</label>
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
                className=' bg-gray-800 rounded-lg p-3 mb-7' 
                onClick={onSignup}
            >Sign Up</button>

            <Link
                className=' bg-gray-800 rounded-lg p-3 mt-7'
                href='/login'
            >Back to Login ? </Link>

        </div>
    )
}