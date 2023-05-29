import { Button } from 'antd';
import styles from './login.module.css';

export default function Login () {
  return (
    <>
      <form action="/login" method="POST" className={styles.login}>
        <label for="id">ID</label>
        <input type="text" name="id" id="id" />
        <label for="pwd">PASSWORD</label>
        <input type="text" name="pwd" id="pwd" />
        <Button type="primary">Login</Button>
        <Button type="primary">Google Login</Button>
        <Button type="primary">Kakao Login</Button>
      </form>
    </>
  )
}
