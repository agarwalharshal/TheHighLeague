import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useMediaQuery } from "react-responsive";

const UserSignUp = () => {
	const { user, setUser } = useContext(UserContext);
	const { org, setOrg } = useContext(UserContext);
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 768px)",
	});

	const navigate = useNavigate();
	const Home = () => {
		navigate("/");
	};
	const Submit = async () => {
		const name = document.getElementById("name").value;
		console.log("helo signup");
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		await axios.post("/auth/signup_stud", { name, password, email });
		navigate("/user");
	};

	if (isDesktopOrLaptop) {
		if (!user && !org) {
			return (
				<section
					className="main position-absolute"
					style={{
						backgroundColor: "#16324F",
						width: "100%",
						height: "100vh",
						overflowY: "scroll",
					}}
				>
					<nav
						className="navbar navbar-dark"
						style={{ backgroundColor: "#16324F" }}
					>
						<div className="container-fluid justify-content-center position-relative">
							<div
								className="btn position-absolute signin text-white"
								onClick={Home}
								style={{
									borderRadius: "30px",
									fontSize: "1.5rem",
									right: "3%",
								}}
							>
								Login
							</div>
							<a className="navbar-brand" href="#">
								<p
									className="head"
									style={{
										fontWeight: "bolder",
										fontSize: "2.0rem",
										borderBottom: "solid",
										borderColor: "#3E92CC",
										borderWidth: "thick",
									}}
								>
									SignUp
								</p>
							</a>
						</div>
					</nav>

					<div
						class="container"
						style={{
							border: "solid 2px #368f8b",
							height: "40%",
							width: "20%",
							margin: "50px auto",
						}}
					></div>

					<div class="container">
						<div class="row">
							<div
								class="col"
								style={{
									backgroundColor: "#DDBEA8",
									height: "50px",
									// border: "solid  2px #368f8b",
									margin: "20px",
									padding: "1%",
								}}
							>
								Name
							</div>
							<div
								class="col"
								style={{
									backgroundColor: "#DDBEA8",
									height: "50px",
									// border: "solid  2px #368f8b",
									margin: "20px",
									padding: "1%",
								}}
							>
								Phone Number
							</div>
							<div
								class="col"
								style={{
									backgroundColor: "#DDBEA8",
									height: "50px",
									// border: "solid  2px #368f8b",
									margin: "20px",
									padding: "1%",
								}}
							>
								Address
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<div
								class="col"
								style={{
									backgroundColor: "#DDBEA8",
									height: "50px",
									// border: "solid  2px #368f8b",
									margin: "20px",
									padding: "1%",
								}}
							>
								DoB
							</div>
							<div
								class="col"
								style={{
									backgroundColor: "#DDBEA8",
									height: "50px",
									// border: "solid  2px #368f8b",
									margin: "20px",
									padding: "1%",
								}}
							>
								Photograph
							</div>
							<div
								class="col"
								style={{
									backgroundColor: "#DDBEA8",
									height: "50px",
									// border: "solid  2px #368f8b",
									margin: "20px",
									padding: "1%",
								}}
							>
								Signature
							</div>
						</div>
						<div
							style={{
								backgroundColor: "#DDBEA8",
								height: "75px",
								width: "500px",
								alignContent: "center",
								// border: "solid  2px #368f8b",
								margin: "20px auto ",
								padding: "1.5%",
							}}
						>
							<h3>Quality Score</h3>
						</div>
					</div>

					<br />
					<br />
					<br />
					<br />
					<br />
				</section>
			);
		}
	} else {
		if (!user && !org) {
			return (
				<section
					className="main"
					style={{
						backgroundColor: "#16324F",
						height: "100vh",
						width: "100%",
						overflowY: "scroll",
					}}
				>
					<nav
						className="navbar navbar-dark"
						style={{ backgroundColor: "#16324F" }}
					>
						<div className="container-fluid justify-content-center position-relative">
							<a className="navbar-brand" href="#">
								<p
									className="head"
									style={{
										fontWeight: "bolder",
										fontSize: "2.0rem",
										borderBottom: "solid",
										borderColor: "#3E92CC",
										borderWidth: "thick",
									}}
								>
									Sign in
								</p>
							</a>
						</div>
					</nav>

					<div
						className="how position-relative d-flex flex-colunm justify-content-center align-items-center my-5 py-5"
						style={{ alignContent: "center" }}
					>
						<div
							className="outer p-2"
							style={{
								backgroundColor: "#16324F",
								width: "70%",
								maxHeight: "20%",
								borderRadius: "20px",
								borderStyle: "solid",
								borderColor: "white",
								borderWidth: "medium",
							}}
						>
							<div
								className="inner position-relative flex-column pb-3 pt-3 align-items-center d-flex"
								style={{
									backgroundColor: "white",
									maxWidth: "100%",
									maxHeight: "100%",
									borderRadius: "20px",
								}}
							>
								<div className="id position-relative px-3">
									<p
										className="id"
										style={{ fontWeight: "bolder", fontSize: "2.0rem" }}
									>
										Name:
									</p>
									<input
										className="form-control px-2 py-3 "
										id="name"
										style={{ width: "100%" }}
										type="text"
										placeholder="Unique ID"
										aria-label="default input example"
									></input>
									<p
										className="id"
										style={{ fontWeight: "bolder", fontSize: "2.0rem" }}
									>
										Email Id:
									</p>
									<input
										className="form-control px-2 py-3 "
										id="email"
										style={{ width: "100%" }}
										type="text"
										placeholder="Unique ID"
										aria-label="default input example"
									></input>
									<p
										className="id"
										style={{ fontWeight: "bolder", fontSize: "2.0rem" }}
									>
										Password:
									</p>
									<input
										className="form-control px-2 py-3 "
										id="password"
										style={{ width: "100%" }}
										type="text"
										placeholder="Unique ID"
										aria-label="default input example"
									></input>

									<div
										className="btn btn-md mt-3 text-white"
										onClick={Submit}
										style={{
											backgroundColor: "#2A628F",
											borderRadius: "30px",
											fontSize: "1.5rem",
										}}
									>
										Sign in
									</div>
								</div>
							</div>
						</div>
					</div>

					<br />
					<br />
					<br />
					<br />
					<br />
				</section>
			);
		} else {
			return (
				<section
					className="main position-absolute"
					style={{ backgroundColor: "#16324F", height: "100%", width: "100%" }}
				>
					<nav
						className="navbar navbar-dark"
						style={{ backgroundColor: "#16324F" }}
					>
						<div className="container-fluid justify-content-center position-relative">
							<a className="navbar-brand" href="#">
								<p
									className="head"
									style={{
										fontWeight: "bolder",
										fontSize: "2.0rem",
										borderBottom: "solid",
										borderColor: "#3E92CC",
										borderWidth: "thick",
									}}
								>
									Organisation
								</p>
							</a>
						</div>
					</nav>

					<div
						className="how position-relative d-flex flex-colunm justify-content-center align-items-center my-5 py-5"
						style={{ alignContent: "center" }}
					>
						<div className="details py-2 " style={{ maxWidth: "80%" }}>
							<p
								className="work text-white text-wrap"
								style={{ fontSize: "2.5rem" }}
							>
								Sorry, you are not Signed in. Please Sign in
							</p>
						</div>
					</div>

					<br />
					<br />
					<br />
					<br />
					<br />
				</section>
			);
		}
	}
};

export default UserSignUp;

{
	/* <section className="main position-absolute h-100 w-100" style={{ backgroundColor:"#2E2B2B"}}>
          
                
<div className="container position-relative" style={{backgroundColor:"#161212", minWidth:"100vw" ,minHeight:"10vh"}}>
    <b className="navname text-white position-relative py-2" style={{fontSize:"2rem",left:"0%"}}>VERICHAIN</b>
</div>

<div className="welcom py-3 position-relative">
  <p className="welcom text-white" style={{fontSize:"3rem"}}>Enter Details to Sign Up!!</p>  
</div>



<div className="container position-relative py-5 justify-content-center align-content-center" style={{ backgroundColor:"#161212", width:"50%",height:"65vh",borderRadius:"20px",overflowY:"scroll",opacity:"75%"}}>

<div className="forms py-3 position-relative" style={{height:"100%"}}>

    <label ><b className="name text-white" style={{fontSize:"1.5rem"}}> Name: </b></label><br/>
    <input type="text" id="name" name="name" style={{borderRadius:"20px",width:"60%"}} /><br/><br/>

    <label ><b className="pass text-white" style={{fontSize:"1.5rem"}}>Email:</b></label><br/>
    <input type="text" id="password" name="password" style={{borderRadius:"20px",width:"60%"}} /><br/><br/>


    <label ><b className="pass text-white" style={{fontSize:"1.5rem"}}>Password:</b></label><br/>
    <input type="text" id="password" name="password" style={{borderRadius:"20px",width:"60%"}} /><br/><br/>

    <label ><b className="pass text-white" style={{fontSize:"1.5rem"}}>Confirm Password:</b></label><br/>
    <input type="text" id="password" name="password" style={{borderRadius:"20px",width:"60%"}} /><br/><br/>



    <div className="signout btn" onClick={Submit}  style={{borderRadius:"20px",color:"white",backgroundColor:"black"}}>Sign up</div> 
    <p className="signumlink text-white pt-3">Have an account?</p> <Link to="/signin" className='text-white px-3' style={{textDecoration:"none"}}> <b className="link text-white" style={{textDecoration:"none"}}>Sign in</b> </Link>

</div>

    

    



</div>


</section> */
}
