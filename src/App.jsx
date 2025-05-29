import Header from './Header.jsx'
import Footer  from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      <Card/>
      <br/>
      <Button/>
      <br/>
      <Student name = "Spongebob" age = {30} isstudent = {true}/>
      <Student name = "Patrick" age = {42} isstudent = {false}/>
      <Student name = "Messi" age = {27} isstudent = {true}/>
      <Student name = "Ronaldo" age = {31} isstudent = {true}/>
      <Student name = "Lana"/>

      <UserGreeting isLoggedIn = {true} username = "Mehedi"/>
    </>
  ); 
}

export default App
