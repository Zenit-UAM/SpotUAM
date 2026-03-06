import "dotenv/config";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { UserRepository } from "./validator.js";
// PRUEBA DE CONTROL (Míralo en tu terminal Warp)
console.log(
  "¿Llave cargada?:",
  process.env.ACCESS_SECRET_JWT_KEY ? "SÍ" : "NO",
);
const app = express();

// 2. Configura el middleware de CORS
app.use(
  cors({
    origin: "http://localhost:5173", // La URL de tu frontend de Vite
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(authHydrate);

function requireAuth(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.status(403).send("Access not authorized");
  }
  next();
}

function authHydrate(req, res, next) {
  const token = req.cookies.access_token; // ✅ corregido
  req.session = { user: null };

  if (token) {
    try {
      const data = jwt.verify(token, process.env.ACCESS_SECRET_JWT_KEY);
      req.session.user = data;
    } catch (error) {
      // token inválido, no pasa nada
    }
  }
  next();
}

app.get("/", authHydrate, (req, res) => {
  const { user } = req.session;
  res.render("index", user);
});

app.post("/register", async (req, res) => {
  const { username, email, password,studentID } = req.body; // se lee el body con la informacion paa mandar a la BD
  try {
    const user = await UserRepository.create({ username, email, password,studentID });
    // La base de datos regresa el id,username e email
    console.log("Nuevo usuario creado con exito");
    // res.json({user.id_user, user.username, user.email})
    res.json({ id: user.id_user, username: user.username, studentID: user.studentID,email: user.email });
    console.log(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Se intenta logear al usuario
    // Se verica sus credenciales, regresa al usuario completo menos su password
    const user = await UserRepository.login({ email, password });
    // Este es el token
    // Se crea el token para la verificacion del usuario
    const accessToken = jwt.sign(
      { id: user.id_user, username: user.username , studentID: user.studentID, email: user.email},
      process.env.ACCESS_SECRET_JWT_KEY,
      {
        expiresIn: "1h",
      },
    );
    // Esta es la cookie, es la que guarda la sesion con el token, la cookie se guarda en el navegador
    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 2000,
      })
      .status(201)
      .json({
        user: user,
      });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.post("/logout", requireAuth, async (req, res) => {
  res.clearCookie("access_token").json({ message: "Logout sucessful" });
});

app.get("/protected", requireAuth, (req, res) => {
  res.send("OK");
});

app.get("/verification", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ ok: false });
  }
  res.json({ ok: true, user: req.session.user });
});

const PORT = process.env.BACKEND_PORT || 3030;

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
