import React, { useEffect, useState } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const colors = ["#884A39", "#C38154", "#FFC26F", "#4F709C", "#4942E4", "#0079FF", "#FF0060", "#22A699"];

export default function Analytics() {
  const [bloodGroupStats, setBloodGroupStats] = useState([]);
  const [recentInventory, setRecentInventory] = useState([]);

  // ① blood‑group aggregates
  useEffect(() => {
    (async () => {
      try {
        const res = await API.get("/analytics/bloodGroups-data");
        if (res.data.success) setBloodGroupStats(res.data.bloodGroupData);
      } catch (err) {
        console.error("bloodGroups-data error:", err.message);
      }
    })();
  }, []);

  // ② last 3 transactions
  useEffect(() => {
    (async () => {
      try {
        const res = await API.get("/inventory/get-recent-inventory");
        if (res.data.success) setRecentInventory(res.data.inventory);
      } catch (err) {
        console.error("recent-inventory error:", err.message);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      {/* blood group cards */}
      <div className="d-flex flex-row flex-wrap">
        {bloodGroupStats.map((rec, i) => (
          <div key={i} className="card m-2 p-1" style={{ width: 260, background: colors[i % colors.length] }}>
            <div className="card-body">
              <h3 className="card-title bg-light text-dark text-center mb-2">{rec.bloodGroup}</h3>
              <p>Total In : <b>{rec.totalIn}</b> ML</p>
              <p>Total Out: <b>{rec.totalOut}</b> ML</p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Available : <b>{rec.availableBlood}</b> ML
            </div>
          </div>
        ))}
      </div>

      {/* recent transactions */}
      <div className="container my-4">
        <h2>Recent Blood Transactions</h2>
        <table className="table">
          <thead>
            <tr><th>Group</th><th>Type</th><th>Qty (ML)</th><th>Email</th><th>Date</th></tr>
          </thead>
          <tbody>
            {recentInventory.map((rec) => (
              <tr key={rec._id}>
                <td>{rec.bloodGroup}</td>
                <td>{rec.inventoryType}</td>
                <td>{rec.quantity}</td>
                <td>{rec.email}</td>
                <td>{moment(rec.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
