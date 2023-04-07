import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { getUserDetails, updateUsers } from "../actions/userActions";
import {USER_UPDATE_RESET} from '../constants/userConstants'
//import { useNavigate } from "react-router-dom";

const userEditScreen = ({ match, history }) => {
    const userId = match.params.id
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails
  // const { search } = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get("querystringkey");
  // const redirect = redirectInUrl ? redirectInUrl : "/";
  // const navigate = useNavigate();

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading:loadingUpdate, error:ErrorUpadate, success:successUpdate} = userUpdate


  useEffect(() => {
    if(successUpdate){
        dispatch({type: USER_UPDATE_RESET})
        history.push('/admin/userlist')
    } else{
      if(!user.name || user._id !== userId){
        dispatch(getUserDetails(userId))
       }else{
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
       }
    }
  }, [dispatch,history,userId,user,successUpdate])

  
 

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUsers({_id: userId,name,email,isAdmin}))
   
  }

  return (
    <>
      <Link to='/admin/userlist' className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
      <br></br>
      <h4>Edit User</h4>
      {loadingUpdate && <Loader />}
      {ErrorUpadate  && <Message variant='danger' >{ErrorUpadate}</Message>}
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
           <Form onSubmit={submitHandler}>
           <Form.Group controlId="name">
             <br></br>
             <Form.Label>
               <h6>Name</h6>
             </Form.Label>
             <Form.Control
               type="name"
               placeholder="Enter name"
               value={name}
               onChange={(e) => setName(e.target.value)}
             ></Form.Control>
           </Form.Group>
           <Form.Group controlId="email">
             <br></br>
             <Form.Label>
               <h6>Email Address</h6>
             </Form.Label>
             <Form.Control
               type="email"
               placeholder="Enter email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             ></Form.Control>
           </Form.Group>
           <Form.Group controlId="isAdmin">
             <br></br>
             <Form.Check
               type="checkbox"
               label="isAdmin"
               checked={isAdmin}
               onChange={(e) => setIsAdmin(e.target.checked)}
             ></Form.Check>
           </Form.Group>
          
           <Form.Group id="btn" className="buttons">
             <br></br>
             <Button type="submit" variant="light">
               Update
             </Button>
           </Form.Group>
         </Form>
      )}
     
      <br></br>
     
    </FormContainer>

    </>
    
  );
};

export default userEditScreen;
