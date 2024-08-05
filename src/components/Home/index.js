import Header from "../Header";
import Tabs from "../Tabs";
import {
  FaChartPie,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaRegMoneyBillAlt
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./index.css";

const data = [
  { name: "5", uv: 5000 },
  { name: "6", uv: 3000 },
  { name: "7", uv: 2000 },
  { name: "8", uv: 8000 },
  { name: "9", uv: 6000 },
  { name: "10", uv: 2000 },
  { name: "11", uv: 1000 },
  { name: "12", uv: 3000 },
  { name: "13", uv: 4000 },
  { name: "14", uv: 2000 },
  { name: "15", uv: 5000 },
  { name: "16", uv: 6000 },
  { name: "17", uv: 3000 },
  { name: "18", uv: 2000 },
  { name: "19", uv: 7000 },
  { name: "20", uv: 10000 },
  { name: "21", uv: 15000 },
  { name: "22", uv: 10000 },
  { name: "23", uv: 7000 },
  { name: "24", uv: 3000 },
  { name: "25", uv: 8000 },
  { name: "26", uv: 6000 },
  { name: "27", uv: 4000 },
];
const formatYAxis = (tick) => {
  return `${tick / 1000}k`;
};

const orders = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
    image: "https://i.pravatar.cc/150?img=6",
  },
];

const Home = () => (
  <div className="container">
    <div>
      <Header />
      <div className="tab-home-container">
        <Tabs />
        <div className="dashboard-container">
          <div className="home-content">
            <h1 className="home-heading">Dashboard</h1>
            <div className="top-section">
              <div className="stat-card">
                <FaChartPie className="stat-icon" />
                <h2>Total Orders</h2>
                <div className="stat">
                  <p>75</p>
                  <div className="stat-change-profit">▲3%</div>
                </div>
              </div>
              <div className="stat-card">
                <FaRegCheckCircle className="stat-icon" />
                <h2>Total Delivered</h2>
                <div className="stat">
                  <p>70</p>
                  <div className="stat-change-loss">▼3%</div>
                </div>
              </div>
              <div className="stat-card">
                <FaRegTimesCircle className="stat-icon" />
                <h2>Total Cancelled</h2>
                <div className="stat">
                  <p>05</p>
                  <div className="stat-change-profit">▲3%</div>
                </div>
              </div>
              <div className="stat-card">
                <FaRegMoneyBillAlt className="stat-icon" />
                <h2>Total Revenue</h2>
                <div className="stat">
                  <p>$12k</p>
                  <div className="stat-change-loss">▼3%</div>
                </div>
              </div>
              <div className="stat-card2">
                <div>
                  <h2>Net Profit</h2>
                  <p>$ 6759.25</p>
                  <div className="stat-change-profit">▲3%</div>
                </div>
                <div className="progress-container">
                  <div className="progress-circle">
                    <svg className="progress-svg" viewBox="0 0 36 36">
                      <path
                        className="progress-bg"
                        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="progress-bar"
                        strokeDasharray={`70, 100`}
                        d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="progress-text">
                      <strong>70%</strong>
                      <span>Goal Completed</span>
                    </div>
                  </div>
                  <span className="goal-text">
                    *The values here has been rounded off.
                  </span>
                </div>
              </div>
            </div>
            <div className="top-section">
              <div className="activity-chart-container">
                <div className="header">
                  <h2>Activity</h2>
                  <div className="dropdown">
                    Weekly <span>▼</span>
                  </div>
                </div>
                <ResponsiveContainer width="110%" height={150}>
                  <BarChart
                    data={data}
                    margin={{ top: 0, right: 45, left: -50, bottom: 0 }}
                  >
                    <CartesianGrid
                      stroke="#8884d8"
                      strokeDasharray="0"
                      horizontal={true}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#8884d8"
                      className="x-axis"
                      ticks={[
                        "5",
                        "7",
                        "9",
                        "11",
                        "13",
                        "15",
                        "17",
                        "19",
                        "21",
                        "23",
                        "25",
                        "27",
                      ]}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#8884d8"
                      className="y-axis"
                      ticks={[0, 5000, 10000, 15000]}
                      tickFormatter={formatYAxis}
                      axisLine={false}
                      tickLine={false}
                    />{" "}
                    <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} />
                    <Bar
                      dataKey="uv"
                      fill="#4e8cff"
                      radius={[10, 10, 10, 10]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="menu-items">
                <div className="menu-item">
                  <div className="menu-icon">
                    <div className="menu-item-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-target"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                    <div className="menu-item-text">Goals</div>
                  </div>
                  <div className="menu-item-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-icon">
                    <div className="menu-item-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-clipboard"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4"></rect>
                      </svg>
                    </div>
                    <div className="menu-item-text">Popular Dishes</div>
                  </div>
                  <div className="menu-item-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-icon">
                    <div className="menu-item-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu"
                      >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="12" y1="3" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div className="menu-item-text">Menus</div>
                  </div>
                  <div className="menu-item-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-section bottom-section">
              <div className="orders-container">
                <h1>Recent Orders</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Order No.</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.orderNo}>
                        <td>
                          <img src={order.image} alt={order.customer} />
                          {order.customer}
                        </td>
                        <td>{order.orderNo}</td>
                        <td>{order.amount}</td>
                        <td>
                          <span
                            className={`status ${order.status.toLowerCase()}`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="feedback-card">
                <div className="header1">
                  <h2>Customer's Feedback</h2>
                </div>
                <div className="feedback-item1 ">
                  <div className="select-cursor">
                  <div className="profile1">
                    <img
                      src="https://i.imgur.com/o5jXv0v.png"
                      alt=""
                    />
                    <p>Jenny Wilson</p>
                    </div>
                    <p className="feedback-cursor"></p>
                  </div>
                  <div className="rating">
                    <span>★★★★★</span>
                  </div>
                  <p className="review">
                    The food was excellent and so was the service. I had the
                    mushroom risotto with scallops which was awesome. I had a
                    burger over greens (gluten-free) which was also very good.
                    They were very conscientious about gluten allergies.
                  </p>
                </div>
                <div className="feedback-item1">
                  <div className="profile1">
                    <img
                      src="https://i.imgur.com/yD2J85A.png"
                      alt=""
                    />
                    <p>Dianne Russell</p>
                  </div>
                  <div className="rating">
                    <span>★★★★★</span>
                  </div>
                  <p className="review">
                    We enjoyed the Eggs Benedict served on homemade focaccia
                    bread and hot coffee. Perfect service
                  </p>
                </div>
                <div className="feedback-item1">
                  <div className="profile1">
                    <img
                      src="https://i.imgur.com/qM6yQzI.png"
                      alt=""
                    />
                    <p>Devon Lane</p>
                  </div>
                  <div className="rating">
                    <span>★★★★★</span>
                  </div>
                  <p className="review">
                    Normally wings are wings, but theirs are lean meaty and
                    tender, and
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
