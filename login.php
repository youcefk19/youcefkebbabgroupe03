<?php
<?php
$link = mysqli_connect('localhost', 'root', '', 'mybase');
$email = $_POST['E_mail'];
$mot_passe = $_POST['mot_de_passe'];
$result = mysqli_query($link, "SELECT * FROM base_client WHERE Mail_Clt='$email' AND Mot_Clt='$mot_passe'");

if (mysqli_num_rows($result) > 0) { 
    $ligne = mysqli_fetch_row($result);
    echo("<p> WELCOME $ligne[1] $ligne[2] ! </p>"); 

    // Redirect to index.html
    header("Location: index.html");
    exit(); // Ensure no further code is executed after the redirect
} else {
    echo("<p> E-mail and/or mot de passe INVALID! </p>"); 
}
mysqli_close($link);
?>