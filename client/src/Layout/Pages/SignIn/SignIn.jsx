import './SignIn.css'

const SignIn = () => {
  return (
    <section className='signin'>
        <form action="" className='signin__form'>
            <label htmlFor="" className='signin__label'>User Name</label>
            <input type="text" name="" className='signin__input'/>
            <label htmlFor="" className='signin__label'>Password</label>
            <input type="password" name="" className='signin__input'/>
            <label htmlFor="" className='signin__label'>Confirm password</label>
            <input type="password" name="" className='signin__input'/>
        </form>
    </section>
  )  
};

export default SignIn