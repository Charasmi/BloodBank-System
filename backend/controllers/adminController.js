const userModel = require("../models/userModel");

// GET Donor List
const getDonorsListController = async (req, res) => {
  try {
    const donors = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      totalCount: donors.length,
      message: "Donor list fetched successfully",
      donors,
    });
  } catch (error) {
    console.error("Donor list error:", error);
    res.status(500).json({
      success: false,
      message: "Error in Donor List API",
    });
  }
};

// GET Hospital List
const getHospitalListController = async (req, res) => {
  try {
    const hospitals = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      totalCount: hospitals.length,
      message: "Hospital list fetched successfully",
      hospitals,
    });
  } catch (error) {
    console.error("Hospital list error:", error);
    res.status(500).json({
      success: false,
      message: "Error in Hospital List API",
    });
  }
};

// GET Organisation List
const getOrgListController = async (req, res) => {
  try {
    const organisations = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      totalCount: organisations.length,
      message: "Organisation list fetched successfully",
      organisations,
    });
  } catch (error) {
    console.error("Org list error:", error);
    res.status(500).json({
      success: false,
      message: "Error in Organisation List API",
    });
  }
};

// DELETE Donor by ID
const deleteDonarController = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Record deleted successfully",
    });
  } catch (error) {
    console.error("Delete donor error:", error);
    res.status(500).json({
      success: false,
      message: "Error while deleting user",
    });
  }
};

module.exports = {
  getDonorsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
};
