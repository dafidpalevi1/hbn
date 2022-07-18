import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  let filteredTask = [...users];
  if (searchInput?.length > 0) {
    filteredTask = filteredTask.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.paket.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.jatuhTempoPembayaran
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        item.buktiPembayaran
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  console.log(filteredTask, "filter");
  console.log(typeof searchInput, "search");

  return (
    <div>
      <div className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading is-size-4">Cari Nama Pelanggan</p>
            <p className="title">
              <input
                type="search"
                className=""
                placeholder=""
                onChange={handleChange}
                value={searchInput}
              />
            </p>
          </div>
        </div>
      </div>
      <div style={{ overflowX: "scroll" }}>
        <Link to={`add`} className="button bg-info">
          Tambah Pemasang Baru
        </Link>
        <table style={{ border: "1px solid" }}>
          <thead style={{ border: "1px solid", whiteSpace: "nowrap" }}>
            <tr style={{ border: "1px solid", padding: "20px" }}>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "0",
                  paddingLeft: "0",
                }}
              >
                No.
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Tanggal Pasang
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "80px",
                  paddingLeft: "80px",
                }}
              >
                Nama
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                No HP
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                No ID
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Paket
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Jatuh Tempo Pembayaran
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Bukti Pembayaran
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Jumlah Tagihan
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Harga Pembayaran
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Tanggal Pembayaran
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Sisa Piutang
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Keterangan
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Upload
              </th>
              <th
                style={{
                  border: "1px solid",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingRight: "50px",
                  paddingLeft: "50px",
                }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody style={{ border: "1px solid" }}>
            {users.length > 0 &&
              filteredTask.map((user, index) => (
                <tr style={{ border: "1px solid" }} key={user.id}>
                  <td style={{ border: "1px solid" }}>{index + 1}</td>
                  <td style={{ border: "1px solid" }}>{user.tanggalPasang}</td>
                  <td style={{ border: "1px solid" }}>{user.name}</td>
                  <td style={{ border: "1px solid" }}>{user.noHp}</td>
                  <td style={{ border: "1px solid" }}>{user.id}</td>
                  <td style={{ border: "1px solid" }}>{user.paket}</td>
                  <td style={{ border: "1px solid" }}>{user.jatuhTempoPembayaran}</td>
                  <td style={{ border: "1px solid" }}>{user.buktiPembayaran}</td>
                  <td style={{ border: "1px solid" }}>{user.jumlahTagihan}</td>
                  <td style={{ border: "1px solid" }}>{user.hargaPembayaran}</td>
                  <td style={{ border: "1px solid" }}>{user.tanggalPembayaran}</td>
                  <td style={{ border: "1px solid" }}>{user.sisaPiutang}</td>
                  <td style={{ border: "1px solid" }}>{user.keterangan}</td>
                  <td style={{ border: "1px solid" }}>{user.upload}</td>
                  <td style={{ border: "1px solid" }}>
                    <Link
                      to={`edit/${user.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="button is-small is-danger"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
