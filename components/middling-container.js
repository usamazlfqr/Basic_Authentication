export default function MiddlingContainer({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: 'auto', padding:"20px" }}>
          {children}
      </div>
    </div>
  );
}
