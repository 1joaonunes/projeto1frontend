function Header({ handleSignout }) {
  return (
    <div className="col-12 d-flex justify-content-between align-items-center p-2">
      
      <div className="fw-bold">A1Pr0ject</div>

      <button className="btn btn-outline-danger btn-sm" onClick={handleSignout}>
        Sair
      </button>

    </div>
  );
}

export default Header;