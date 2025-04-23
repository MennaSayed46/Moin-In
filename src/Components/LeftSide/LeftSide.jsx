import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import cardImg from '../../../public/card-bg.svg'
import { connect } from 'react-redux'
import style from './LeftSide.module.css'
const LeftSide = ({ user }) => {
  useEffect(() => {
    if (user) {
      console.log('the user is exist')
      console.log(user)
      localStorage.setItem('userInfo', JSON.stringify(user))
    } else {
      console.log('the user is not exist')
    }
  }, [user]);

  const [info, setInfo] = useState([])

  useEffect(() => {
    const savedUser = localStorage.getItem('userInfo')
    if (savedUser) {
      setInfo(JSON.parse(savedUser))
    }
  }, [])

  const fileInputRef = useRef(null)
  const [photo, setPhoto] = useState(null)  

  const handleClick = e => {
    e.preventDefault()
    fileInputRef.current.click()
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setPhoto(base64);   
        localStorage.setItem('userPhoto', base64); 
      };
      reader.readAsDataURL(file);  
    }
  };

  
  useEffect(() => {
    const savedPhoto = localStorage.getItem('userPhoto');
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);
  

  return (
    <section className='bg-white rounded-xl overflow-hidden text-black'>
      <img src={cardImg} alt='Background' className='w-full' />

      <div className='flex flex-col items-center mt-[-40px]'>
        <Link to={'/MainProfile'}>
          <div className='relative'>
            <img
              src={photo ||info?.photoURL}
              alt='User Profile'
              className={`shadow-md border-4 border-white rounded-full w-20 h-20 object-cover ${style.userImg}`}
            />
            {!info?.photoURL && (
              <div className='absolute inset-0 flex justify-center items-center bg-gray-100 rounded-full'>
                <span className='text-gray-500 text-xs'>No Photo</span>
              </div>
            )}
          </div>
        </Link>

        <h2 className={`mt-2 font-semibold text-lg ${style.displayName}`}>
          {info?.displayName || 'Guest'}
        </h2>
        <p className='text-[#4e4a4a] text-sm'>{info?.email || ''}</p>
        <Link
          to='#'
          className='mt-1 font-normal text-[#b85b4e] text-sm hover:underline'
          onClick={handleClick}
        >
          Add a photo
        </Link>

        <input
          type='file'
          ref={fileInputRef}
          onChange={handleChange}
          style={{ display: 'none' }}
          accept='image/*'
        />
      </div>

      <div
        className={`flex flex-col gap-2 my-4 p-2 border-[#a8a7a7] border-t-2 text-[#4e4a4a] networks ${style.desc}`}
      >
        {/* Row 1 */}
        <div className='flex flex-row justify-between items-center p-2 w-full'>
          <p className={`${style.grow}`}>Grow your networks</p>
          <i className={`text-right fa-solid fa-user-plus ${style.icone}`}></i>
        </div>

        {/* Row 2 */}
        <div className='flex flex-row justify-between items-center p-2 w-full'>
          <p>Saved items</p>
          <i className={`text-right fa-solid fa-bookmark ${style.icone}`}></i>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  user: state.userState.user
})

export default connect(mapStateToProps)(LeftSide)
