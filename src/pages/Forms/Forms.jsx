import styles from './forms.module.scss'
import { useState } from 'react'
import shortid from 'shortid'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { SelectButton } from 'primereact/selectbutton'
import { RadioButton } from 'primereact/radiobutton'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'

const Forms = () => {
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [gender, setGender] = useState(null)
  const [age, setAge] = useState('')
  const [showCard, setShowCard] = useState(false)

  let loginInputId = shortid.generate()
  let emailInputId = shortid.generate()
  let passwordInputId = shortid.generate()

  const options = ['18-25', '26-35', '36+']

  const handlerSubmit = (e) => {
    e.preventDefault()
    setShowCard(true)
  }
  const handlerOnNameChange = (e) => {
    setLogin(e.target.value)
  }
  const handlerOnEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlerOnPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeAgreed = (e) => {
    setAgreed(e.target.checked)
  }
  const handlerGenderChange = (e) => {
    setGender(e.target.value)
  }
  const handlerAgeChange = (e) => {
    setAge(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handlerSubmit} className={styles.form}>
        {/* text */}
        <div className={styles.formBlock}>
          {' '}
          <label className={styles.label} htmlFor={loginInputId}>
            <p className={styles.label}> Name</p>
            <InputText
              type="text"
              placeholder="enter name"
              name="login"
              value={login}
              onChange={handlerOnNameChange}
            />
          </label>
          <label className={styles.label} htmlFor={emailInputId}>
            <p className={styles.label}>Email</p>
            <InputText
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handlerOnEmailChange}
            />
          </label>
          <label className={styles.label} htmlFor={passwordInputId}>
            <p className={styles.label}>Password</p>
            <InputText
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handlerOnPasswordChange}
            />
          </label>
        </div>

        {/* CHECKBOX */}
        <div className={styles.formBlock}>
          {' '}
          <label className={styles.label}>
            <p className={styles.label}> Agree to terms</p>
            <Checkbox
              // type="checkbox"
              checked={agreed}
              onChange={handleChangeAgreed}
            />
          </label>
        </div>

        {/* RADIO */}
        <div className={styles.formBlock}>
          {' '}
          <label className={styles.label}>
            <p className={styles.label}>Male</p>
            <RadioButton
              type="radio"
              checked={gender === 'male'}
              name="gender"
              value="male"
              onChange={handlerGenderChange}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.label}>Female</p>
            <RadioButton
              type="radio"
              checked={gender === 'female'}
              name="gender"
              value="female"
              onChange={handlerGenderChange}
            />
          </label>
        </div>

        {/* select */}
        <div className={styles.formBlock}>
          {' '}
          <label className={styles.label}>
            <p className={styles.label}>Choose your age</p>
            <SelectButton
              name="age"
              value={age}
              onChange={handlerAgeChange}
              options={options}
            />
          </label>
        </div>

        <Button className="p-button-success" type="submit">
          submit
        </Button>
      </form>
      {showCard && (
        <Card>
          <h2>User's data: </h2>
          <p>
            <b>Name :</b> {login}
          </p>
          <p>
            <b>Password :</b> "*******"
          </p>
          <p>
            <b>Agreed :</b> {agreed ? 'YES' : 'NO'}
          </p>
          <p>
            <b>Gender :</b> {gender}
          </p>
          <p>
            {' '}
            <b>Age :</b> {age}
          </p>
          <Avatar className="mr-2" size="xlarge" shape="circle" />
        </Card>
      )}
    </div>
  )
}

export default Forms
