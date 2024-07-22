//!---------------------------------------------------Getting Students Details By The id's
  //* ----------------------------------------------------------Students Details
  const form = document.querySelector("#form"); //? Form Element
  const studentFirstName = document.querySelector("#student_fname"); //? student First Name
  const studentLastName = document.querySelector("#student_lname"); //? student Last Name
  const studentDateOfbirth = document.querySelector("#student_dob"); //? student Date Of Birth
  const studentMobileNumber = document.querySelector("#student_mobile"); //? student Mobile Number
  const studentGender = document.querySelector("#student_gender"); //? student Gender
  const studentEmail = document.querySelector("#student_email"); //? student Email
  const studentAadhar = document.querySelector("#student_aadhar"); //? student Aadhar
  const studentCaste = document.querySelector("#student_caste"); //? student Caste
  const studentStandard = document.querySelector("#student_standard"); //? student Standard
  const studentSection = document.querySelector("#student_section"); //? student Section
  //* Student Address Details.
  const studentAddress = document.querySelector("#student_address"); //? student Address
  const studentCity = document.querySelector("#student_city"); //? student City
  const studentState = document.querySelector("#student_state"); //? student State
  const studentPinCode = document.querySelector("#student_pincode"); //? student PinCode

//! ---------------------------------------------------Getting The Student Parents Details By Id's
//* ----------------------------------------------------------------Father Details.
const studentFatherName = document.querySelector("#student_fathername"); //? student Father Name
const studentFatherMobileNumber = document.querySelector(
  "#student_fathermobile" //? student Father Mobile Number
);
const studentFatherOccupation = document.querySelector(
  "#student_fatheroccupation" //? student Father Occupation
);
const studentFatherAadharNumber = document.querySelector(
  "#student_fatheraadhar" //? student Father Aadhar Number
);
//* -------------------------------------------------------------------Mother Details.
const studentMotherName = document.querySelector("#student_mothername"); //? student Mother Name
const studentMotherMobileNumber = document.querySelector(
  "#student_mothermobile" //? student Mother Mobile Number
);
const studentMotherOccupation = document.querySelector(
  "#student_motheroccupation" //? student Mother Occupation
);
const studentMotherAadharNumber = document.querySelector(
  "#student_motheraadhar"  //? student Mother Aadhar Number
);

//! ------------------------------------------------------------------Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidityState();
});

//!  -----------------------------------------------------------------Email Validity checking function.
function validateEmail(e) {
  var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email_regex.test(e)) {
    return true;
  } else {
    return false;
  }
}

//! ------------------------------------------------------------------Aadhar-card number validity function.
function validateAadhaar(a) {
  var aadhaar_regex = /^\d{12}$/;
  if (aadhaar_regex.test(a)) {
    return true;
  } else {
    return false;
  }
}

//! ------------------------------------------------------------------Function To Check validity.
function ValidityState() {
  //TODO: --------------------------------------------------------------validating the first name
  if (studentFirstName.value.length == 0) {
    document.querySelector("#student_fname_error").innerHTML =
      "*First Name is Required";
    studentFirstName.style.borderColor = "red";
  } else if (studentFirstName.value == " ") {
    document.querySelector("#student_fname_error").innerHTML =
      "*First Name not be empty.";
    studentFirstName.style.borderColor = "red";
  } else {
    studentFirstName.style.borderColor = "green";
    studentFirstName.style.borderRadius = "15px";
  }

  //TODO: ---------------------------------------------------------------validating the last name
  if (studentLastName.value.length == 0) {
    document.querySelector("#student_lname_error").innerHTML =
      "*Last Name is Required.";
    studentLastName.style.borderColor = "red";
  } else if (studentLastName.value == " ") {
    document.querySelector("#student_lname_error").innerHTML =
      "*Last Name not be empty.";
    studentLastName.style.borderColor = "red";
  } else {
    studentLastName.style.borderColor = "green";
    studentLastName.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the Date Of birth
  if (studentDateOfbirth.value.length == 0) {
    document.querySelector("#student_dob_error").innerHTML =
      "*Date Of Birth is Required";
    studentDateOfbirth.style.borderColor = "red";
  } else if (studentDateOfbirth.value == " ") {
    document.querySelector("#student_dob_error").innerHTML =
      "*Date Of Birth not be empty.";
    studentDateOfbirth.style.borderColor = "red";
  } else {
    studentDateOfbirth.style.borderColor = "green";
    studentDateOfbirth.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the Mobile number
  if (studentMobileNumber.value.length == 0) {
    document.querySelector("#student_mobile_error").innerHTML =
      "*Mobile Number is Required";
    studentMobileNumber.style.borderColor = "red";
  } else if (studentMobileNumber.value == " ") {
    document.querySelector("#student_mobile_error").innerHTML =
      "*Mobile Number not be empty.";
    studentMobileNumber.style.borderColor = "red";
  } else if (studentMobileNumber.value.length < 9) {
    document.querySelector("#student_mobile_error").innerHTML =
      "*Mobile Number must be 10 digits.";
    studentMobileNumber.style.borderColor = "red";
  } else {
    studentMobileNumber.style.borderColor = "green";
    studentMobileNumber.style.borderRadius = "15px";
  }

  //TODO: -----------------------------------------------------------------validating the Gender
  // if (studentGender.options[studentGender.selectedIndex].value === false)
  if (studentGender.value === "") {
    document.querySelector("#student_gender_error").innerHTML =
      "*select the Gender";
    studentGender.style.borderColor = "red";
  } else {
    studentGender.style.borderColor = "green";
    studentGender.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the Email
  if (validateEmail(studentEmail.value)) {
    studentEmail.style.borderColor = "green";
    studentEmail.style.borderRadius = "15px";
  } else {
    document.querySelector("#student_email_error").innerHTML =
      "*Invalid Email Address";
    studentEmail.style.borderColor = "red";
  }

  //TODO: --------------------------------------------------------------validating the Aadhar
  if (validateAadhaar(studentAadhar.value)) {
    studentAadhar.style.borderColor = "green";
    studentAadhar.style.borderRadius = "15px";
  }
  else if (validateAadhaar(studentAadhar.value.length == 0)) {
    document.querySelector("#student_aadhar_error").innerHTML =
      "*Aadhar Number is Required";
    studentAadhar.style.borderColor = "red";
  } else if (validateAadhaar(studentAadhar.value ==='')) {
    document.querySelector("#student_aadhar_error").innerHTML =
      "*Aadhar Number is not empty";
    studentAadhar.style.borderColor = "red";
  }



  //TODO: --------------------------------------------------------------validating the Caste.
  if (studentCaste.value === "") {
    document.querySelector("#student_caste_error").innerHTML =
      "*select the Caste";
    studentCaste.style.borderColor = "red";
  } else {
    studentCaste.style.borderColor = "green";
    studentCaste.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the Standard.
  if (studentStandard.value === "") {
    document.querySelector("#student_standard_error").innerHTML =
      "*Choose the class";
    studentStandard.style.borderColor = "red";
  } else {
    studentStandard.style.borderColor = "green";
    studentStandard.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------Validating the Section.
  if (studentSection.value.length == 0) {
    document.querySelector("#student_section_error").innerHTML =
      "*Section is Required";
    studentSection.style.borderColor = "red";
  } else if (studentSection.value == " ") {
    document.querySelector("#student_section_error").innerHTML =
      "*Section not be empty.";
    studentSection.style.borderColor = "red";
  } else {
    studentSection.style.borderColor = "green";
    studentSection.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the Address.
  if (studentAddress.value.length == 0) {
    document.querySelector("#student_address_error").innerHTML =
      "*Address is Required";
    studentAddress.style.borderColor = "red";
  } else if (studentAddress.value == " ") {
    document.querySelector("#student_address_error").innerHTML =
      "*Address not be empty.";
    studentAddress.style.borderColor = "red";
  } else {
    studentAddress.style.borderColor = "green";
    studentAddress.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the City.
  if (studentCity.value.length == 0) {
    document.querySelector("#student_city_error").innerHTML =
      "*City is Required";
    studentCity.style.borderColor = "red";
  } else if (studentCity.value == " ") {
    document.querySelector("#student_city_error").innerHTML =
      "*City not be empty.";
    studentCity.style.borderColor = "red";
  } else {
    studentCity.style.borderColor = "green";
    studentCity.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the State.
  if (studentState.value === "") {
    document.querySelector("#student_state_error").innerHTML =
      "*Choose the State";
    studentState.style.borderColor = "red";
  } else {
    studentState.style.borderColor = "green";
    studentState.style.borderRadius = "15px";
  }

  //TODO: --------------------------------------------------------------validating the Pincode.
  if (studentPinCode.value.length == 0) {
    document.querySelector("#student_pincode_error").innerHTML =
      "*Pincode is Required";
    studentPinCode.style.borderColor = "red";
  } else if (studentPinCode.value == " ") {
    document.querySelector("#student_pincode_error").innerHTML =
      "*Pincode not be empty.";
    studentPinCode.style.borderColor = "red";
  } else {
    studentPinCode.style.borderColor = "green";
    studentPinCode.style.borderRadius = "15px";
  }
  //* -----------------------------------------father Details validating---------------------------------------
  //TODO: --------------------------------------------------------------validating the father name
  if (studentFatherName.value.length == 0) {
    document.querySelector("#student_fathername_error").innerHTML =
      "*Father Name is Required";
    studentFatherName.style.borderColor = "red";
  } else if (studentFatherName.value == " ") {
    document.querySelector("#student_fathername_error").innerHTML =
      "*Father Name not be empty.";
    studentFatherName.style.borderColor = "red";
  } else {
    studentFatherName.style.borderColor = "green";
    studentFatherName.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the father Mobile Number
  if (studentFatherMobileNumber.value.length == 0) {
    document.querySelector("#student_fathermobile_error").innerHTML =
      "*Mobile Number is Required";
    studentFatherMobileNumber.style.borderColor = "red";
  } else if (studentFatherMobileNumber.value == " ") {
    document.querySelector("#student_fathermobile_error").innerHTML =
      "*Mobile Number not be empty.";
    studentFatherMobileNumber.style.borderColor = "red";
  } else if (studentFatherMobileNumber.value.length < 9) {
    document.querySelector("#student_fathermobile_error").innerHTML =
      "*Mobile Number must be 10 digits.";
    studentFatherMobileNumber.style.borderColor = "red";
  } else {
    studentFatherMobileNumber.style.borderColor = "green";
    studentFatherMobileNumber.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the father occupation
  if (studentFatherOccupation.value.length == 0) {
    document.querySelector("#student_fatheroccupation_error").innerHTML =
      "*Father Occupation is Required";
    studentFatherOccupation.style.borderColor = "red";
  } else if (studentFatherOccupation.value == " ") {
    document.querySelector("#student_fatheroccupation_error").innerHTML =
      "*Father Occupation not be empty.";
    studentFatherOccupation.style.borderColor = "red";
  } else {
    studentFatherOccupation.style.borderColor = "green";
    studentFatherOccupation.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the father aadhar number
  if (validateAadhaar(studentFatherAadharNumber.value)) {
    studentFatherAadharNumber.style.borderColor = "green";
    studentFatherAadharNumber.style.borderRadius = "15px";
  } else {
    document.querySelector("#student_fatheraadhar_error").innerHTML =
      "*Invalid Aadhaar card number";
    studentFatherAadharNumber.style.borderColor = "red";
  }
  //* -----------------------------------------Mother Details validating---------------------------------------
  //TODO: --------------------------------------------------------------validating the mother name
  if (studentMotherName.value.length == 0) {
    document.querySelector("#student_mothername_error").innerHTML =
      "*Mother Name is Required";
    studentMotherName.style.borderColor = "red";
  } else if (studentMotherName.value == " ") {
    document.querySelector("#student_mothername_error").innerHTML =
      "*Mother Name not be empty.";
    studentMotherName.style.borderColor = "red";
  } else {
    studentMotherName.style.borderColor = "green";
    studentMotherName.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the mother Mobile Number
  if (studentMotherMobileNumber.value.length == 0) {
    document.querySelector("#student_mothermobile_error").innerHTML =
      "*Mobile Number is Required";
    studentMotherMobileNumber.style.borderColor = "red";
  } else if (studentMotherMobileNumber.value == " ") {
    document.querySelector("#student_mothermobile_error").innerHTML =
      "*Mobile Number not be empty.";
    studentMotherMobileNumber.style.borderColor = "red";
  } else if (studentMotherMobileNumber.value.length < 9) {
    document.querySelector("#student_mothermobile_error").innerHTML =
      "*Mobile Number must be 10 digits.";
    studentMotherMobileNumber.style.borderColor = "red";
  } else {
    studentMotherMobileNumber.style.borderColor = "green";
    studentMotherMobileNumber.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the mother occupation
  if (studentMotherOccupation.value.length == 0) {
    document.querySelector("#student_motheroccupation_error").innerHTML =
      "*Mother Occupation is Required";
    studentMotherOccupation.style.borderColor = "red";
  } else if (studentMotherOccupation.value == " ") {
    document.querySelector("#student_motheroccupation_error").innerHTML =
      "*Mother Occupation not be empty.";
    studentMotherOccupation.style.borderColor = "red";
  } else {
    studentMotherOccupation.style.borderColor = "green";
    studentMotherOccupation.style.borderRadius = "15px";
  }
  //TODO: --------------------------------------------------------------validating the mother aadhar
  if (validateAadhaar(studentMotherAadharNumber.value)) {
    studentMotherAadharNumber.style.borderColor = "green";
    studentMotherAadharNumber.style.borderRadius = "15px";
  } else {
    document.querySelector("#student_motheraadhar_error").innerHTML =
      "*Invalid Aadhaar card number";
    studentMotherAadharNumber.style.borderColor = "red";
  }
}

