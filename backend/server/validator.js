import bcrypt from "bcrypt";
import { pool } from "../database/db.js";

export class UserRepository {
  static async create({ username, email, password }) {
    Validation.username(username);
    Validation.email(email);
    Validation.password(password);

    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    if (userExists.rows.length > 0) throw new Error("Email already exists");

    const id = crypto.randomUUID();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users(id_user, username, email, hashedPassword) VALUES($1,$2,$3,$4) RETURNING id_user, username, email",
      [id, username, email, hashedPassword],
    );
    return newUser.rows[0];
  }

  static async login({ email, password }) {
    Validation.email(email);
    Validation.password(password);

    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (userExists.rows.length === 0) {
      // Corregido: 0 en lugar de 1
      throw new Error("The user doesn't exist");
    }

    const user = userExists.rows[0];

    // 1. Verificamos qué trae el objeto de la DB (para depurar)
    console.log("Datos del usuario desde la DB:", user);

    // 2. Usamos el nombre de columna que Postgres devuelve (usualmente minúsculas)
    // Si en tu tabla es 'hashedpassword', usa user.hashedpassword
    const hash = user.hashedpassword || user.hashedPassword;

    if (!hash) {
      throw new Error(
        "Internal error: Password hash not found in database record",
      );
    }

    const isCorrectPassword = await bcrypt.compare(password, hash);

    if (!isCorrectPassword) throw new Error("Invalid credentials");

    // Quitamos la contraseña del objeto antes de devolverlo
    const {
      hashedpassword: _,
      hashedPassword: __,
      ...userWithoutPassword
    } = user;
    return userWithoutPassword;
  }
}

class Validation {
  static username(username) {
    if (typeof username !== "string") {
      throw new Error("The username must be a string");
    }
    if (username.length < 3) {
      throw new Error("The username must be at least 3 characters long");
    }
  }
  static email(email) {
    if (typeof email !== "string") {
      throw new Error("The email must be a string");
    }
    const regex = /@/;
    if (!regex.test(email)) {
      throw new Error("The email must contain @");
    }
  }
  static password(password) {
    if (typeof password !== "string") {
      throw new Error("The password must be a string");
    }
    // const regex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //
    // if (!regex.test(password)) {
    //   throw new Error(
    //     "La password tiene que tener al menos 8 caracters, mayusculas y minusculas y un caracter especial",
    //   );
    // }
  }
}
