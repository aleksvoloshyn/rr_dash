// APP with redux
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './../../redux/store'
import s from './contacts.module.scss'

const Contacts = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const form = e.currentTarget.elements
    dispatch(
      add({
        id: uuidv4(),
        name: form.name.value,
        age: form.age.value,
        position: form.position.value,
      })
    )
    e.target.reset()
  }

  return (
    <div className={s.contacts}>
      <p>App for testing REDUX</p>
      <nav>
        <input type="text" placeholder="Nickname" />

        <button>Login</button>
      </nav>
      <br />
      <form action="" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Age" name="age" required />
        <input type="text" placeholder="Position" name="position" required />
        <button type="submit">Add contact</button>
      </form>

      <div className={s.contactsList}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
            </tr>
          </thead>

          {contacts.map((cont) => {
            return (
              <tbody key={uuidv4()}>
                <tr>
                  <td>{cont.name}</td>
                  <td>{cont.age}</td>
                  <td>{cont.position}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Contacts
