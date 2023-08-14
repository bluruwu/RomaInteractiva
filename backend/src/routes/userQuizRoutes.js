const express = require("express");
const router = express.Router();
const { sendGrade, getGrades } = require("../controllers/userQuizController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/enviarevaluacion", verifyToken, sendGrade);
router.get("/calificaciones", verifyToken, getGrades);

module.exports = router;
