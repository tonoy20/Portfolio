import React from 'react'

function Leftsider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <a href='https://www.facebook.com/tonoy.8/'>
                        <i class="ri-facebook-circle-line text-gray-500 text-xl"></i>
                    </a>
                    <a href='mailto:tonoyict20@gmail.com'>
                        <i class="ri-mail-line text-gray-500 text-xl"></i>
                    </a>
                    <a href='https://www.instagram.com/arif_tonoy/'>
                        <i class="ri-instagram-line text-gray-500 text-xl"></i>
                    </a>

                    <a href='https://www.linkedin.com/in/arif-tonoy-597b451a4/'>
                        <i class="ri-linkedin-box-fill text-gray-500 text-xl"></i>
                    </a>                   

                    <a href='https://github.com/tonoy20'>
                        <i class="ri-github-fill text-gray-500 text-xl"></i>
                    </a>
                    
                </div>
                <div className='w-[1px] h-32 bg-[#125f63] mt-6 sm:hidden'>

                </div>
            </div>
        </div>
    )
}

export default Leftsider
