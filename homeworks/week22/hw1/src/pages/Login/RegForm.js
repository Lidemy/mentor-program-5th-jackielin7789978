/* eslint-disable no-unused-vars */
import Proptypes from 'prop-types'
import { FormContainer, Inputs, Input, Submit } from './styled'
import { ERR } from '../../components/general'

export default function RegForm({ props }) {
  const {
    setUsername,
    setNickname,
    setPassword,
    handleRegister,
    errMsg,
    setErrMsg
  } = props
  return (
    <FormContainer onSubmit={handleRegister}>
      <Inputs>
        <Input
          placeholder='Username'
          onChange={(e) => {
            setErrMsg('')
            setUsername(e.target.value)
          }}
        />
        <Input
          placeholder='Nickname'
          onChange={(e) => {
            setErrMsg('')
            setNickname(e.target.value)
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
        <Submit type='submit' value='註冊' />
      </Inputs>
    </FormContainer>
  )
}

RegForm.propTypes = {
  props: Proptypes.object,
  setUsername: Proptypes.func,
  setNickname: Proptypes.func,
  setPassword: Proptypes.func,
  errMsg: Proptypes.string,
  handleRegister: Proptypes.func,
  setErrMsg: Proptypes.func
}
