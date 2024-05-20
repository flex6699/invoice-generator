export default function Footer() {
  const listItemStyle = {
    color: "#0d1117",
    display: "inline-block",
    fontSize: "18px",
    margin: "2px 10px",
  };

  const lastStyle = {
    display: "inline-block",
    margin: "0 10px",
    fontSize: "15px",
    marginTop: "20px",
    marginBottom: "50px",
    textDecoration: "none",
    color: "#3a97ff",
    fontWeight: "bold",
  };

  return (
    <>
      <footer>
        <ul style={{ textAlign: "center" }}>
          <li style={listItemStyle}>Name: Horizon Restaurant & Cafe</li>
          <li style={listItemStyle}>Email: xyz@gmail.com </li>
          <br />
          <li style={listItemStyle}>Address: Bageshwar</li>
          <li style={listItemStyle}>Mobile: +91 1234567890</li>
          <br />
        </ul>
      </footer>
    </>
  );
}
