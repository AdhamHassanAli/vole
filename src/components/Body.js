import React, { Component } from "react";
import sideMenu from "../images/side-menu.svg";
import john from "../images/john.png";
import dots from "../images/dots.svg";
import logo from "../images/logo.svg";
import breakfast from "../images/breakfast.svg";
import dinner from "../images/dinner.svg";
import lunchActive from "../images/lunch-active.svg";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";

import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/hover.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";

export class Body extends Component {
	render() {
		return (
			<div>
				<nav className='mnb navbar navbar-default navbar-fixed-top'>
					<div className='container-fluid'>
						<div className='navbar-header'>
							<button
								type='button'
								className='navbar-toggle collapsed'
								data-toggle='collapse'
								data-target='#navbar'
								aria-expanded='false'
								aria-controls='navbar'
							>
								<span className='sr-only'>Toggle navigation</span>
								<i className='ic fa fa-bars'></i>
							</button>
							<div style={{ padding: "15px 0" }}>
								<a href='#' id='msbo'>
									<img src={sideMenu} alt='' />
								</a>
							</div>
						</div>
						<div id='navbar' className='navbar-collapse collapse'>
							<ul className='nav navbar-nav navbar-right'>
								{/* <!-- <li><a href="#" className="ballIcon"><i className="fa fa-bell-o"></i></a></li> --> */}
								<li className='dropdown'>
									<a
										href='#'
										className='dropdown-toggle'
										data-toggle='dropdown'
										role='button'
										aria-haspopup='true'
										aria-expanded='false'
									>
										<span className='material-icons'>notifications_none</span>
										{/* <!-- <span className="fa fa-bell icon-bells"></span>  --> */}
										<span className='red-dot'></span>
									</a>
									<ul className='dropdown-menu notify-drop'>
										{/* <!-- end notify title --> */}
										{/* <!-- notify content --> */}
										<div className='drop-content'>
											<li>
												<div className='col-md-3 col-sm-3 col-xs-3'>
													<div className='notify-img'>
														<img src={john} alt='' />
													</div>
												</div>
												<div className='col-md-9 col-sm-9 col-xs-9 pd-l0'>
													<h5>Bellashihair</h5>
													<p className=''>Started Following you.</p>
												</div>
											</li>
											<li>
												<div className='col-md-3 col-sm-3 col-xs-3'>
													<div className='notify-img'>
														<img src={john} alt='' />
													</div>
												</div>
												<div className='col-md-9 col-sm-9 col-xs-9 pd-l0'>
													<h5>Bellashihair</h5>
													<p className=''>Started Following you.</p>
												</div>
											</li>
											<li>
												<div className='col-md-3 col-sm-3 col-xs-3'>
													<div className='notify-img'>
														<img src={john} alt='' />
													</div>
												</div>
												<div className='col-md-9 col-sm-9 col-xs-9 pd-l0'>
													<h5>Bellashihair</h5>
													<p className=''>Started Following you.</p>
												</div>
											</li>
											<li>
												<div className='col-md-3 col-sm-3 col-xs-3'>
													<div className='notify-img'>
														<img src={john} alt='' />
													</div>
												</div>
												<div className='col-md-9 col-sm-9 col-xs-9 pd-l0'>
													<h5>Bellashihair</h5>
													<p className=''>Started Following you.</p>
												</div>
											</li>
										</div>
										<div className='notify-drop-footer text-center'>
											<a href=''> See All Notification &gt; </a>
										</div>
									</ul>
								</li>
								<li className='dropdown'>
									<a
										href='#'
										className='dropdown-toggle'
										data-toggle='dropdown'
										role='button'
										aria-haspopup='true'
										aria-expanded='false'
									>
										<span />
										<span className='material-icons userIcon'>person_pin</span>
										{/* <!-- <img src="images/user-icon.svg" className="userIcon" alt=""></span>  --> */}
										<span>
											<img src={dots} className='dotIcon' alt='' />
										</span>
									</a>
									<ul className='dropdown-menu'>
										<li>
											<a href='#'>Settings</a>
										</li>
										<li>
											<a href='#'>Upgrade</a>
										</li>
										<li>
											<a href='#'>Help</a>
										</li>
										<li role='separator' className='divider'></li>
										<li>
											<a href='#'>Logout</a>
										</li>
									</ul>
								</li>
							</ul>
							<form className='navbar-form'>
								{/* <!-- <input type="text" className="form-control" placeholder="Search..."> --> */}
								<div className='input-group'>
									<input type='text' className='form-control firstfield' />
									<span
										className='input-group-btn'
										style={{ width: "0px" }}
									></span>
									<input
										type='text'
										className='form-control'
										placeholder='Where? e.g Toronto'
									/>
									<span className='input-group-btn'>
										<button className='btn btn-search' type='button'>
											<i className='material-icons'>search</i>
										</button>
									</span>
								</div>
							</form>
						</div>
					</div>
				</nav>
				{/* <!--msb: main sidebar--> */}
				<div className='msb' id='msb'>
					<nav className='navbar navbar-default' role='navigation'>
						{/* <!-- Brand and toggle get grouped for better mobile display --> */}
						<div className='navbar-header'>
							<div className='brand-wrapper'>
								{/* <!-- Brand --> */}
								<div className='brand-name-wrapper text-center'>
									<a className='' href='#'>
										<img src={logo} className='logo' alt='' />
									</a>
								</div>
							</div>
						</div>
						{/* <!-- Main Menu --> */}
						<div className='side-menu-container'>
							<ul className='nav navbar-nav'>
								<li>
									<a href='#'>
										<i className='material-icons'>home</i> Home
									</a>
								</li>
								<li className='active'>
									<a href='#'>
										<i className='material-icons'>list</i> Listing
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='material-icons'>bookmark_border</i> Perks
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='material-icons'>bar_chart</i> Statistics
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='material-icons'>insert_photo</i> Gallery
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='material-icons'>book</i> Knowledge
									</a>
								</li>
								<li>
									<a href='#'>
										<i className='material-icons'>person</i> Account
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- /.navbar-collapse --> */}
					</nav>
				</div>
				{/* <!--main content wrapper--> */}
				<div className='mcw'>
					{/* <!--navigation here--> */}
					{/* <!--main content view--> */}
					<div className='row top-searching'>
						<div className='col-md-5 col-lg-6'>
							<div className='filterLeft'>
								<h4>Food & Dining in New York</h4>
								<div className=''>
									<div className='pull-left'>
										<div className='dropdown'>
											<button
												id='dLabel'
												className='dropdown-select'
												type='button'
												data-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='false'
											>
												Most Reviewed
												<span className='caret'></span>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dLabel'>
												<li>Option 1</li>
												<li>Option 2</li>
												<li>Option 3</li>
											</ul>
										</div>
									</div>
									{/* <!-- col --> */}
									<div className='pull-left'>
										<div className='dropdown'>
											<button
												id='dLabel2'
												className='dropdown-select'
												type='button'
												data-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='false'
											>
												Open Now
												<span className='caret'></span>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dLabel2'>
												<li>Option 1</li>
												<li>Option 2</li>
												<li>Option 3</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- filterLeft --> */}
						</div>
						{/* <!-- col --> */}
						<div className='col-md-7 col-lg-6'>
							<div className='filterRight'>
								<ul className='menuDeals hidden-xs'>
									<li>
										<a href=''>
											<span className='material-icons'>restaurant_menu</span>
											Break Fast
										</a>
									</li>
									<li className='active'>
										<a href=''>
											{/* <!-- <img src="images/lunch-active.svg" alt=""> --> */}
											<span className='material-icons'>set_meal</span>
											Lunch Meal
										</a>
									</li>
									<li>
										<a href=''>
											{/* <!-- <img src="images/dinner.svg" alt="">  --> */}
											<span className='material-icons'>food_bank</span>
											Dinner Meal
										</a>
									</li>
								</ul>
								<div className='filterLeft'>
									<div className='pull-left'>
										<div className='dropdown'>
											<button
												id='dLabel3'
												className='dropdown-select'
												type='button'
												data-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='false'
											>
												Rating
												<span className='caret'></span>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dLabel3'>
												<li>Option 1</li>
												<li>Option 2</li>
												<li>Option 3</li>
											</ul>
										</div>
									</div>
									{/* <!-- col --> */}
									<div className='pull-left'>
										<div className='dropdown'>
											<button
												id='dLabel4'
												className='dropdown-select'
												type='button'
												data-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='false'
											>
												Price
												<span className='caret'></span>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dLabel4'>
												<li>Option 1</li>
												<li>Option 2</li>
												<li>Option 3</li>
											</ul>
										</div>
									</div>
									<div className='pull-left'>
										<div className='dropdown'>
											<button
												id='dLabel5'
												className='dropdown-select'
												type='button'
												data-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='false'
											>
												Restaurant
												<span className='caret'></span>
											</button>
											<ul className='dropdown-menu' aria-labelledby='dLabel5'>
												<li>Option 1</li>
												<li>Option 2</li>
												<li>Option 3</li>
											</ul>
										</div>
									</div>
								</div>
								<ul className='menuDeals menuDealsMob visible-xs'>
									<li>
										<a href=''>
											<img src={breakfast} alt='' /> Break Fast
										</a>
									</li>
									<li className='active'>
										<a href=''>
											<img src={lunchActive} alt='' /> Lunch Meal
										</a>
									</li>
									<li>
										<a href=''>
											<img src={dinner} alt='' /> Dinner Meal
										</a>
									</li>
								</ul>
							</div>
							{/* <!-- filterRight--> */}
							<div className='clearfix'></div>
						</div>
						{/* <!-- col --> */}
					</div>
					{/* <!-- row --> */}
					<div className='owl-carousel owl-theme'>
						<div className='owl-item active'>
							<div className='item'></div>
							<div className='slider-product'>
								<p>
									<img src={pic1} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										{/* <!-- <span className="material-icons">
                           favorite_border
                           </span> --> */}
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						{/* <!-- item --> */}
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic2} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic3} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic4} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic1} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic3} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- row --> */}
					<h4 className='meals-heading'>Lunch Meals</h4>
					<div className='owl-carousel owl-theme'>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic1} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						{/* <!-- item --> */}
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic2} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic3} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic4} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic1} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='slider-product'>
								<p>
									<img src={pic3} />
								</p>
								<div className='product-description'>
									<p className='heartbtn'>
										<span className='material-icons'>favorite_border</span>
									</p>
									<h3>Moon Room Cafe</h3>
									<p>
										Takeout, Reservations, Seating, Waitstaff, Serves Alcohol,
										Wine and Beer.
									</p>
									<div className='pull-left'>
										<p className='orangeStar'>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
											<span className='material-icons'>star</span>
										</p>
									</div>
									<div className='pull-right'>
										<p>
											<a href=''> Order Now </a>
										</p>
									</div>
									<div className='clearfix'></div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- row --> */}
				</div>
				{/* <!-- partial --> */}
				{/* <!-- sidebar --> */}
			</div>
		);
	}
}

export default Body;
