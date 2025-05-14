<?php
$link = mysqli_connect('localhost', 'root', '', 'mybase');



$nom = $_POST['Last_name'];
$prenom = $_POST['first_name'];
$email = $_POST['Email'];
$Tel = $_POST['Telephone'];
$age = $_POST['Age'];
$wilaya= $_POST['wilaya'];
$adress = $_POST['Adresse'];
$pass = $_POST['password'];
$gender = $_POST['gender'];

$sql = "INSERT INTO base_client (Id_Clt ,no_Clt, Pno_Clt, Mail_Clt, Tel_Clt, Age_Clt, Wi_Clt,Adr_Clt, Mot_Clt, Sexe_Clt) 
        VALUES ('','$nom', '$prenom', '$email', '$Tel', $age,'$wilaya', '$adress', '$pass', '$gender')";

if (mysqli_query($link, $sql)) {
    echo "Registration successful!";
} else {
    echo "Error: " . mysqli_error($link);
}

mysqli_close($link);
?>
