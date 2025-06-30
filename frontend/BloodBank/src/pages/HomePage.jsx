import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

export default function HomePage() {
  const { loading, error, user } = useSelector((s) => s.auth);
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  // redirect once after mount, not inside render
  useEffect(() => {
    if (user?.role === "admin") navigate("/admin");
  }, [user, navigate]);

  // fetch inventory
  useEffect(() => {
    (async () => {
      try {
        const res = await API.get("/inventory/get-inventory");
        if (res.data.success) setInventory(res.data.inventory);
      } catch (err) {
        console.error("get-inventory error:", err.message);
      }
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <Layout>
      {error && <span className="text-danger">{error}</span>}

      <div className="container">
        <h4
          className="ms-4"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-plus text-success py-4"></i> Add Inventory
        </h4>

        <table className="table">
          <thead>
            <tr><th>Group</th><th>Type</th><th>Qty (ML)</th><th>Email</th><th>Date</th></tr>
          </thead>
          <tbody>
            {inventory.map((rec) => (
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

        <Modal />
      </div>
    </Layout>
  );
}
