/* eslint-disable no-unused-vars */
import Proptypes from 'prop-types'
import { FormContainer, Inputs, Input, Submit } from './styled'
import { ERR } from '../../components/general'

export default function LoginForm({ props }) {
  const { setUsername, setPassword, handleLogin, errMsg, setErrMsg } = props
  return (
    <FormContainer onSubmit={handleLogin}>
      <Inputs>
        <Input
          placeholder='Username'
          onChange={(e) => {
            setErrMsg('')
            setUsername(e.target.value)
          }}
        />
        <Input
          placeholder='Password'
          type='password'
          onChange={(e) => {
            setErrMsg('')
            setPassword(e.target.value)
          }}
        />
        {errMsg && <ERR>錯誤：{errMsg}</ERR>}
        <Submit type='submit' value='登入' />
      </Inputs>
    </FormContainer>
  )
}

LoginForm.propTypes = {
  props: Proptypes.object,
  setUsername: Proptypes.func,
  setPassword: Proptypes.func,
  errMsg: Proptypes.string,
  handleLogin: Proptypes.func,
  setErrMsg: Proptypes.func
}
