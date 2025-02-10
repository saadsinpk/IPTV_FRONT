// import React, { useState, useEffect, useMemo } from "react";
// import { Layout, Menu } from "antd";
// import MainIcon from "../assets/BeautyParlour.png";
// import { DashboardOutlined } from "@ant-design/icons";
// import { BiSliderAlt } from "react-icons/bi";
// import { TfiWorld } from "react-icons/tfi";
// import { RiAdminLine, RiPagesLine } from "react-icons/ri";
// import { AiOutlineMedicineBox } from "react-icons/ai";
// import {
//   FaCashRegister,
//   FaChartBar,
//   FaClipboardList,
//   FaCreditCard,
//   FaDollarSign,
//   FaWallet,
// } from "react-icons/fa";
// import { FaMoneyBillWave, FaTruck } from "react-icons/fa"; // Import relevant icons

// import { TbCategory, TbCategoryFilled } from "react-icons/tb";
// import { FaRegListAlt, FaRegUser, FaQuestionCircle } from "react-icons/fa";
// import {
//   MdSubscriptions,
//   MdOutlineLocalOffer,
//   MdDesignServices,
// } from "react-icons/md";
// import { FaRegNoteSticky } from "react-icons/fa6";
// import { GrContactInfo } from "react-icons/gr";
// import { IoIosPeople } from "react-icons/io";
// import { PiUserListBold, PiLinkSimpleBold } from "react-icons/pi";
// import { IoPeopleOutline } from "react-icons/io5";
// import { BiSolidOffer } from "react-icons/bi";
// import { BsClipboard2Check } from "react-icons/bs";
// import { Route, Routes, useNavigate, useLocation } from "react-router-dom";


// const { Sider } = Layout;

// const MainDashboard = () => {
//   const navig = useNavigate();
//   const location = useLocation();
//   const [openKeys, setOpenKeys] = useState(["dashboard"]);
//   const [selectedKeys, setSelectedKeys] = useState(["dashboard"]);
//   const [collapsed, setCollapsed] = useState(false);
//   const [buttonClickOpen, setButtonClickOpen] = useState(false);

//   let nav = useMemo(
//     () => [
//       {
//         mainitem: {
//           name: "Admin",
//           icon: <RiAdminLine />,
//         },
//         item1: {
//           name: "Admin List",
//           key: "/dashboard/adminlist",
//           icon1: <FaClipboardList />,
//         },
//       },

//       {
//         mainitem: {
//           name: "Partners",
//           icon: <IoPeopleOutline />,
//         },
//         item1: {
//           name: "Partner List",
//           key: "/dashboard/partnerlist",
//           icon1: <IoPeopleOutline />,
//         },
//       },
//       {
//         mainitem: {
//           name: "User",
//           icon: <FaRegUser />,
//         },
//         item1: {
//           name: "User List",
//           key: "/dashboard/userlist",
//           icon1: <PiUserListBold />,
//         },
//         item2: {
//           name: "User Report",
//           key: "/dashboard/userreport",
//           icon2: <FaChartBar />, // Updated icon for better representation
//         },
//       },

//       // {
//       //     mainitem: {
//       //         name: "Saloon",
//       //         icon: <RxScissors />
//       //     },
//       //     item1: {
//       //         name: "Saloon List",
//       //         key: "/dashboard/saloonlist",
//       //         icon1: <RxScissors />
//       //     }
//       // },
//       {
//         mainitem: {
//           name: "Bookings",
//           icon: <FaClipboardList />,
//         },
//         item1: {
//           name: "Bookings List",
//           key: "/dashboard/bookingslist",
//           icon1: <FaClipboardList />,
//         },
//       },
//       {
//         mainitem: {
//           name: "Service",
//           icon: <MdDesignServices />,
//         },
//         item1: {
//           name: "Service List",
//           key: "/dashboard/servicelist",
//           icon1: <MdDesignServices />,
//         },
//       },
//       {
//         mainitem: {
//           name: "Promo",
//           icon: <MdOutlineLocalOffer />,
//         },
//         item1: {
//           name: "Promo List",
//           key: "/dashboard/promolist",
//           icon1: <BiSolidOffer />,
//         },
//         item2: {
//           name: "Cash Back Voucher",
//           icon2: <MdOutlineLocalOffer />,
//           key: "/dashboard/cashbackvoucherlist",
//         },
//       },
//       {
//         mainitem: {
//           name: "Category",
//           icon: <TbCategory />,
//         },
//         item1: {
//           name: "Category List",
//           key: "/dashboard/categorylist",
//           icon1: <TbCategoryFilled />,
//         },
//       },
//       {
//         mainitem: {
//           name: "Treatment",
//           icon: <AiOutlineMedicineBox />,
//         },
//         item1: {
//           name: "Treatment List",
//           key: "/dashboard/treatmentlist",
//           icon1: <FaClipboardList />,
//         },
//       },
//       // {
//       //   mainitem: {
//       //     name: "Client",
//       //     icon: <BsClipboard2Check />,
//       //   },
//       //   item1: {
//       //     name: "Client List",
//       //     key: "/dashboard/clientlist",
//       //     icon1: <BsClipboard2Check />,
//       //   },
//       // },
//       {
//         mainitem: {
//           name: "Financial Report",
//           icon: <FaMoneyBillWave />,
//         },
//         item1: {
//           name: "Financial Report",
//           key: "/dashboard/financialreport",
//           icon1: <FaMoneyBillWave />,
//         },
//         item2: {
//           name: "Pay on Cash",
//           key: "/dashboard/payoncash",
//           icon2: <FaWallet />, // FaWalle t is suitable for cash-related functionality
//         },
//       },

//       {
//         mainitem: {
//           name: "Uber Report",
//           icon: <FaMoneyBillWave />,
//         },
//         item1: {
//           name: "Delivery Tracking",
//           key: "/dashboard/uberreport",
//           icon1: <FaTruck />,
//         },
//         item2: {
//           name: "Uber Delivery Summary",
//           key: "/dashboard/UberDeliverySummary",
//           icon2: <FaMoneyBillWave />,
//         },
//         item3: {
//           name: "Uber Payment",
//           key: "/dashboard/uberpayment",
//           icon3: <FaCreditCard />,
//         },
//         item4: {
//           name: "Total Payments",
//           key: "/dashboard/totalpayments", // A route or page that shows the total payments
//           icon4: <FaDollarSign />, // A relevant icon for payments, like FaDollarSign
//         },
//       },
//     ],
//     []
//   );

//   const toggleCollapsed = () => {
//     setButtonClickOpen(!buttonClickOpen);
//     setCollapsed(!collapsed);
//   };

//   const navItem = (key) => {
//     setSelectedKeys([key]);
//     navig(key);
//   };

//   const handleOpenChange = (keys) => {
//     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
//     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//   };

//   useEffect(() => {
//     const currentKey = location.pathname;
//     setSelectedKeys([currentKey]);
//     const parentKey = nav.find(
//       (item) =>
//         item.item1.key ||
//         item.item2.key === currentKey ||
//         (item.item1 &&
//           item.item1.key &&
//           item.item2 &&
//           item.item2.key === currentKey)
//     )?.mainitem.key;
//     if (parentKey) {
//       setOpenKeys([parentKey]);
//     } else {
//       setOpenKeys([]);
//     }
//   }, [location.pathname, nav]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         minWidth: "100vw",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Layout style={{ flex: 1 }}>
//         <Sider
//           width={collapsed ? 60 : 250}
//           collapsed={collapsed}
//           onCollapse={toggleCollapsed}
//           style={{
//             backgroundColor: "#DADADA",
//             minHeight: "100vh",
//             overflowY: "auto",
//           }}
//           theme="dark"
//         >
//           <div
//             className="logo"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               width: "100%",
//             }}
//             onClick={() => navItem("")}
//           >
//             <img src={MainIcon} alt="" width={80} height={170} />
//           </div>
//           <Menu
//             style={{
//               backgroundColor: "#DADADA",
//               color: "#000",
//               fontSize: "20px",
//             }}
//             mode="inline"
//             openKeys={openKeys}
//             onOpenChange={handleOpenChange}
//             selectedkeys={selectedKeys}
//             collapsed={collapsed ? "true" : "false"}
//           >
//             <Menu.Item
//               onClick={() => navItem("")}
//               key="dashboard"
//               className="dashboard"
//               icon={<DashboardOutlined />}
//               selectedkeys={selectedKeys}
//               style={{
//                 backgroundColor: selectedKeys.includes("dashboard")
//                   ? "#000"
//                   : "#DADADA",
//                 color: selectedKeys.includes("dashboard") ? "#000" : "#000",
//               }}
//             >
//               {"Dashboard"}
//             </Menu.Item>

//             {nav.map((item, index) => (
//               <Menu.SubMenu
//                 key={`submenu-${index}`}
//                 icon={item.mainitem.icon}
//                 className="dashboard"
//                 title={!collapsed && item.mainitem.name}
//                 style={{
//                   backgroundColor: openKeys.includes(item.mainitem.key)
//                     ? "#000" // Black background for open submenu
//                     : "#DADADA",
//                   color: selectedKeys.includes(item.mainitem.key)
//                     ? "#FFF" // White text color when submenu item is selected
//                     : "#000",
//                 }}
//               >
//                 {/* Loop through each item (item1 to item11) and render it only if it exists */}
//                 {[
//                   item.item1,
//                   item.item2,
//                   item.item3,
//                   item.item4,
//                   item.item5,
//                   item.item6,
//                   item.item7,
//                   item.item8,
//                   item.item9,
//                   item.item10,
//                   item.item11,
//                 ].map(
//                   (subItem, idx) =>
//                     subItem && (
//                       <Menu.Item
//                         key={subItem.key}
//                         icon={
//                           subItem.icon ||
//                           subItem.icon1 ||
//                           subItem.icon2 ||
//                           subItem.icon3 ||
//                           subItem.icon4 ||
//                           subItem.icon5 ||
//                           subItem.icon6 ||
//                           subItem.icon7 ||
//                           subItem.icon8 ||
//                           subItem.icon9 ||
//                           subItem.icon10 ||
//                           subItem.icon11
//                         }
//                         className="dashboard"
//                         onClick={() => navItem(subItem.key)}
//                         style={{
//                           backgroundColor: selectedKeys.includes(subItem.key)
//                             ? "#000" // Black background when item is selected
//                             : "#DADADA",
//                           color: selectedKeys.includes(subItem.key)
//                             ? "#FFF" // White text color when item is selected
//                             : "#000",
//                           fontSize: selectedKeys.includes(subItem.key)
//                             ? "17px"
//                             : "17px",
//                         }}
//                       >
//                         {subItem.name}
//                       </Menu.Item>
//                     )
//                 )}
//               </Menu.SubMenu>
//             ))}
//           </Menu>
//         </Sider>
//         <Layout>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <SubMainDashboard
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="admindetails/:id"
//               element={
//                 <AdminDetails
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="adminlist"
//               element={
//                 <AdminList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editadmin/:id"
//               element={
//                 <EditAdmin setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="createadmin"
//               element={
//                 <CreateAdmin
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="userlist"
//               element={
//                 <UserList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="userreport"
//               element={
//                 <UserReports
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="clientlist"
//               element={
//                 <ClientList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editclient/:id"
//               element={
//                 <EditClient setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="createclient"
//               element={
//                 <EditClient setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="saloonlist"
//               element={
//                 <SaloonList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="EditPartner"
//               element={
//                 <EditDetail setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="servicelist"
//               element={
//                 <ServiceList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="promolist"
//               element={
//                 <PromoList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="cashbackvoucherlist"
//               element={
//                 <CashBackVoucher
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="createcashback"
//               element={
//                 <CashBack setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="pagelist"
//               element={
//                 <PageList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editpage/:id"
//               element={
//                 <EditPage setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="categorylist"
//               element={
//                 <CartegoryList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="treatmentlist"
//               element={
//                 <TreatmentList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="createcategory"
//               element={
//                 <EditCategory
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="createtreatment"
//               element={
//                 <EditTreatment
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="edittreatment/:id"
//               element={
//                 <EditTreatment
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="editCategory/:id"
//               element={
//                 <EditCategory
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="partnerlist"
//               element={
//                 <PartnerList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="partnerdetail/:id"
//               element={
//                 <PartnerDetail
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="teamlist"
//               element={
//                 <TeamList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editteam/:id"
//               element={
//                 <EditTeam setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="createteam"
//               element={
//                 <EditTeam setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="contactlist"
//               element={
//                 <ContactList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="faqlist"
//               element={
//                 <FAQsList setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editfaq/:id"
//               element={
//                 <EditFAQs setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="createfaq"
//               element={
//                 <EditFAQs setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="testinomiallist"
//               element={
//                 <TestimonialList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="edittestinomial/:id"
//               element={
//                 <EditTestinomial
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="createtestinomial"
//               element={
//                 <EditTestinomial
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="subscriptionlist"
//               element={
//                 <SubscriptionList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="createsubscription"
//               element={
//                 <EditSubscription
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="sociallinkslist"
//               element={
//                 <SocialLinks
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="createsociallinks"
//               element={
//                 <EditSocialLinks
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="editsociallinks/:id"
//               element={
//                 <EditSocialLinks
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="applinkslist"
//               element={
//                 <AppLinks setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editapplinks/:id"
//               element={
//                 <EditAppLinks
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="footer"
//               element={
//                 <Footer setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="editfooter/:id"
//               element={
//                 <EditFooter setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />

//             <Route
//               path="discover"
//               element={
//                 <Discover setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="creatediscover"
//               element={
//                 <EditDiscover
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="editdiscover/:id"
//               element={
//                 <EditDiscover
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="homeslider"
//               element={
//                 <HomeSlider setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="edithomesliderimages"
//               element={
//                 <EditHomeSlider
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="addhomesliderimages"
//               element={
//                 <EditHomeSlider
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="financialreport"
//               element={
//                 <FinancialReport
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="payoncash"
//               element={
//                 <PayOnCash setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="uberreport"
//               element={
//                 <UberDetail setCollapsed={setCollapsed} collapsed={collapsed} />
//               }
//             />
//             <Route
//               path="UberDeliverySummary"
//               element={
//                 <UberDeliverySummary
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="uberpayment"
//               element={
//                 <UberPayment
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//             <Route
//               path="totalpayments"
//               element={
//                 <TotalUberPayments
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />

//             <Route
//               path="bookingslist"
//               element={
//                 <BookingsList
//                   setCollapsed={setCollapsed}
//                   collapsed={collapsed}
//                 />
//               }
//             />
//           </Routes>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };

// export default MainDashboard;


import React from 'react'

const MainDashboard = () => {
  return (
    <div>MainDashboard</div>
  )
}

export default MainDashboard