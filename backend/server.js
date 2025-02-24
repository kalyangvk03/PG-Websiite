const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',  // Allow all domains (you can replace '*' with a specific domain if needed)
  credentials: true  // Allow credentials (cookies, etc.) if needed
}));

app.use("/uploads", express.static("uploads")); // Serve uploaded images

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/CrystalRocks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

// ===================== 🏨 Contact Form Schema & API ===================== //
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Contact API to Save Messages
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
});

// ===================== 🏠 Room Booking Schema & API ===================== //
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  roomType: String,
  requiredDate: Date,
  amountPaid: Number,
  paymentProof: String, // Store file path
});

const Booking = mongoose.model("Booking", bookingSchema);

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Booking API with File Upload
app.post("/api/book-room", upload.single("paymentProof"), async (req, res) => {
  try {
    const newBooking = new Booking({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      roomType: req.body.roomType,
      requiredDate: req.body.requiredDate,
      amountPaid: 3000, // Fixed advance payment
      paymentProof: req.file.filename, // Store filename
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving booking" });
  }
});

// API to Fetch All Bookings
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// Customer Schema & Model
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  occupation: { type: String, enum: ["student", "employee"], required: true },
  collegeName: String,
  collegeAddress: String,
  officeName: String,
  officeAddress: String,
  govtIdType: { type: String, required: true },
  govtIdNumber: { type: String, required: true },
  govtIdFile: String,
  photo: String,
});

const Customer = mongoose.model("Customer", customerSchema);

// Customer Registration API
app.post("/api/Customer", upload.fields([{ name: "govtIdFile" }, { name: "photo" }]), async (req, res) => {
  try {
    const { name, mobile, email, address, occupation, collegeName, collegeAddress, officeName, officeAddress, govtIdType, govtIdNumber } = req.body;

    if (!name || !mobile || !email || !address || !occupation || !govtIdType || !govtIdNumber) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    const newCustomer = new Customer({
      name,
      mobile,
      email,
      address,
      occupation,
      collegeName: occupation === "student" ? collegeName : "",
      collegeAddress: occupation === "student" ? collegeAddress : "",
      officeName: occupation === "employee" ? officeName : "",
      officeAddress: occupation === "employee" ? officeAddress : "",
      govtIdType,
      govtIdNumber,
      govtIdFile: req.files["govtIdFile"] ? req.files["govtIdFile"][0].filename : "",
      photo: req.files["photo"] ? req.files["photo"][0].filename : "",
    });

    await newCustomer.save();
    res.status(201).json({ message: "Customer registered successfully!" });
  } catch (error) {
    console.error("Error registering customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API to Fetch All Customers
app.get("/api/Customer", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ===================== 🚀 Start Server ===================== //
app.listen(5000, '0.0.0.0', () => console.log("Server is running"));
