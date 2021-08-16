<?php
$conn = new mysqli("localhost", "root", "", "survey");
$answer = $_GET['choose'];
$second = $_GET['b'];
$forth = $_GET['d'];
$fifth = $_GET['e'];
$sixth = $_GET['f'];
$seventh = $_GET['g'];
$eight = $_GET['h'];
$gender = $_GET['gender'];
$age = $_GET['age'];
$area = $_GET['area'];
$residency = $_GET['residency'];
if ($conn->connect_error) {
   die('Connection Failed: ' . $conn->connect_error);
} else {
   $query = "INSERT INTO surveydata (gender,age,area,residency) VALUES ('$gender','$age','$area','$residency')";
   $query_run = mysqli_query($conn, $query);
   foreach ($answer as $items) {
      $query = "INSERT INTO surveydata (firs) VALUES ('$items')";
      $query_run = mysqli_query($conn, $query);
   }
   $query = "INSERT INTO surveydata(second) VALUES ('$second')";
   $query_run = mysqli_query($conn, $query);
   foreach ($forth as $fdata) {
      $query = "INSERT INTO surveydata(forth) VALUES ('$fdata')";
      $query_run = mysqli_query($conn, $query);
   }
   $query = "INSERT INTO surveydata(fifth) VALUES ('$fifth')";
   $query_run = mysqli_query($conn, $query);
   foreach ($sixth as $sdata) {
      $query = "INSERT INTO surveydata (sixth) VALUES ('$sdata')";
      $query_run = mysqli_query($conn, $query);
   }
   $query = "INSERT INTO surveydata (seventh) VALUES ('$seventh')";
   $query_run = mysqli_query($conn, $query);
   foreach($eight as $edata){
      $query = "INSERT INTO surveydata (eight) VALUES ('$edata')";
      $query_run = mysqli_query($conn, $query);
   }
   
   if ($query_run) {
      echo "Registration Successfull";
   } else {
      echo "Registration UnSuccessfull";
   }
}
