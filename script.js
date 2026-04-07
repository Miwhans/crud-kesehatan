let dataPasien = JSON.parse(localStorage.getItem("pasien")) || [];

function tampilData() {
  let tabel = document.getElementById("tabel");
  tabel.innerHTML = "";

  dataPasien.forEach((item, index) => {
    tabel.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.diagnosa}</td>
        <td>
          <button style="background:orange;" onclick="editData(${index})">Edit</button>
          <button style="background:red;" onclick="hapusData(${index})">Hapus</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("pasien", JSON.stringify(dataPasien));
}

function tambahData() {
  let nama = document.getElementById("nama").value;
  let umur = document.getElementById("umur").value;
  let diagnosa = document.getElementById("diagnosa").value;

  if (nama === "" || umur === "" || diagnosa === "") {
    alert("Semua field harus diisi!");
    return;
  }

  dataPasien.push({ nama, umur, diagnosa });
  tampilData();
}

function hapusData(index) {
  dataPasien.splice(index, 1);
  tampilData();
}

function editData(index) {
  let data = dataPasien[index];
  document.getElementById("nama").value = data.nama;
  document.getElementById("umur").value = data.umur;
  document.getElementById("diagnosa").value = data.diagnosa;

  hapusData(index);
}

tampilData();