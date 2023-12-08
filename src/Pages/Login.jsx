import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_login } from '../Redux/Auth/action'
import '../Styles/Login.css'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()

  const {authenticated} = useSelector(state=> state)
  const navigate = useNavigate()

    React.useEffect(()=> {
        if(authenticated===true){
            navigate('/')
        }
    }, [authenticated])

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {email, password}
    dispatch(fetch_login(payload))
  }

  return (
    <div>
      <form className='Login'>
        <input type="text" placeholder='Enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
}

