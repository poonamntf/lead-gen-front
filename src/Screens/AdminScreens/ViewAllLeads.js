import React from "react";

const ViewAllLeads = () => {
  return (
    <div>
      <div className=" w-100 dashboardmain">
        <div className="dashboardmaintop mt-5 d-flex align-items-center justify-content-between">
          <div>
            <img className="arrowimage" src={lessthan} />
            Real Estate
          </div>
          <div>
            <Button onClick={handleShow} className="importbutton">
              Import <img src={importpic} />
            </Button>
            <Button className="createcontactbutton">
              Create Contact <img src={pluscircle} />{" "}
            </Button>
          </div>
        </div>
        <div className="tablediv mt-5">
          <table>
            <thead className="mb-5 pb-5">
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone No.</td>
                <td>Status</td>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        {" "}
                        {<img src={item.image} />} {item.name}
                      </td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td
                        className={
                          item.status == "booked" ? "booked" : "notinterested"
                        }
                      >
                        {item.status}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Import</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            Choose List
            <Form.Select
              name="language"
              className="form-control"
              aria-label="Language"
              required
            >
              <option value="">Choose List</option>
              <option value="english">Real Estate</option>
              <option value="hindi">Construction</option>
              <option value="english">Credit Card</option>
              <option value="hindi">Insurance</option>
            </Form.Select>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              multiple={false}
            />
          </Modal.Body>
          <Modal.Footer>
            <div className="importbuttonsecond">
              <Button variant="primary" onClick={handleClose}>
                Import
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showModal2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="createcontact">Create Contact</Modal.Title>
        </Modal.Header>
        <Form className="modalform">
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your number" />
            </Form.Group>
            <div className="chooselist">Choose List</div>
            <div className="selectlist">
              <Form.Select
                name="language"
                className="form-control"
                aria-label="Language"
                required
              >
                <option value="">Choose List</option>
                <option value="english">Real Estate</option>
                <option value="hindi">Construction</option>
                <option value="english">Credit Card</option>
                <option value="hindi">Insurance</option>
              </Form.Select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="submitbutton">
              <Button variant="primary" onClick={handleClose} type="submit">
                Submit
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ViewAllLeads;
