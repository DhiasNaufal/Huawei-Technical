// Logo Muter Muter
$(document).ready(function () {
  $("#nama").keyup(function () {
    $("#errorNama").text("");
    $("#errorForm").text("");
  });
  $("#email").keyup(function () {
    $("#errorEmail").text("");
    $("#errorForm").text("");
  });
  $("#telpon").keyup(function () {
    $("#errorNama").text("");
    $("#errorTelpon").text("");
  });
});

function validateForm(e) {
  e.preventDefault();
  var username = $("#nama").val();
  var email = $("#email").val();
  var telpon = $("#telpon").val();

  if (username.trim() === "") {
    $("#errorNama").text("Nama tidak boleh kosong");
  } else {
    $("#errorNama").text("");
  }
  if (email === "") {
    $("#errorEmail").text("Email tidak boleh kosong");
  } else {
    $("#errorEmail").text("");
  }
  if (telpon === "") {
    $("#errorTelpon").text("Nomor Telpon tidak boleh kosong");
  } else {
    $("#errorTelpon").text("");
  }
  if (
    $("#errorNama").text() === "" &&
    $("#errorEmail").text() === "" &&
    $("#errorTelpon").text() === ""
  ) {
    login();
  }
}

function login() {
  alert("masuk");
  const formData = {
    nama: $("#nama").val(),
    email: $("#email").val(),
    telpon: $("#telpon").val(),
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/form",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function (response) {
      console.log("Data berhasil dikirim ke server:", response);
      displayFormData(); // Panggil fungsi untuk menampilkan data formulir dari server
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}
function displayFormData() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/form",
    success: function (data) {
      console.log("Data formulir dari server:", data);
      $("#responseData").empty();
      if (data.length === 0) {
        $("#responseData").html(
          "<p>Tidak ada data formulir yang disimpan.</p>"
        );
      } else {
        data.forEach((form) => {
          $("#responseData").append(
            `<p>Nama: ${form.nama}, Email: ${form.email}, Telpon: ${form.telpon}</p>`
          );
        });
      }
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}
