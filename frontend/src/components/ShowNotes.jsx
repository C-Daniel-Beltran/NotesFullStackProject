import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alert } from "../functions";

const ShowNotes = () => {
  const url = "http://localhost:3000/api/v1/notes/";
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [op, setOp] = useState(0);
  const [note, setNote] = useState("");
  const [isArchived, setIsArchived] = useState(false);
  const [view, setView] = useState(0);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get(url);
    setNotes(response.data);
  };

  const openModal = (op, id, note, isArchived) => {
    setId("");
    setNote("");
    setOp(op);
    if (op === 1) {
      setTitle("Register Note");
    } else if (op === 2) {
      setTitle("Edit Note");
      setId(id);
      setNote(note);
    }
    window.setTimeout(function () {
      document.getElementById("note").focus();
    }, 500);
  };

  const validate = () => {
    var parameters;
    var methods;
    if (note.trim() === "") {
      show_alert("Enter a note", "warning");
    } else {
      if (op === 1) {
        parameters = { note: note.trim(), isArchived: isArchived };
        methods = "POST";
      } else {
        parameters = { id: id, note: note.trim(), isArchived: isArchived };
        methods = "PUT";
      }

      sendRequest(methods, parameters);
    }
  };

  const sendRequest = async (methods, parameters) => {
    await axios({
      method: methods,
      url: url,
      data: parameters,
    })
      .then(function (response) {
        var type = response.data.tipo;
        var msj = response.data.msj;
        console.log(response);
        show_alert(msj, type);
        if (type === "success") {
          document.getElementById("btnClose").click();
          getNotes();
        }
      })
      .catch(function (error) {
        show_alert("Request error", "error");
        console.log(error);
      });
  };

  const deleteNote = async (id) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you sure to delete the note?",
      icon: "question",
      text: "This action cannot be undone",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      result.isConfirmed
        ? axios.delete(url + id).then(() => {
            show_alert("The note has been deleted", "success");
            getNotes();
          })
        : show_alert("The note has NOT been deleted", "info");
    });
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                onClick={() => openModal(1)}
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalNotes"
              >
                <i className="fa-solid fa-circle-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Note</th>
              <th scope="col">State</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {view === 2
              ? notes.map((note, i = 0) =>
                  !note.isArchived ? (
                    <tr key={note.id}>
                      <td>{i + 1}</td>
                      <td>{note.note}</td>
                      <td>{note.isArchived ? "Archived" : "Active"}</td>
                      <td>
                        <button
                          onClick={() =>
                            openModal(2, note.id, note.note, note.isArchived)
                          }
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#modalNotes"
                        >
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        &nbsp;
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="btn btn-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ) : null
                )
              : view === 3
              ? notes.map((note, i = 0) =>
                  note.isArchived ? (
                    <tr key={note.id}>
                      <td>{i + 1}</td>
                      <td>{note.note}</td>
                      <td>{note.isArchived ? "Archived" : "Active"}</td>
                      <td>
                        <button
                          onClick={() =>
                            openModal(2, note.id, note.note, note.isArchived)
                          }
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#modalNotes"
                        >
                          <i className="fa-solid fa-edit"></i>
                        </button>
                        &nbsp;
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="btn btn-danger"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ) : null
                )
              : notes.map((note, i = 0) => (
                  <tr key={note.id}>
                    <td>{i + 1}</td>
                    <td>{note.note}</td>
                    <td>{note.isArchived ? "Archived" : "Active"}</td>
                    <td>
                      <button
                        onClick={() =>
                          openModal(2, note.id, note.note, note.isArchived)
                        }
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalNotes"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      &nbsp;
                      <button
                        onClick={() => deleteNote(note.id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button onClick={() => setView(1)} className="btn btn-dark">
                <i className="fa-solid fa-list"></i> All
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button onClick={() => setView(2)} className="btn btn-dark">
                <i className="fa-solid fa-filter"></i> Active
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button onClick={() => setView(3)} className="btn btn-dark">
                <i className="fa-solid fa-archive"></i> Archived
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="modalNotes" className="modal fade" arial-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="h5">{title}</label>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input type="hidden" id="id" />
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa-solid fa-file-text"></i>
                </span>
                <input
                  type="text"
                  id="note"
                  className="form-control"
                  placeholder="Note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    State
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    onChange={(e) => {
                      e.target.value === "true"
                        ? setIsArchived(true)
                        : setIsArchived(false);
                    }}
                  >
                    <option value={false}>Activate</option>
                    <option value={true}>File</option>
                  </select>
                </div>
                <button onClick={() => validate()} className="btn btn-success">
                  <i className="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="btnClose"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNotes;
