CREATE TABLE IF NOT EXISTS users(
  id_user UUID UNIQUE NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  hashedPassword TEXT NOT NULL,
  CONSTRAINT chk_email CHECK ( email LIKE '%@%' )
)
