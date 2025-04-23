import React, { useEffect } from 'react'
import style from './LogIn.module.css'
import { Link, useNavigate } from 'react-router-dom'
import linkedinLogo from '../../../public/login-logo.svg'
import Illustration from '../../../public/login-hero.svg'
import google from '../../../public/google.svg'
import { signInAPI } from '../../redux/actions/index'
import { connect } from 'react-redux'
import logoIn from '../../../public/linkedin-svgrepo-com.svg'

const LogIn = props => {
  const navigate = useNavigate()

  useEffect(() => {
    if (props.user) {
      navigate('/home')
    }
  }, [props.user])

  console.log('User:', props.user);

  return (
    <>
      {props.user && navigate('/home')}
      <main>
        <nav>
          <Link to={'./index.html'}>

            <p
              className={`${style.moin} flex justify-center items-center gap-1`}
            >
              Moin{' '}
              <img src={logoIn} alt='' className={`${style.logoIn} logoIn`} />
            </p>
          </Link>

          <div className='right flex flex-row justify-content-between'>
            <button className={`hover:bg-[#cccccc] ${style.joinInBtn} `}>
              Join in{' '}
            </button>
            <button
              className={` hover:bg-[#bcd4e1] border-2 border-[#b85b4e] text-[#b85b4e] ${style.signIn}`}
            >
              Sign in{' '}
            </button>
          </div>
        </nav>

        <section
          className={`${style.contain} flex flex-col justify-center md:flex-row items-center my-12 flex-wrap md:flex-nowrap`}
        >
          <div className='left flex flex-col my-12 p-4 w-full md:w-100'>
            <p
              className={`text-[#526a6e] ${style.welcome} text-center md:text-left`}
            >
              Welcome to your professional community
            </p>

            <form
              action=''
              className='my-12'
              onSubmit={e => e.preventDefault()}
            >
              <button
                type='button'
                onClick={() => props.SignIn()}
                className='flex justify-center items-center gap-1 px-12 py-3 border-2 border-black rounded-[50px]'
              >
                <img src={google} alt='GoogleLogo' className='w-5 h-5' />
                <span className={`${style.continue_with_google}`}>
                  Continue with Google
                </span>
              </button>
            </form>
          </div>

          <div className='right my-12 p-4 w-full md:w-1/2'>
            <img
              src={Illustration}
              alt='illustration right img'
              className='w-full max-w-md object-contain'
            />
          </div>
        </section>
      </main>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userState.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SignIn: () => {
      dispatch(signInAPI())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
