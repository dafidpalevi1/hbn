import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [tanggalpasang, setTanggalpasang] = useState("");
  const [name, setName] = useState("");
  const [nohp, setNohp] = useState("");
  const [noid, setNoid] = useState("");
  const [paket, setPaket] = useState("hemat");
  const [jatuhtempopembayaran, setJatuhtempopembayaran] = useState("");
  const [buktipembayaran, setBuktipembayaran] = useState("cash");
  const [jumlahtagihan, setJumlahtagihan] = useState("Rp.116.500");
  const [hargapembayaran, setHargapembayaran] = useState("");
  const [tanggalpembayaran, setTanggalpembayaran] = useState("");
  const [sisapiutang, setSisapiutang] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        tanggalpasang,
        name,
        nohp,
        noid,
        paket,
        jatuhtempopembayaran,
        buktipembayaran,
        jumlahtagihan,
        hargapembayaran,
        tanggalpembayaran,
        sisapiutang,
        keterangan,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
        <div className="field">
            <label className="label">Tanggal Pasang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tanggalpasang}
                onChange={(e) => setTanggalpasang(e.target.value)}
                placeholder="Tanggal Pasang"
              />
            </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No Hp</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nohp}
                onChange={(e) => setNohp(e.target.value)}
                placeholder="Nohp"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No ID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={noid}
                onChange={(e) => setNoid(e.target.value)}
                placeholder="Noid"
              />
            </div>
          </div>
          </div>
          <div className="field">
            <label className="label">Paket</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={paket}
                  onChange={(e) => setPaket(e.target.value)}
                >
                  <option value="Hemat">Hemat</option>
                  <option value="Mantap">Mantap</option>
                  <option value="Jitu">Jitu</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Jatuh Tempo Pembayaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jatuhtempopembayaran}
                onChange={(e) => setJatuhtempopembayaran(e.target.value)}
                placeholder="Jatuhtempopembayaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Bukti Pembayaran</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={buktipembayaran}
                  onChange={(e) => setBuktipembayaran(e.target.value)}
                >
                  <option value="Cash">Cash</option>
                  <option value="Livin">Livin</option>
                  <option value="Qris">Qris</option>
                  <option value="Gopay">Gopay</option>
                  <option value="Link">Link</option>
                  <option value="Dana">Dana</option>
                  <option value="Shopee Pay">Shopee Pay</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Jumlah Tagihan</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jumlahtagihan}
                  onChange={(e) => setJumlahtagihan(e.target.value)}
                >
                  <option value="Rp.116.500">Rp.116.500</option>
                  <option value="Rp.277.500">Rp.277.500</option>
                  <option value="Rp.438.500">Rp.438.500</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Harga Pembayaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hargapembayaran}
                onChange={(e) => setHargapembayaran(e.target.value)}
                placeholder="hargapembayaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Pembayaran</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tanggalpembayaran}
                onChange={(e) => setTanggalpembayaran(e.target.value)}
                placeholder="tanggalpembayaran"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Sisa Piutang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={sisapiutang}
                onChange={(e) => setSisapiutang(e.target.value)}
                placeholder="Sisapiutang"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Keterangan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                placeholder="Keterangan"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Upload</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
