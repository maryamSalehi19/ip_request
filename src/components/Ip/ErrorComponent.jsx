export default function ErrorComponent ({ error }) {
  return error ? <p style={{ color: 'red' }}>{error}</p> : null;
};