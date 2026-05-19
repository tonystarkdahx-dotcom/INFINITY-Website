<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$servername = "localhost";
$username = "root"; // Change to 'contact' if using the new user
$password = ""; // Add your password here if needed
$dbname = "contact_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user input
    $firstName = $conn->real_escape_string($_POST['fname']);
    $lastName = $conn->real_escape_string($_POST['lname']);
    $email = $conn->real_escape_string($_POST['email']);
    $subject = $conn->real_escape_string($_POST['text1']);
    $message = $conn->real_escape_string($_POST['message']);

    // Insert data into the database
    $sql = "INSERT INTO submissions (first_name, last_name, email, subject, message)
            VALUES ('$firstName', '$lastName', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you! Your message has been successfully submitted.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
