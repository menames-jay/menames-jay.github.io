<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newUsername = $_POST["new-username"];
    $newPassword = $_POST["new-password"]; // Plain text password

    // Hash the password before storing it
    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    // Connect to the database
    $conn = new mysqli("localhost", "username", "password", "database_name");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert new user into database
    $sql = "INSERT INTO users (username, password) VALUES ('$newUsername', '$hashedPassword')";

    if ($conn->query($sql) === TRUE) {
        echo "Signup successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
</head>
<body>
    <h2>Signup</h2>
    <form method="post" action="">
        <input type="text" name="new-username" placeholder="New Username" required><br>
        <input type="password" name="new-password" placeholder="New Password" required><br>
        <input type="submit" value="Signup">
    </form>
</body>
</html>
