import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Input,
  Form,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
//import CircularIndeterminate from "./LoadingComponent";
//import Container from "./LoadingComponent";
function Profile(props) {
  const handleChangePass = (values) => {
    const newUserPass = {
      userId: props.user._id,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    toggle();
    return props.changePassword(newUserPass);
  };

  const handleChangeUser = (values) => {
    // const newUser = {
    //   userId: props.user._id,
    //   // username: values.uname,
    //   firstname: values.fname,
    //   lastname: values.lname,
    //   income: values.income,
    //   familymembers: values.fammem,
    // };

    // return props.editUser(newUser);
  };
  // let toggle = false;

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);

  // let SetToggle = () => {
  //   return ;
  // };

//   if (props.isLoading) {
//     return (
//       <div className="container">
//         <div className="row">
//           <Container />
//         </div>
//       </div>
//     );
//   } else if (props.errMess) {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h4>{props.errMess}</h4>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
    return (
        <div className="container">
          <div className="row">
            {/* <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>My Profile</BreadcrumbItem>
            </Breadcrumb> */}
            <div className="col-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h3 className="m-0">My Details</h3>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        <Col md="2" className="mb-2 pt-3">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: "20px 20px 20px 20px",
                              margin: "0px auto",
                            }}
                            className="mb-2"
                          >
                            <Avatar
                              color={Avatar.getRandomColor("sitebase", [
                                "red",
                                "green",
                                "turquoise",
                              ])}
                              size="100"
                              //name={props.user.firstname}
                            />
                          </div>
                        </Col>

                        <Row form>
                          {/* First Name */}
                          <Col md="10" className="form-group">
                            <label htmlFor="feName">Name of the Organisation</label>
                            <Input
                              id="feName"
                            //   placeholder={props.user.name}
                            //   value={props.user.firstname}
                              onChange={() => {}}
                            />
                             </Col>
                         </Row>
                            <Row form>
                            {/* Email */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feEmail">Email</label>
                            <Input
                              type="email"
                              id="feEmail"
                            //   placeholder={props.user.username}
                            //   value={props.user.username}
                              onChange={() => {}}
                              autoComplete="email"
                            />
                          </Col>
                          {/* Password */}
                          <Col md="6" className="form-group">
                            <label htmlFor="fePassword">Password</label>
                            <Input
                              type="password"
                              id="fePassword"
                              placeholder="No Password Disclosure"
                              value="No Password Disclosure"
                              onChange={() => {}}
                              autoComplete="current-password"
                            />
                          </Col>
                        </Row>
                      </Row>
                      <Row form>
                          {/*plot no */}
                          <Col md="4" className="form-group">
                          <label htmlFor="feaddress">
                            Address
                          </label>
                          <Input
                            // type="number"
                            id="feaddress"
                            // placeholder={props.user.income}
                            // value={props.user.income}
                            onChange={() => {}}
                          />
                        </Col>
                        {/* City */}
                        <Col md="4" className="form-group">
                          <label htmlFor="feCity">
                            City
                          </label>
                          <Input
                            // type="number"
                            id="feCity"
                            // placeholder={props.user.income}
                            // value={props.user.income}
                            onChange={() => {}}
                          />
                        </Col>
                        {/* State */}
                        <Col md="4" className="form-group">
                          <label htmlFor="feState">
                            State 
                          </label>
                          <Input
                            // type="number"
                            id="feState"
                            // placeholder={props.user.familymembers}
                            // value={props.user.familymember}
                            onChange={() => {}}
                          ></Input>
                        </Col>
                      </Row>
                      <Row form>
                          <Col md="12" className="form-group">
                          <Label check>
                          <Input type="checkbox" />{' '}
                           Stop Services
                          </Label>
                          </Col>
                      </Row>
                      <div style={{ display: "flex" }}>
                        <Row form>
                          <Col md="6" className="form-group">
                            <Button
                              style={{ marginLeft: "auto",  height:"70px" }}
                              theme="accent"
                              color="info"
                              onClick={toggle2}
                            >
                              Update User Information
                            </Button>
                          </Col>
                          <Col md="6" className="form-group">
                            <Button
                              style={{ marginLeft: "auto", height:"70px"}}
                              theme="accent"
                              color="info"
                              onClick={toggle}
                            >
                              Change Password
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Change Password</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => handleChangePass(values)}>
                <Row className="form-group">
                  <div className="col-12">
                    <Label htmlFor="oldPassword" md={2}>
                      Old Password
                    </Label>
                  </div>
                  <div className="col-12 ">
                    <Control.text
                      model=".oldPassword"
                      id="oldPassword"
                      name="oldPassword"
                      placeholder="Old Password"
                      className="form-control"
                    />
                  </div>
                </Row>
                <Row className="form-group">
                  <div className="col-12">
                    <Label htmlFor="New Password" md={6}>
                      New Password
                    </Label>
                  </div>
                  <div className="col-12">
                    <Control.text
                      model=".newPassword"
                      id="newPassword"
                      name="newPassword"
                      placeholder="New Password"
                      className="form-control"
                    />
                  </div>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 1 }}>
                    <div style={{ display: "flex" }}>
                      <Button
                        style={{ marginLeft: "auto" }}
                        type="submit"
                        color="primary"
                        // onClick={SetToggle()}
                      >
                        Change Password
                      </Button>
                    </div>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>

          <Modal isOpen={modal2} toggle={toggle2}>
            <ModalHeader toggle={toggle2}>Change User</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => handleChangeUser(values)}>
                <div className="col-12">
                  <p>
                    **Please Enter all the Fields and change the fields you
                    wanna change
                  </p>
                </div>

                {/* <Row className="form-group">
                  <div className="col-12">
                    <Label htmlFor="username" md={2}>
                      Username
                    </Label>
                  </div>
                  <div className="col-12 ">
                    <Control.text
                      model=".uname"
                      id="uname"
                      name="uname"
                      placeholder={props.user.username}
                      value={props.user.username}
                      className="form-control"
                    />
                  </div>
                </Row> */}
                <Row className="form-group">
                  <div className="col-12">
                    <Label htmlFor="name" md={4}>
                      Name of Organisation
                    </Label>
                  </div>
                  <div className="col-12 ">
                    <Control.text
                      model=".name"
                      id="name"
                      name="name"
                    //   placeholder={props.user.firstname}
                      // value={props.user.firstname}
                      className="form-control"
                    />
                  </div>
                </Row>
                <Row className="form-group">
                  <div className="col-12">
                    <Label htmlFor="email" md={2}>
                      Email
                    </Label>
                  </div>
                  <div className="col-12 ">
                    <Control.text
                      model=".email"
                      id="email"
                      name="email"
                    //   placeholder={props.user.income}
                      // value={props.user.income}
                      className="form-control"
                    />
                  </div>
                </Row>
                <Row className="form-group">
                  <div className="col-12">
                    <Label htmlFor="capacity" md={6}>
                     Capacity
                    </Label>
                  </div>
                  <div className="col-12">
                    <Control.text
                      model=".capacity"
                      id="capacity"
                      name="capacity"
                      placeholder="Capacity"
                      className="form-control"
                    />
                  </div>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 1 }}>
                    <div style={{ display: "flex" }}>
                      <Button
                        style={{ marginLeft: "auto" }}
                        type="submit"
                        color="primary"
                        // onClick={SetToggle()}
                      >
                        Change User
                      </Button>
                    </div>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
    );
  }
export default Profile;
